const path = require("path");

module.exports = {
  mode: "production",
  externals: ["react", "html-react-parser", "buffer", "classnames"],
  // mode: 'development',
  // devtool: 'source-map',
  entry: path.normalize(`${__dirname}/index.tsx`),
  output: {
    path: path.normalize(`${__dirname}/dist`),
    filename: "index.min.js",
    libraryTarget: "umd",
    globalObject: 'typeof self !== "undefined" ? self : this',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["isomorphic-style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
