

var add = (function () {
	var counter = 0;
	return function () { return counter += 1; }
})();


window.onload = function () {
	// run your script in here
	//add();
	//add();
	//add();
	add(); add();
	document.getElementById("myData").value = add();
}

