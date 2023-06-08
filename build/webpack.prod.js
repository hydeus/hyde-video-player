// @ts-nocheck

/**
 * 生产环境配置
 */

const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // 开启多进程
        extractComments: false, // 不将注释提取到单独的文件中
      }),

      new CssMinimizerPlugin()
    ]
  },
});