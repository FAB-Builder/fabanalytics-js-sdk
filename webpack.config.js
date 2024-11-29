//https://github.com/axios/axios/issues/456
const path = require("path");
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "fabanalytics.js",
    library: "fabanalytics",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    fallback: {
      assert: require.resolve('assert/'), // Use the `assert` polyfill
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser', // Required for Node.js process polyfill
    }),
  ],
};
