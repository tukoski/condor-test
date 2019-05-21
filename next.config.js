const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

module.exports = withCss(
  withSass({
    exportPathMap: function() {
      return {
        "/": { page: "/" }
      };
    },
    assetPrefix: process.env.NODE_ENV === "production" ? "/condor-test/" : "",
    distDir: "../build",
    webpack(config) {
      config.resolve.modules.push("src");
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000
          }
        }
      });
      config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader") {
          rule.options.cacheDirectory = false;
        }
        return rule;
      });
      return config;
    }
  })
);
