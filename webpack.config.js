//https://github.com/axios/axios/issues/456
const path = require("path");
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
};
