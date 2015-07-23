function validate() {

	
}

//global object

function myFunction() {
	return this;
}
myFunction();
//Invoking a Function with a Function Constructor





//Invoking a Function with a Function Method
function myFunctioncall(a, b) {
	return a * b;
}
myObject = myFunctioncall.call(myObject, 10, 2);

function myFunctionapply(a, b) {
	return a * b;
}
myArray = [10, 2];
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
	Product.call(this, name, price);
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

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);


//bind example

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


window.onload = function () {
	

}

