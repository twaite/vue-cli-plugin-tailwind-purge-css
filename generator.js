module.exports = (api, options, rootOptions) => {
  // Install Tailwind and Purge CSS packages
  api.extendPackage({
    devDependencies: {
      tailwindcss: '*',
      '@fullhuman/postcss-purgecss': '*'
    }
  })
  // Render template
  api.render('./template')
}
