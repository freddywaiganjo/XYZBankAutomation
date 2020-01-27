// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: false,
  capabilities: {
     'browserName': 'chrome'
  },
  suites: {
    checkbox: './specs/checkbox.js',
    register: './specs/register.js',
  },
  specs: [
    './specs/register.js'
  ],
  
  onPrepare: function(){
    var jasReports = require('jasmine-reporters')
    jasmine.getEnv().addReporter(new jasReports.JUnitXmlReporter({
      consolidateAll: true,
      filePrefix: 'test_report',
      savePath: 'reports'
    }))

    var HTMLReport = require('protractor-html-reporter-2');
 
    testConfig = {
                reportTitle: 'Registration Page Test results',
                outputPath: './reports/',
                outputFilename: 'test_report_'+ String(Date.now()), //epoch time format

            };
    new HTMLReport().from('./reports/test_report.xml', testConfig);
  },  
    beforeLaunch: function () {
        console.log('------ About to run tests-------')
    },
    onCleanUp: function () {
        console.log('-------Print Stats here------------')
    },
    afterLaunch:function () {
        console.log('--------Finished running tests----------')
    }
}