function validate() {

	if (document.myForm.Name.value == "") {
		alert("Please provide your name!");
		document.myForm.Name.focus();
		return false;
	}

	if (document.myForm.EMail.value != "") {
	    //reg expresss match

	    var re = /\S+@\S+\.\S+/;

	    if (!re.test(document.myForm.EMail.value)) {

	        alert("Please provide valid Email!");
	        document.myForm.EMail.focus();
	        return false;
	    }
	   
		
	}
	else {
	    alert("Please provide  Email!");
	    document.myForm.EMail.focus();
	    return false;
	}

	if (document.myForm.Zip.value == "" ||
	isNaN(document.myForm.Zip.value) ||
	document.myForm.Zip.value.length != 5) {
		alert("Please provide a zip in the format #####.");
		document.myForm.Zip.focus();
		return false;
	}

	if (document.myForm.Country.value == "-1") {
		alert("Please provide your country!");
		return false;
	}
	return (alert("success"));
}

function isNamevalid(evt) {

    var regex = /^[a-zA-Z]*$/;

   
    if (regex.test(String.fromCharCode(evt.which))) {
        //document.myForm.Name.value
        //document.getElementById("notification").innerHTML = "Watching.. Everything is Alphabet now";
        if (document.myForm.Name.value.length == 7) {
            document.getElementById("Nameval").innerHTML = "Length Exceeds 7 characters";
            document.getElementById("Name").disabled = true
            return false;
        }
        
        return true;
    } else {
        var text = document.myForm.Name.value;
       // document.myForm.Name.value = text.substring(0, text.length - 1);
        document.getElementById("Nameval").innerHTML = "Alphabets Only";
        return false;
    }

   


}
window.onload = function () {
	

}

