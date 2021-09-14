// Code goes here!
function Logger(logString: string){
    return function(constructor: Function){
        console.log('Logging...');
        console.log(constructor);
    } 
}

function WithTemplateString(template: string, hookId: string){
    return function<T extends {new(..._: any[]) : {name : string}}>(originalConstructor: T){
        return class extends originalConstructor {
            constructor(..._: any[]){
                super();
                const hookEl = document.getElementById(hookId);
                if(hookEl){
                    hookEl.innerHTML = this.name;
                }
            }
        }
    }
}



// @Logger('Logging - Person')
@WithTemplateString("<h1>Selamlar</h1>", "app")
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}

const person = new Person();

console.log(person);

function Log(target: any, propertyName: string | Symbol){
    console.log('Property decarotar')
    console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accessor decarotar!');
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log('Method decarotar!');
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

class Product{
    @Log
    title: string;
    private _price : number;
    
    @Log2
    set price(value:number){
        if(value > 0){
            this._price = value;
        }else{
            throw new Error("Price should be positive")
        }
    }

    constructor(title:string, price: number){
        this.title = title
        this._price = price;
    }

    @Log3
    getPriceWithTax(tax: number){
        return this._price * (1 + tax); 
    }

}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor : PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}

class Printer{
    message: string = "Hey broo!";
    
    @AutoBind
    showMessage(){
        console.log(this.message)
    }
}

const  p = new Printer()

const button = document.querySelector("button")!;
button.addEventListener('click', p.showMessage)

//----

interface ValidatorConfig{
    [property: string] : {
        [validatableProp: string] : string[]
    }
}

const registeredValidators : ValidatorConfig = {};

function Required(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName] : ['required']
    };
}

function PositiveNumber(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName] : ['positive']
    };
}

function validate(obj: any){
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!obj){
        return true;
    }
    let isValid = true;
    for(const prop in objValidatorConfig){
        for(const validator of objValidatorConfig[prop]){
            switch(validator){
                case 'required':
                    return isValid && !!obj[prop]
                case 'positive':
                    return isValid && obj[prop] > 0;
            }
        }
    }
    return isValid;
}

class Course{
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number){
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)){
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
})