describe('chain locators Demo',function(){
	
	//functions are allowed outside it block and inside describe
	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	it('Open angular JS website',function(){
		
		
		/*browser.waitForAngularEnabled(false)
		browser.get('http;//google.com');*/
		
		
		browser.get('http://juliemr.github.io/protractor-demo/');
			
			//repeater, chain locators and css for identical tags
		
		Add(2,3);
		Add(4,9);
		Add(6,5);
		Add(0,1);
		Add(5,7);
		
		
		/*element.all(by.repeater("result in memory")).count().then(function(text){
			
			console.log(text);
			
		})
		*/
		
element.all(by.repeater("result in memory")).each(function(item){
	item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
				
			})
		})
		
		
		
		// element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		
		
	})
	
	
})