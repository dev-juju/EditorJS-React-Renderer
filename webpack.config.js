const path = require('path');

module.exports = {
  mode: 'production',
  // mode: 'development',
  // devtool: 'source-map',
  entry: path.normalize(`${__dirname}/index.jsx`),
  output: {
    path: path.normalize(`${__dirname}/dist`),
    filename: 'index.min.js',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== "undefined" ? self : this'
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
        loader: 'isomorphic-style-loader!css-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
    }
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
  }
};
