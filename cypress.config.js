const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 768,
    viewportWidth: 1366,
    defaultCommandTimeout: 60000,
    baseUrl: "https://www.saucedemo.com/v1/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
