const { defineConfig } = require("cypress");

//For Cucumber Integration
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin

module.exports = defineConfig({
  e2e: {
    projectId: "6cbso8",
    chromeWebSecurity: false,
    baseUrl: "https://www.saucedemo.com/",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: false,// from true to false
      inlineAssets: true,
      saveAllAttempts: false,
    },
    specPattern: ["**/*.feature", "cypress/e2e/*.cy.{js,jsx,ts,tsx}"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addCucumberPreprocessorPlugin(on, config)
      on(
        'file:preprocessor',
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        })
      )
      return config
      
    },
  },
});
