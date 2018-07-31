module.exports = (api, options, rootOptions) => {
  console.log('Tailwind / Purge CSS plugin is getting installed...')
  console.log(options)
  console.log('---')
  console.log(rootOptions)

  // Install Tailwind and Purge CSS packages
  api.extendPackage({
    devDependencies: {
      tailwindcss: '*',
      '@fullhuman/postcss-purgecss': '*'
    }
  })

  // Render template
  api.render('./template')

  // Modify main (.js | .ts)
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
    lines[lastImportIndex] += `\n\n// Tailwind\nimport './tailwind/tailwind.css'`

    // modify app
    contentMain = lines.reverse().join('\n')
    fs.writeFileSync(mainPath, contentMain, { encoding: 'utf-8' })
  })
}
