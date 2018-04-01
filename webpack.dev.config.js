const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./client/index.html",
  filename: "index.html",
  inject: "body"
});


module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
	      exclude: "/node_modules/",
	      use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.jsx$/,
	      exclude: "/node_modules/",
	      use: ["babel-loader", "eslint-loader"]
      }
     ]
  },
  plugins: [HtmlWebpackPluginConfig]
};
