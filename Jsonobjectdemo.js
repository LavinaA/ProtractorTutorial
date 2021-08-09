function car(){
	this.color = "red";
	this.engine = "turbo";
	this.brand = "BMW";
	
	this.getmodel = function(){
	console.log("this is 2020 model");	
		
	};
};

module.exports = new car;