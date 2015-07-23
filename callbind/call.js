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

