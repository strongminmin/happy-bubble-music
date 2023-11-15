const { defineConfig } = require('@vue/cli-service')
const registerRouter = require('./backend/router')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量 和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    onBeforeSetupMiddleware(devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }
      registerRouter(devServer.app)
    }
  }
})
