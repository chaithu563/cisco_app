function validate() {

	
}

//global object

function myFunction() {
	return this;
}
myFunction();

//Invoking a Function with a Function Constructor
function test() {
    this.a = 1;
    this.b = 2;

}

var newtest = new test();




//Invoking a Function with a Function Method
function myFunctioncall(a, b) {
	return a * b;
}
var myObject = myFunctioncall.call(myObject, 10, 2);

function myFunctionapply(a, b) {
	return a * b;
}
var myArray = [10, 2];
myFunctionapply.apply(myObject, myArray);


//call realtime

function Product(name, price) {
	this.name = name;
	this.price = price;

	if (price < 0) {
		throw RangeError('Cannot create product ' +
						  this.name + ' with a negative price');
	}

	return this;
}



function Food(name, price) {
    //Product.call(this, name, price);
    Product.apply(this, [name, price])
	this.category = 'food';
}

Food.prototype = Object.create(Product.prototype);
Food.prototype.constructor = Food; // Reset the constructor from Product to Food

function Toy(name, price) {
	Product.call(this, name, price);
	this.category = 'toy';
}

Toy.prototype = Object.create(Product.prototype);
Toy.prototype.constructor = Toy; // Reset the constructor from Product to Toy

Product.prototype.display = function () {

    console.log("Product displ");
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
cheese.display();

//bind example1

var Button = function (content) {
	this.content = content;
};
Button.prototype.click = function () {
	console.log(this.content + ' clicked');
}

var myButton = new Button('OK');
myButton.click();

var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton

var boundClick = myButton.click.bind(myButton);
boundClick(); // bound, 'this' is myButton


//bind example1

this.x = 9;
var module = {
    x: 81,
    getX: function () { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, because in this case, "this" refers to the global object

// Create a new function with 'this' bound to module
var boundGetX = getX.bind(module);
boundGetX(); // 81

window.onload = function () {
	

}

