/**
 * 常量
 */

const path = require('path');

const rootPath = path.resolve(__dirname, '../'); // 根目录
const srcPath = path.resolve(rootPath, 'src'); // src
const publicPath = path.resolve(rootPath, 'public'); // public
const distPath = path.resolve(rootPath, 'dist'); // dist

module.exports = {
  rootPath,
  srcPath,
  distPath,
  publicPath,
  windowGlobalName: 'HydePlayer'
};