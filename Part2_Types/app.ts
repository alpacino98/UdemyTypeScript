// Function parameters

function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  const result: number = n1 + n2;
  if (printResult) {
    console.log(phrase + result);
  }
  return result;
}

// String Boolean Number

let number1: number;
let number2: number = 2.867;
let phrase = "Result is: ";
let printResult: boolean = true;
number1 = 4;

const result = add(number1, number2, printResult, phrase);

// Object Type

const person = {
  name: "Alpha",
  age: 22,
  hobbies: ["Sports", "Cooking", "Video Games"],
  role: [2, "author"],
};

person.role.push("admin");

console.log(person.name);
console.log(person.role);

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "AlphaPro",
  age: 23,
  hobbies: ["Sports", "Cooking", "Video Games"],
  role: [2, "author"],
};

// ERROR:
// Type '[number, any, string]' is not assignable to type '[number, string]'.
//   Source has 3 element(s) but target allows only 2
// person2.role = [10, "alpha". "deneme"]
console.log(person2.role);

// Array types

let favoriteActivities: (string | number)[] = [112, "Football"];
let favoriteActivities2: any[] = [true, "Basketball", 1114];
let favoriteActivities3: string[] = ["Basketball", "Football"];

// TypeScript array type ini bilip ona gore oneri yapar.

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

//Enum type

enum Role {
  ADMIN = 0,
  READ_ONLY,
  AUTHOR,
}

const person3 = {
  name: "Alpha",
  age: 22,
  hobbies: ["Sports", "Cooking", "Video Games"],
  role: Role.ADMIN,
};

if (person3.role == Role.ADMIN) {
  console.log("ADMIN");
}

// Any type => Not wanted since with any TypeScript compiler will not be ablte to check the type!!! (TypeScript advantages will be lost!!!)

let anyArray : any[];
anyArray = ["Deneme", 1, 2, true]

