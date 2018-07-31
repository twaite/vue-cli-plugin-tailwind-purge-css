module.exports = (api, projectOptions) => {
  console.log('Thanks i am here')
  console.log(projectOptions)
  api.describeConfig({
    // Unique ID for the config
    id: 'com.tailwind-purge.ti-pa-to',
    // Displayed name
    name: 'Tailwind Purge CSS',
    // Shown below the name
    description: 'Tailwind CSS with Purge',
    // "More info" link
    link: 'https://github.com/ti-pa-to/vue-cli-plugin-tailwind-purge-css',
    onRead: ({ data, cwd }) => ({
      prompts: [
        // Prompt objects
      ]
    })
  })
}
