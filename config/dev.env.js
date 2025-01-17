'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '""', // API基础地址
  MS_PATH: '""', // MS_PATH
  LOGO_URL:'""'
})
