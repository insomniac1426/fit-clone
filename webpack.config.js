const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new Dotenv(),
  ],
  resolve: {
    alias: {
      UI: path.resolve(__dirname, "src/App/components/UI"),
      API: path.resolve(__dirname, "src/App/components/api"),
      Utils: path.resolve(__dirname, "src/App/components/common/utils"),
      Hooks: path.resolve(__dirname, "src/App/components/common/hooks"),
      Constants: path.resolve(__dirname, "src/App/components/common/constants"),
    },
  },
  devServer: {
    port: 9000,
    // https: true,
  },
};
