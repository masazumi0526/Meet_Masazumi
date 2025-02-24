// Express モジュールをインポート
import express from 'express';

// Express アプリケーションのインスタンスを作成
const app = express();

// サーバーのポート番号を指定（9000番）
const port = 9000;

// ルートパス ('/') に対する GET リクエストの処理
app.get('/', (req, res) => {
  // レスポンスとして 'Hello world' を送信
  res.send('Hello world');
});

// アプリケーションを指定したポートでリスン（サーバーを起動）
app.listen(port, () => {
  // サーバーが正常に起動したことをコンソールに表示
  console.log(`Server is running on http://localhost:${port}`);
});
