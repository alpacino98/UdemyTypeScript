// Code goes here!

const names : Array<string> = ['Max', 'Manuel'];

const promise : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done')
    }, 2000)
}); 

function merge<T extends object, U extends object>(objA: T,objB: U){
    return Object.assign(objA, objB)
}

const mergedObj = merge({name:"Alp"}, {age:15})
console.log(mergedObj.name)


const mergedObj_Error = merge({name:"Alp"}, 15)
console.log(mergedObj_Error.age)

interface Lengthy{
    length:number
}

function countAndDescribe<T extends Lengthy>(elements: T) : [T,string]{
    let description = "Got no value!"
    if(elements.length == 1){
        description = "Got 1 element."
    }
    else if(elements.length > 1){
        description = "Got " + elements.length + "elements."
    }
    return [elements, description]
}

console.log(countAndDescribe(["Alp", "Kum"]))

function extractAndConvert<T extends object, U extends keyof T>(obj:T, key:U){
    console.log(obj[key])
    return obj[key]
}

extractAndConvert({}, 'name')
extractAndConvert({name:"Alpha"}, 'name')

class DataStorage<T>{
    private data:T[] = []

    addItem(item:T){
        this.data.push(item)
    }

    removeItem(item:T){
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Alpha")
textStorage.addItem("Pro")
textStorage.addItem("ruleees!")
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1)
numberStorage.addItem(2)
numberStorage.addItem(3)
numberStorage.addItem(10000000000)
numberStorage.removeItem(3)
console.log(numberStorage.getItems())

interface CourseGoal{
    name:string,
    description:string,
    completeUntil:Date
}

function createCourseGoal(name:string, description:string, date:Date) : CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.name = name
    courseGoal.description = description
    courseGoal.completeUntil = date

    return courseGoal as CourseGoal;
}