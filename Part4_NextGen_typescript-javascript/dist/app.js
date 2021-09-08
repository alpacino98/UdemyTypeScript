"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var unsername = 'max';
var age = 30;
var person = {
    name: "alp",
    age_2: 12
};
console.log(age);
if (age > 28) {
    var deneme_1 = 0;
}
// Not working since let is not defined outside code block
// console.log(deneme)
if (age > 28) {
    var deneme = 0;
}
// Not working since bad code, still javascript can run it
// console.log(deneme)
var printOutput = function (output) { return console.log(output); };
var hobbies = ["Sports", "Cooking"];
var activeHobbies = __spreadArray(["Hiking"], hobbies);
activeHobbies.push.apply(activeHobbies, hobbies);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) { return curResult + curValue; }, 0);
};
var addedNumbers = add(10, 12, 0.4, 12, 12, 234, 2323, 11456, 7);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remaing_array = hobbies.slice(2);
var firstName = person.name, age_2 = person.age_2;
console.log(firstName, age_2);
