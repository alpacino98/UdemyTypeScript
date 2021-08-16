function add(n1, n2) {
    return (n1 + n2);
}
function printResultNumber(num) {
    console.log("Result is " + num);
}
printResultNumber(add(1, 2));
var combineValues;
combineValues = add;
// combineValues = 5; Error: combineValues is a function not number
// combineValues = printResultNumber; // will work if combineValues is any function
console.log(combineValues(8, 8));
// FUNCTION TYPES
var combineValues2;
combineValues2 = add;
// combineValues2 = printResultNumber; ERROR: Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
//                                            Type 'void' is not assignable to type 'number'.
console.log(combineValues2(8, 8));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
