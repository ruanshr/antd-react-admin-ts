const path = require("path");
const {
  override,
  disableEsLint,
  addWebpackAlias,
  overrideDevServer,
  watchAll,
} = require("customize-cra");

module.exports = {
  webpack: override(
    // usual webpack plugin
    addWebpackAlias({
      /*eslint no-useless-computed-key: */
      ["@"]: path.resolve(__dirname, "src"),
    }),
    disableEsLint()
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  ),
};
