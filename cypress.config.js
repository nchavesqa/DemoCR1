const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pouhot",
  e2e: {

    video: true,
    experimentalStudio: true,

    setupNodeEvents(on, config) {     
    },
    viewportWidth: 1600,
    viewportHeight: 920,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 20000

  },

});
