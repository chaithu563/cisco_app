/// <reference path="mutator.js" />

//array reading and pushing
var names = [];
function submitData() {

    var data = document.getElementById("id1");
    names.push(data.value);

}
//access by property
var person = { firstName: "John", lastName: "Doe", age: 46 };
console.log(person.firstName);

//acces by number
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var text="";
function loopArray() {
    //for (index = 0; index < fruits.length; index++) {
    //    text += fruits[index];
    //}

    fruits.forEach( function (item,index,arr) {
        return text += fruits[index];
    });
}

function myFunction() {
    //fruits[10] = "Lemon";
    //document.getElementById("demo").innerHTML = fruits[8];
    loopArray();
    console.log(text);
}


//associated array
var AssosiateArrays = [];
AssosiateArrays["firstName"] = "John";
AssosiateArrays["lastName"] = "Doe";
AssosiateArrays["age"] = 46;
var x = AssosiateArrays.length;         // person.length will return 0
var y = AssosiateArrays[0];


//In JavaScript, arrays use numbered indexes.  

///In JavaScript, objects use named indexes.

var points = new Array(40, 100, 1, 5, 25, 10)  // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good



//mutator

function Student(name) {
    var _name = name;

    this.getName = function() {
        return _name;
    };

    this.setName = function(value) {
        _name = value;
    };
}

//(if use prototypes for inheritance):

function ProStudent(name){
    this._name = name;
}

ProStudent.prototype = {
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    }
};

function mutateEx() {
    //var myob = new Student("hi");
    //myob.setName("chait");
    //console.log(myob.getName());


    var myob2 = new ProStudent("hi");

    myob2.name = "chaitanya";
    console.log(myob2.name);

}