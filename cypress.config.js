const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demowebshop.tricentis.com/",
    defaultCommandTimeout: 4000,
    screenshotOnRunFailure : true,
    video: true
  },
  env: {
    baseUrl: "https://demowebshop.tricentis.com/", 
  }
});
