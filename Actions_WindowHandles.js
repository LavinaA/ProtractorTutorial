describe('Posse website Actions',function(){
	
	it('demo program',function(){
		
		browser.get('https://posse.com/')
		
		element(by.model("userInputQuery")).sendkeys("river");
		browser.actions().MouseMove(element(by.model("locationQuery")).sendkeys("london")).perform();
		browser.actions().sendkeys(protractor.key.ARROW_DOWN).perform();
		browser.actions().sendkeys(protractor.key.ENTER).perform();
		
		element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
		element(by.css("a[ng-href*='London/River Island']")).click().then(function(){
			
			browser.getAllWindowHandles().then(function(handles){
				
			browser.switchTo().window(handles[1]);
			browser.getTitle().then(function(title){
					
			console.log(title+ "title of the page after switching");
				
			})
			browser.switchTo().window(handles[0]);
			
			browser.getTitle().then(function(title){
				
				console.log(title+ "title of the page for parent window");
					
				})
			
		})
			
	})
		
			
		})
})	
		