/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    "eslint:recommended",
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // 上线环境用打印就报警告, 开发环境关闭此规则
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // debugger可以终止代码执行
    "camelcase": ["warn"],
    "no-multiple-empty-lines": "off", // 不允许有连续多行空行(关闭规则)
    "quotes": ["error", "single"], // 单引号
    "no-trailing-spaces": ["error", { "skipBlankLines": true }], // 允许空白
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "no-prototype-builtins": "off",
    "brace-style": "off",
    "vue/multi-word-component-names": "off",
    "linebreak-style": "off"
  }
}
