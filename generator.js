module.exports = (api, options, rootOptions) => {
  // Install Tailwind and Purge CSS packages
  api.extendPackage({
    devDependencies: {
      tailwindcss: '*',
      '@fullhuman/postcss-purgecss': '*'
    }
  })

  // Render template
  console.log('Cok yasa')
  console.log(api.resolve(''))
  console.log(
    `${api.resolve('')}/node_modules/tailwindcss/defaultConfig.stub.js`
  )
  console.log('--------')
  api.render(
    `${api.resolve('')}/node_modules/tailwindcss/defaultConfig.stub.js`
  )
  api.render('./template')

  // Modify main
  let importLines = `\nimport './tailwind.css'`
  api.onCreateComplete(() => {
    // inject to main.js
    const fs = require('fs')
    const ext = api.hasPlugin('typescript') ? 'ts' : 'js'
    const mainPath = api.resolve(`./src/main.${ext}`)

    // get content
    let contentMain = fs.readFileSync(mainPath, { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g).reverse()

    // inject import
    const lastImportIndex = lines.findIndex(line => line.match(/^import/))
    lines[lastImportIndex] += importLines

    // modify app
    contentMain = lines.reverse().join('\n')
    fs.writeFileSync(mainPath, contentMain, { encoding: 'utf-8' })
  })
}
