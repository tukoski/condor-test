const withSass = require("@zeit/next-sass")
const withCss = require("@zeit/next-css")

module.exports = withCss(
  withSass({
    distDir: "../build",
    webpack(config) {
      config.resolve.modules.push("src")
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      })
      return config
    },
  })
)
