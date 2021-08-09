describe('some baby test suite',function(){
	
	it('basic program',function(){
		
		//console.log('print 1');
		
		browser.get('https://angularjs.org')
		browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
			
			console.log('last step to execute')
			
		})
		
		
		
		
	})
	
	it('close broswer',function(){
		
		console.log('print 1');

		
		
	})	
	
	
})