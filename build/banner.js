const pkg = require('../package.json');

const banner = [
  ` @author ${pkg.author}`,
  ` @name ${pkg.name}`,
  ` @description ${pkg.description}`,
  ` @version ${pkg.version}`,
  ` @release ` + new Date().toUTCString()
].join('\n');

module.exports = banner;