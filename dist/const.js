"use strict";

var PI = 3.14;
console.log(PI);

//PI = 3.14158; error
var NAME = { // OK
    name: 'Dmitriy'
};
console.log(NAME.name);

NAME.name = ""; // OK
console.log(NAME.name);