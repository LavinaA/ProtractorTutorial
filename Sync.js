describe('Open non angular Js website Sync',function(){
	
	
	it('basic program',function(){
		browser.waitForAngularEnabled(false);
		//console.log('print 1');
		
		browser.get('https://angularjs.org')
		browser.get('https://www.itgeared.com/demo/1506-ajax-loading.html');
		
		
		
		element(by.css("a[href*='loadAjax']")).click();
		var EC = protractor.ExpectedConditions;
		
		browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);
		element(by.id("results")).getText().then(function(text){
			
			console.log(text);
			
		})
		
		
		
		
	})
	
	
	
})