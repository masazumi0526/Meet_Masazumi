import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Page from '../src/pages/meetme.page.js'; // SSR 用のページコンポーネント
import path from 'path';

const app = express();

// 静的ファイルを提供（例: CSS など）
app.use(express.static(path.resolve('dist')));

app.get('/', (req, res) => {
  const html = renderToString(React.createElement(Page));

  res.send(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Meet MASAZUMI</title>
      <link rel="stylesheet" href="/meetmepage.module.css">
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
