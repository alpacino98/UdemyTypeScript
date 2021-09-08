"use strict";
// Code goes here!
const names = ['Max', 'Manuel'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done');
    }, 2000);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Alp" }, { age: 15 });
console.log(mergedObj.name);
const mergedObj_Error = merge({ name: "Alp" }, 15);
console.log(mergedObj_Error.age);
function countAndDescribe(elements) {
    let description = "Got no value!";
    if (elements.length == 1) {
        description = "Got 1 element.";
    }
    else if (elements.length > 1) {
        description = "Got " + elements.length + "elements.";
    }
    return [elements, description];
}
console.log(countAndDescribe(["Alp", "Kum"]));
function extractAndConvert(obj, key) {
    console.log(obj[key]);
    return obj[key];
}
extractAndConvert({}, 'name');
extractAndConvert({ name: "Alpha" }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Alpha");
textStorage.addItem("Pro");
textStorage.addItem("ruleees!");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
numberStorage.addItem(10000000000);
numberStorage.removeItem(3);
console.log(numberStorage.getItems());
function createCourseGoal(name, description, date) {
    let courseGoal = {};
    courseGoal.name = name;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
