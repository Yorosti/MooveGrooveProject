process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')
config.assets.compile = true
config.assets.digest = true
module.exports = environment.toWebpackConfig()
