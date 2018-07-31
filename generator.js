module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      hello: 'vue-cli-service hello'
    }
  })
}
