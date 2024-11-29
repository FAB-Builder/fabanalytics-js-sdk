//https://github.com/axios/axios/issues/456
const path = require("path");
// const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  // target: "node",
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
  plugins: [new NodePolyfillPlugin()],
  // resolve: {
  //   fallback: {
  //     assert: require.resolve('assert/'), // Use the `assert` polyfill
  //     http: require.resolve("stream-http"),
  //     https: require.resolve("https-browserify"),
  //     os: require.resolve("os-browserify/browser"),
  //     path: require.resolve("path-browserify"),
  //     stream: require.resolve("stream-browserify"),
  //     tty: require.resolve("tty-browserify"),
  //     url: require.resolve("url/"),
  //     zlib: require.resolve("browserify-zlib"),
  //     fs: false,
  //   },
  // },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     process: 'process/browser', // Required for Node.js process polyfill
  //   }),
  // ],
};
