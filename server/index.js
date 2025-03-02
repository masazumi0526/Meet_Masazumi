import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Page from '../src/pages/meetme.page.tsx'; // SSR 用のページコンポーネント

const app = express();

// 静的ファイルの提供設定を修正 (CSSを無視)
app.use(express.static(path.resolve('dist')));

// ページ表示時にCSSを読み込まない
app.get('/', (req, res) => {
  const html = renderToString(<Page />);
  res.send(`
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meet MASAZUMI</title>
        <!-- CSS ファイルを読み込まない -->
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="module" src="/src/entry-client.tsx"></script>
      </body>
    </html>
  `);
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
