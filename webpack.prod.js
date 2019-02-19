const { join } = require('path');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  output: {
    filename: '[name]-[chunkhash].js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      minify: {
        html5: true,
        removeComments: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        decodeEntities: true,
      },
      title: 'Secure Patch',
      template: join(__dirname, 'client/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[chunkhash].css',
      chunkFilename: '[id].css'
    })
  ]
});
