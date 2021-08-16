// Function parameters
function add(n1, n2, printResult, phrase) {
    var result = n1 + n2;
    if (printResult) {
        console.log(phrase + result);
    }
    return result;
}
// String Boolean Number
var number1;
var number2 = 2.867;
var phrase = "Result is: ";
var printResult = true;
number1 = 4;
var result = add(number1, number2, printResult, phrase);
// Object Type
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
// Array types
var favoriteActivities = [112, "Football"];
var favoriteActivities2 = [true, "Basketball", 1114];
var favoriteActivities3 = ["Basketball", "Football"];
// TypeScript array type ini bilip ona gore oneri yapar.
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
//Enum type
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person3 = {
    name: "Alpha",
    age: 22,
    hobbies: ["Sports", "Cooking", "Video Games"],
    role: Role.ADMIN
};
if (person3.role == Role.ADMIN) {
    console.log("ADMIN");
}
// Any type => Not wanted since with any TypeScript compiler will not be ablte to check the type!!! (TypeScript advantages will be lost!!!)
var anyArray;
anyArray = ["Deneme", 1, 2, true];
// Union Types and Union Types function handling
function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultType === "number") {
        return +result;
    }
    else if (resultType == "string") {
        return result.toString();
    }
    return result;
}
var res = combine(1, 2, "number");
console.log(res);
res = combine(2, "alp", "string");
console.log(res);
res = combine("12", "35", "number");
console.log(res);
res = combine("alp ", "kumbasar", "string");
console.log(res);
