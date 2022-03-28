const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  // for less-loader@6.0.0
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#ac28ff",
            "link-color": "#ac28ff",
            "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        // target: "http://119.3.26.182:3000/api/",
        // target: "http://119.3.26.182:3008/api/",
        target: "http://localhost:3008",
        // pathRewrite: { "^/api": "" },
      },
    },
  },
  // ...other config
})
