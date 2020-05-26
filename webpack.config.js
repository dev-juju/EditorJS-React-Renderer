const path = require('path');

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: path.normalize(`${__dirname}/index.jsx`),
  output: {
    path: path.normalize(`${__dirname}/dist`),
    filename: 'index.min.js',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'isomorphic-style-loader!css-loader'
      }
    ],
  }
};
