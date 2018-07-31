module.exports = api => {
  api.describeConfig({
    id: 'com.tailwind-purge.ti-pa-to',
    name: 'Tailwind Purge CSS',
    description: 'Tailwind CSS with Purge',
    link: 'https://github.com/ti-pa-to/vue-cli-plugin-tailwind-purge-css',
    files: {
      vue: {
        js: ['vue.config.js']
      }
    },
    onRead: ({ data, cwd }) => {},
    onWrite: ({ prompts, answers, data, files, cwd, api }) => {}
  })
}
