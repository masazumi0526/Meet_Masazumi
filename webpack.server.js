import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  entry: './server/index.js',
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()], // node_modules をバンドルしない
  output: {
    path: path.resolve('dist'),
    filename: 'server.cjs', // CommonJS 形式で出力
    libraryTarget: 'commonjs2', // CommonJS のエクスポート形式に統一
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'], // .ts と .tsx を解決する設定
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // .ts と .tsx ファイルを処理する
        use: 'ts-loader',  // ts-loader を使ってトランスパイル
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
