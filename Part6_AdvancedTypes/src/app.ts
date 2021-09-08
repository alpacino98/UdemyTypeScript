console.log("Here")

//Intersection Types same goed for interfaces by extending both

type Admin = {
    name:string,
    privilages:string[]
};

type Employee = {
    name:string,
    startDate: Date,
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Alpha',
    privilages: ["create-server"],
    startDate: new Date(),
};

type Combinal = string | number;
type Numeric = number | boolean;

type Universal = Combinal & Numeric;

// Type Guards

//Function Overload
function add(a:number, b:number): number
function add(a: string, b: string): string
function add(a: Combinal, b: Combinal){
    if(typeof a === 'string' || typeof b ==='string'){
        return a.toString() + b.toString;
    }
    return a + b;
}

const result = add("Alp", " Kumbasar")
const resul_int = add(1,2)

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: ' + emp.name)
    if('privilages' in emp){
        console.log("Privilages: " + emp.privilages)
    }
}

class Car{
    drive(){
        console.log("Driving car...")
    }
}

class Truck{
    drive(){
        console.log("Driving truck...")
    }

    loadCargo(amount:number){
        console.log("Amount of cargo in truck is: " + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive()
    if(vehicle instanceof Truck){
        vehicle.loadCargo(10)
    }
}


useVehicle(v1)
useVehicle(v2)

//Type Casting

const paragraph = document.querySelector('p')!;
paragraph.innerHTML = "Alpha"

const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.value = 'Hi there!';

//Index Properties

interface ErrorContainer{
    [prop: string]: string;
}

const error : ErrorContainer = {
    email: 'not a valid e-mail',
    username: "username not valid"
};


const fetchedUserData = {
    id:'u1',
    name: 'Max',
    job: { title: 'CEO', description: "My own company"}
};

// Optional Chaining

console.log(fetchedUserData?.job?.title)

// Nullish Coalescing

const userInput = ""

const storedData = userInput ?? 'Default'; // if userInput is null or undefined make it 'Default'
console.log(storedData)

