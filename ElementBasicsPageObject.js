describe('Protractor element Demo',function(){
	var obj = require("./JsonobjectdemoPageObject.js");
	var using = require('jasmine-data-provider');
	var d = require("./data.js");
	
	 beforeEach(function() {
		  obj.getUrl();
	  });
	 
	 //data stores actual data ->firstinput,secondinput,thirdinput
	 //description stores sub object name ->FirstData ,SecondData etc
	 //for every iteration one data set is picked
	 
	 using(d.Datadriven, function (data, description) {
	
	it('Testing Calculator Functionality ' +description ,function(){
		obj.firstInput.sendKeys(data.firstInput);
		obj.secondInput.sendKeys(data.secondInput);
		obj.goButton.click();
		
		expect(obj.result.getText()).toBe(data.result);
		
		obj.result.getText().then(function(text){
			console.log(text);
		})
	
	})
});	
	

	afterEach(function() {
			
		console.log("Test is completed");
		})
	
	
	//real o/p will display only when you resolve promise
	//protractor for 90perc of methods resolve promise automatically
	//there could be 2 potential problems 1.sequence is not guaranteed
	
})