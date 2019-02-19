const { join } = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(isProd) {
  return {
    entry: {
      main: './client/index.jsx',
      en: './i18n/en.js',
      fr: './i18n/fr.js',
    },
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            "css-loader",
          ]
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            MiniCssExtractPlugin.loader,
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        },
        {
          test: /\.html$/,
          use: [{
            loader: "html-loader"
          }]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: ['file-loader']
        }
      ]
    },
    output: {
      path: join(__dirname, 'dist'),
      publicPath: '/'
    },
    plugins: [
      new HtmlWebPackPlugin({
        chunks: [
          'en', 'main'
        ],
        minify: {
          html5: true,
          removeComments: isProd,
          collapseWhitespace: isProd,
          preserveLineBreaks: !isProd,
          decodeEntities: true,
        },
        title: 'Secure Patch',
        template: join(__dirname, 'client/index.html')
      }),
      new HtmlWebPackPlugin({
        chunks: [
          'fr', 'main'
        ],
        filename: join(__dirname, 'dist/fr/index.html'),
        minify: {
          html5: true,
          removeComments: isProd,
          collapseWhitespace: isProd,
          preserveLineBreaks: !isProd,
          decodeEntities: true,
        },
        title: 'Secure Patch',
        template: join(__dirname, 'client/index.html')
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? '[name]-[chunkhash].css' : '[name].css',
        chunkFilename: '[id].css'
      })
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    target: 'web'
  }
};
