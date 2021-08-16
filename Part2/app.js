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
    age: 25
};
console.log(person.name);
var person2 = {
    name: "Alpha",
    age: 25
};
console.log(person2.name);
