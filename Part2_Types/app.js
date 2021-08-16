function add(n1, n2, printResult, phrase) {
    var result = n1 + n2;
    if (printResult) {
        console.log(phrase + result);
    }
    return result;
}
var number1;
var number2 = 2.867;
var phrase = "Result is: ";
var printResult = true;
number1 = 4;
var result = add(number1, number2, printResult, phrase);
var person = {
    name: "Alpha",
    age: 22,
    hobbies: ["Sports", "Cooking", "Video Games"],
    role: [2, "author"]
};
person.role.push("admin");
console.log(person.name);
console.log(person.role);
var person2 = {
    name: "AlphaPro",
    age: 23,
    hobbies: ["Sports", "Cooking", "Video Games"],
    role: [2, "author"]
};
// ERROR: 
// Type '[number, any, string]' is not assignable to type '[number, string]'.
//   Source has 3 element(s) but target allows only 2
// person2.role = [10, "alpha". "deneme"]
console.log(person2.role);
var favoriteActivities = [112, "Football"];
var favoriteActivities2 = [true, "Basketball", 1114];
var favoriteActivities3 = ["Basketball", "Football"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
