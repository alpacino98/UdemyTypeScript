let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

console.log(userInput);

// userName = userInput; Unknown is not garanti to be string or anything.

if(typeof userInput === "string"){
    userName = userInput;
}

console.log(userName);


function generateError(message:string, code: number): never{
    throw {message:message, code:code};
}

generateError('An error occurred!', 500);