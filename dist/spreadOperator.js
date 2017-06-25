"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var arr = [1, 2, 3];
var arr2 = [4, 5, 6];
var newArr = [].concat(arr, arr2);

console.log(newArr);

function test(newArr) {
    console.log(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
test(newArr); // return array [1, 2, 3, 4, 5, 6]
test.apply(undefined, _toConsumableArray(newArr)); // return int 1, 2, 3, 4, 5, 6