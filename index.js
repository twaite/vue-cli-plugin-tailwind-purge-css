module.exports = (api, projectOptions) => {
  console.log('Thanks i am here')
  console.log(projectOptions)
  api.registerCommand('halay', args => {
    console.log('Canavar misin')
  })
}
