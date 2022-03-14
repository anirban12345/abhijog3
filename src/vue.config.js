
// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({  
  port: 8081
})

module.exports = {
  configureWebpack: {
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' }
    }
  }
}

