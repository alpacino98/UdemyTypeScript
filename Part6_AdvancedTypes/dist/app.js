"use strict";
var _a;
console.log("Here");
var e1 = {
    name: 'Alpha',
    privilages: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString;
    }
    return a + b;
}
var result = add("Alp", " Kumbasar");
var resul_int = add(1, 2);
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privilages' in emp) {
        console.log("Privilages: " + emp.privilages);
    }
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Amount of cargo in truck is: " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10);
    }
}
useVehicle(v1);
useVehicle(v2);
//Type Casting
var paragraph = document.querySelector('p');
paragraph.innerHTML = "Alpha";
var userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hi there!';
var error = {
    email: 'not a valid e-mail',
    username: "username not valid"
};
var fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: "My own company" }
};
// Optional Chaining
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// Nullish Coalescing
var userInput = "";
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'Default'; // if userInput is null or undefined make it 'Default'
console.log(storedData);
