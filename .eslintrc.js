module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
    sourceType: "module",
  },
  env: {
    browser: true,
  },
  rules: {
    "no-useless-computed-key": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
  },
};
