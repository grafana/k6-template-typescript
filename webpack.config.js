const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'src'),
  entry: {
    test1: './test1.ts',
    test2: './test2.ts',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
      },
    ],
  },
  target: 'web',
  externals: /^k6(\/.*)?/,
  stats: {
    colors: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}
