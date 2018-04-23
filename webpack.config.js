const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    bundle: path.resolve(__dirname, './example/assets/client.jsx')
  },
  output: {
    path: path.resolve(__dirname, './assets')
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/components\/layout/, require.resolve('./example/views/stub.jsx'))
  ]
};
