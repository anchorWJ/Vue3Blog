const hardPlugin = require("hard-source-webpack-plugin")
const { resolve } = require("path")

module.exports = {
    publicPath: "./",
    devServer: {
      proxy: {
        "/api": {
          target: "http://app:3000",
          changeOrigin: true,
          secure: false
        }
      }
    },
    configureWebpack: {
        plugins: [
            new hardPlugin({
                cacheDirectory: resolve(__dirname, "cache")
            })
        ],
        resolve: {
            alias: {
                "@c": resolve(__dirname, "src/components"),
                "@a": resolve(__dirname, "src/assets"),
                "@b": resolve(__dirname, "src/blocks"),
                "@u": resolve(__dirname, "src/use"),
                "@r": resolve(__dirname, "src/router"),
                "@v": resolve(__dirname, "src/views"),
                "@l": resolve(__dirname, "src/layout"),
                "@p": resolve(__dirname, "src/plugins"),
                "@vp": resolve(__dirname, "src/view-provider"),
            }
        }
    }
}