const { join } = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js')(false);

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
  }
});