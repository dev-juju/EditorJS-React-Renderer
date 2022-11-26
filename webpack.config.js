const path = require('path');

module.exports = {
  mode: 'production',
  // mode: 'development',
  // devtool: 'source-map',
  entry: path.normalize(`${__dirname}/index.tsx`),
  output: {
    path: path.normalize(`${__dirname}/dist`),
    filename: 'index.min.js',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== "undefined" ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
