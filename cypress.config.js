const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth	: 1920,
  e2e: {
    baseUrl: 'https://nina-jane.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})

