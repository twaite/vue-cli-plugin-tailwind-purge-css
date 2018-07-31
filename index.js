module.exports = (api, options) => {
  api.configureWebpack(webpackConfig => {
    console.log('I am here thanks')
    console.log(webpackConfig)
    console.log('----------')
  })
}
