const express = require('express');
const { renderToString } = require('react-dom/server');
const React = require('react');
const path = require('path');
const Page = require('../src/pages/meetme.page.js'); // SSR 用のページコンポーネント

const app = express();

// 静的ファイルを提供（例: CSS など）
app.use(express.static(path.resolve('dist')));

// CSS ファイルも静的ファイルとして提供
app.use('/styles', express.static(path.resolve(__dirname, '../src/styles')));

app.get('/', (req, res) => {
  const html = renderToString(React.createElement(Page));

  res.send(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Meet MASAZUMI</title>
      <link rel="stylesheet" href="/styles/meetmepage.module.css"> <!-- CSS ファイルのリンクを修正 -->
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
