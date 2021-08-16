var userInput;
var userName;
userInput = 5;
userInput = "Max";
console.log(userInput);
// userName = userInput; Unknown is not garanti to be string or anything.
if (typeof userInput === "string") {
    userName = userInput;
}
console.log(userName);
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('An error occurred!', 500);
