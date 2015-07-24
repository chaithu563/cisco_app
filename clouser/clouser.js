

var add = (function () {
	var counter = 0;
	return function () { return counter += 1; }
})();

var add1 = function () {
    var counter = 0;
    return counter += 1;

}
//Create a function sum that will work like that: sum(a)(b) = a+b.

var sum = function (a) {

    return function (b) {

        return a + b;
    }

};
//Create a function sum that will work like that: sum(a)(b) = a+b and accepts any number of brackets.

var sumall = function (a) {


    var sum = a;
   
    function f(b) {

        sum += b

        return f

    };

    f.toString = function () { return sum };

    return f;


}


//exam

var ex1 = function (b) {

    // var a = 5;
    var f = function (a) {
        // b = 6;
        return b + a;
    };
    //// var b = 7;
      return f;

};

//checking whether data length is more than 7 characters or not
function submitData() {

    var data = document.getElementById("myData").value;
    if (data.length > 7)
        alert('Entered text is more than 7 characters');
    else
        alert('your data submited');

};


//allowing to enter only numeric data
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57))
        return false;

    return true;
};
window.onload = function () {
	// run your script in here
	//add();
	add();
	add();
	//add1(); add1();
	document.getElementById("myData").value =sum(7)(2);
	

	

}

