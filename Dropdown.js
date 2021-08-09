describe('chain locators Demo',function(){
	
	//functions are allowed outside it block and inside describe
	function Calc(a,b,operator){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		
		
		element.all(by.tagName("option")).each(function(item){
			item.getAttribute("value").then(function(values){
			if(values==operator){
			item.click();
			}
			
			})
		})
		
		element(by.id("gobutton")).click();
	}
	
	it('Locators',function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
			//repeater, chain locators and css for identical tags
		Calc(2,3,"ADDITION");
		Calc(4,9,"MULTIPLICATION");
		Calc(6,5,"DIVISION");
		Calc(0,1,"SUBTRACTION");
		
		
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log(text);
			
		})
		})
		
		// element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		
		
	})
	
	
})