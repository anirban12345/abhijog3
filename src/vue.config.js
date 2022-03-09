
// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  proxy: 'http://localhost:8080',
  port: 8081
})



