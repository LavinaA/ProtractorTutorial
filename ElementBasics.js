describe('Protractor element Demo',function(){
	var d = require("./data1.js");
	
	it('Locators',function(){
		
		
		/*browser.waitForAngularEnabled(false)
		browser.get('http;//google.com');*/
		browser.get('http://juliemr.github.io/protractor-demo/');
		
		element(by.model("first")).sendKeys(d.datadrive.firstInput);
		
		element(by.model("second")).sendKeys(d.datadrive.secondInput);
		
		element(by.id("gobutton")).click();
		
		//Jasmine takes care of promise resolve
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(d.datadrive.result);
		
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			
			console.log(text);
		})
		
	})
	
	//real o/p will display only when you resolve promise
	//protractor for 90perc of methods resolve promise automatically
	//there could be 2 potential problems 1.sequence is not guaranteed
	
	
	
	
})