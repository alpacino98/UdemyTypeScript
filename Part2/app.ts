function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  const result: number = n1 + n2;
  if (printResult) {
    console.log(phrase + result);
  }
  return result;
}

let number1: number;
let number2: number = 2.867;
let phrase = "Result is: ";
let printResult: boolean = true;
number1 = 4;

const result = add(number1, number2, printResult, phrase);

const person: object = {
  name: "Alpha",
  age: 22,
};

console.log(person.name);

const person2: { name: string; age: number; } = {
  name: "AlphaPro",
  age: 23,
};

console.log(person2.name);
