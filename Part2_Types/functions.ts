function add(n1 : number, n2: number):number{
    return (n1 + n2);
}

function printResultNumber(num: number):void{
    console.log("Result is " + num);
}

printResultNumber(add(1,2));

let combineValues : Function;
combineValues = add;
// combineValues = 5; Error: combineValues is a function not number
// combineValues = printResultNumber; // will work if combineValues is any function


console.log(combineValues(8,8));

// FUNCTION TYPES

let combineValues2: (a: number,b: number) => number;

combineValues2 = add;
// combineValues2 = printResultNumber; ERROR: Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
//                                            Type 'void' is not assignable to type 'number'.



console.log(combineValues2(8,8));

function addAndHandle(n1: number, n2: number, cb: (num:number)=>void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10,20,(result)=>{
    console.log(result);
});