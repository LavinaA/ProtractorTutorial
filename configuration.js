var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
// The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
 // Capabilities to be passed to the webdriver instance.
  //C:\Users\lavina.vijay.agrawal\Downloads\geckodriver-v0.29.1-win64\geckodriver.exe
 
  /*capabilities: {
	  'browserName': 'internet explorer',
	  },*/
  
  /*capabilities: {
	  'browserName': 'firefox',
	  },*/
	
// Spec patterns are relative to the configuration file location passed
 // to protractor (in this example conf.js).
 // They may include glob patterns.
	
  specs: ['ElementBasicsPageObject.js'],
  
  onPrepare: function() {
	  console.log("Print OnPrepare func");
	  browser.driver.manage().window().maximize();
	  jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );  
  },
  
  suites:
	  {
	  	Smoke : ['chainLocators.js','Dropdown.js'],
	  	Regression : 'ElementBasics.js'
	  },
	  
jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }

};