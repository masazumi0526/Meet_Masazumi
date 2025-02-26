import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()], // node_modules をバンドルしない
  output: {
    path: path.resolve('dist'),
    filename: 'server.cjs',
    libraryTarget: 'module', // 出力を ES Module にする
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
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
