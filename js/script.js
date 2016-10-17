'use strict';

/* JavaScript will go here */

console.log("Hello world!"); //prints

var motto = "The iSchool is my school";

//Log out the string
console.log(motto);

//Convert the string to upper case, replacing the previous string
//Log out the changed variable
console.log( motto.toUpperCase() );

var person = {
  firstName: 'Alice',
  lastName: 'Smith',
};

person['middleInitial'] = 'Q'
person['luggageCombo'] = [1,2,3,4,5]


//person['favorites']['color'] = 'blue'; //TypeError!



var doAtOnce = function(funcA, funcB) {
    funcA("Jim");
    console.log(' and ');
    funcB();
    console.log(' at the same time! ');
}

var patHead = function(name) {
    console.log("pat your head, "+name);
}

var rubBelly = function(name) {
    console.log("rub your belly");
}


doAtOnce(patHead(), rubBelly());
