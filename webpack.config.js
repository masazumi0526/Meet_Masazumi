const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.ts',
  target: 'node',
  externals: [nodeExternals()], // Node.js のビルトインモジュールをバンドルから除外
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // CSSのローダーは削除して、サーバーでCSSを無視
      {
        test: /\.css$/,
        use: [], // CSSの読み込みを無効化
      },
    ],
  },
};
