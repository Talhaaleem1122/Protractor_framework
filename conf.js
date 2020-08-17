exports.config = {


  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
 
multiCapabilities: [
  {'browserName': 'chrome'},
  {'browserName': 'firefox'},
  
],


    // set to "custom" instead of cucumber.
    framework: 'custom',
   
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
   
    // require feature files
    specs: [
      './Features/Home.feature' // accepts a glob
    ],
   
    cucumberOpts: {
      // require step definitions
      require: [
        './StepDefinitions/Home_steps.js',
        './Support/env.js'
        // accepts a glob
      ]
    }
  };