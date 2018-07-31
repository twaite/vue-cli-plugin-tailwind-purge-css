module.exports = (api, projectOptions) => {
  api.registerCommand('hello', args => {
    console.log('Hello World')
  })
}
