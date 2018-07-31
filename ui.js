module.exports = (api, projectOptions) => {
  console.log('Thanks i am here')
  console.log(projectOptions)
  api.describeConfig({
    // Unique ID for the config
    id: 'com.tailwindpurge.tipato',
    // Displayed name
    name: 'Tailwind Purge CSS',
    // Shown below the name
    description: 'Tailwind CSS with Purge',
    // "More info" link
    link: 'https://github.com'
  })
}
