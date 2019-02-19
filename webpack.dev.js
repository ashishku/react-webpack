const { join } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    disableHostCheck: true,
    host: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080
  },
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      minify: {
        html5: true,
        removeComments: false,
        collapseWhitespace: false,
        preserveLineBreaks: true,
        decodeEntities: true,
      },
      title: 'Secure Patch',
      template: join(__dirname, 'client/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});