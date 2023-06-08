// @ts-nocheck

/**
 * 开发环境配置
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: false,
  devServer: {
    // host: '0.0.0.0',
    port: 6666,
    open: true,
    // hot: true,
    historyApiFallback: true,
    client: {
      progress: true,
    }
  },
  watchOptions: {
    ignored: /(node_modules)/,
    aggregateTimeout: 600
  },
});