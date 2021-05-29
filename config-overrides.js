const path = require("path");
const {
  override,
  disableEsLint,
  addWebpackAlias,
  overrideDevServer,
  addWebpackPlugins,
  fixBabelImports,
  watchAll,
  ...args
} = require("customize-cra");

module.exports = {
  webpack: override(
    fixBabelImports("import",{
        "libraryName":"antd",
        "libraryDirectory": "es",
        "style":"css",
    }),
    // usual webpack plugin
    addWebpackAlias({
      ["@/*"]: path.resolve(__dirname, "src"),
    }),
    disableEsLint()
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  ),
};
