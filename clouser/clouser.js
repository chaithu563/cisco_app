

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
window.onload = function () {
	// run your script in here
	//add();
	add();
	add();
	//add1(); add1();
	document.getElementById("myData").value =sum(7)(2);
	//if (document.getElementById("myData").value)
	//{


	//}

}

