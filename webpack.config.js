var webpack = require('webpack')
var EXCLUDE = /node_modules|bower_components/

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const path = require('path')

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: {
    common: ['./src/scripts/common.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './assets')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter')
            }
          }
        ],
        exclude: EXCLUDE
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // translates CSS into CommonJS
            // options: {
            //   url: false, // 对css中图片的url地址不进行转换
            // }
          },
          "postcss-loader",
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jQuery',
      'windows.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify('production')
    })
  ],
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
}
