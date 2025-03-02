import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  entry: './server/index.js',
  target: 'node',
  mode: 'development', // 開発モードに設定
  externals: [nodeExternals()], // node_modules をバンドルしない
  output: {
    path: path.resolve('dist'),
    filename: 'server.cjs',
    libraryTarget: 'module', // ES Module 形式で出力
  },
  experiments: {
    outputModule: true, // ES Module の出力を許可
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true, // CSS Modules を有効化
              exportType: "css-style-sheet", // サーバー用の適切なエクスポート形式
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
