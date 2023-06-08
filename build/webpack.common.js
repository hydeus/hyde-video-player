/**
 * webpack 基础配置
 */

const path = require('path');
const webpack = require('webpack');
const webpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const constants = require('./constants');
const banner = require('./banner.js');
const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    'JS-SDK': path.resolve(constants.srcPath, 'index.ts')
  },
  output: {
    // output中的path是生成目标文件的绝对路径，但是目标文件路径中是看不到编译后的文件，因为webpack-dev-server实时编译的文件都保存到了内存中
    // output中的publicPath是访问output生成的文件的路径（是一个访问路径，不需要对应真实的文件路径）
    path: path.resolve(constants.distPath),
    publicPath: '/dist/', // 静态资源页面访问路径
    filename: ENV === 'production' ? '[name].min.js' : '[name].js',
    library: constants.windowGlobalName,
    libraryExport: 'default',
    // 统一模块定义，这种模块语法会自动监测开发人员使用的是 Common.js/AMD/import/export 种的哪种方式，然后再针对各自的语法进行导出，这种方式可以兼容所有其他的模块定义方法
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      '@': constants.srcPath,
    },
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          // This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
          ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.svg/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpe?g)$/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            // name: '[name].[hash:8].[ext]',
            name: '[name].[ext]',
            limit: 5 * 1024,
            fallback: 'file-loader'
          }
        },
        type: 'javascript/auto' //转换 json 为 js
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    // @ts-ignore
    new webpackBar(),
    // new HtmlWebpackPlugin({
    //   template: constants.publicPath + '/index.html',
    // }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: ENV === 'production' ? '[name].min.css' : '[name].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new webpack.BannerPlugin({
      banner
    })
  ]
}