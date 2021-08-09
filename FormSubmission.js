describe('Practise Exercise',function(){
	
	//take 4 cards into the list
	//go through each index in the list -and get the title -desired title then in that index i will be selected
	function selectItems(product){
	element.all(by.tagName("app-card")).each(function(item){
		
		item.element(by.css("h4 a")).getText().then(function(text){
			
			if(text=='Samsung Note 8'){
				//Click on Add button
				item.element(by.css("button[class*='btn-info']")).click();
				
			}
		})
		
	})
}
	
	it('Open NonAngular js website Alerts',function() {


		browser.get("https://qaclickacademy.github.io/protocommerce/");

		element(by.name("name")).sendKeys("Mystudents");
		element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password2");
		element(by.css("input[type='checkbox']")).click();
		
		//Note the below CSS locator
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText("Submit")).click().then(function()
				{
				element(by.css("div[class*='success']")).getText().then(function(text)
				{
				console.log(text);
			})
		})
				
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("M").then(function()
			{
			element(by.css("[class='alert alert-danger']")).getText().then(function(text)
					{
				console.log(text);
					})
				})		
				
		element(by.linkText("Shop")).click();	
		
		selectItems("iphone X");
		selectItems("Samsung Note 8");
		
		
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			
			console.log(text);
			var res =text.split("(");
			expect(res[1].trim().charAt(0)).toBe("2");
			
			var x=Number(res[1].trim().charAt(0));
			var y = x+1;
			console.log(y);
		})
		
		
		
	})
	
	
})