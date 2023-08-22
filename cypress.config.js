const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://demowebshop.tricentis.com/",
    defaultCommandTimeout: 4000,
    //screenshotOnRunFailure : true,
    video: true
  },
  env: {
    baseUrl: "https://demowebshop.tricentis.com/", 
  },
  reporter: "cypress-testrail-all-status",
  reporterOptions: {
    host: "https://anisanursekararum.testrail.io/",
    username: "anisanursekararum@gmail.com",
    password: "0tlx7vmgZ02QqEXBKyX2-yRP638zgDoXlwUUY23h4",
    projectId: 1,
    runId: 1
  }
});
