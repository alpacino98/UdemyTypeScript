const unsername = 'max';

let age = 30;

const person = {
    name:"alp",
    age_2:12
}

console.log(age)

if(age > 28){
    let deneme = 0
}

// Not working since let is not defined outside code block
// console.log(deneme)


if(age > 28){
    var deneme = 0
}

// Not working since bad code, still javascript can run it
// console.log(deneme)

const printOutput : (a: number | string) =>  void = (output : string | number) => console.log(output)

const hobbies  = ["Sports", "Cooking"]
const activeHobbies = ["Hiking", ...hobbies]

activeHobbies.push(...hobbies)

const add = (...numbers : number[]) => {
    return numbers.reduce((curResult, curValue) => {return curResult + curValue},0);
    
}

const addedNumbers = add(10,12,0.4,12,12,234,2323,11456,7)

const [hobby1,hobby2, ...remaing_array] = hobbies;

const {name: firstName, age_2} = person;

console.log(firstName, age_2)
