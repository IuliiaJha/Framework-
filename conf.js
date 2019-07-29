var PropertiesReader = require('properties-reader');
// var prop = PropertiesReader('/Users/iuliia/Documents/Framework/CucumberJS/features/property/prop.properties');
var prop = PropertiesReader('./features/property/prop.properties');
exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    directConnect: true,
    getPageTimeout :prop.get('PageTimeout'),
    allScriptsTimeout: prop.get('ScriptsTimeout'),
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // multiCapabilities:[{
    //   "browserName": 'firefox'

    // },{

    //   "browserName": 'chrome'
    // }],
    capabilities:{
        "browserName": 'chrome'
  
     },

    plugins: [{
      package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
      options:{
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        reportName: 'CucumberJS Report',
        pageFooter: '<div><p>Created by Way2Automation</p></div>',
        pageTitle: 'CucumberJS with Protractor Report',
        customData:{
          title: 'Execution info',
          data:[

            {label: 'Project', value: 'CucumberJS Project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Tester', value: 'Iuliia Jha'}

          ]


        },

        displayDuration: true
      }
  }],
  onPrepare:  () =>{
   browser.waitForAngularEnabled(false)
  },


    maxSessions: 2,

    specs: ['features/*.feature'],

    cucumberOpts: {
      // require step definitions
      tags: false,
      format:'json:.tmp/results.json',
      require: [
        prop.get('stepsPath')    // 'features/stepDefinitions/stepDefinition.js' // accepts a glob
      ]
    }
  };