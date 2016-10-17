'use strict';

/* JavaScript will go here */

console.log("Hello world!");


//JavaScript
function sayHello(name){
    return "Hello, "+name;
}

var msg = sayHello("Joel");
console.log(msg);

var circle = {cx:50, cy:50, radius:35};

console.log(Math.PI);


var obj = {}
function sayHello(name) { 
   console.log("Hello, "+name);
}

//assign function to object
obj.sayHi = sayHello;

//access with dot notation
obj.sayHi('all'); //prints "Hello all"


//assign literal (anonymous value)
obj.otherFunc = function() { 
    console.log("Hello world!");
}

obj.otherFunc();


//anonymous function syntax
var doAtOnce = function(funcA, funcB) {
    funcA();
    console.log(' and ');
    funcB();
    console.log(' at the same time! ');
}

var patHead = function(name) {
    console.log(" pat your head");
}

var rubBelly = function(name) {
    console.log("rub your belly");
}

doAtOnce(patHead, rubBelly);