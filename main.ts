export {}
let message = "Hello World!";
console.log(message);


// Variable Declarations
let x = 10;
let y = 20;
// let x = 30; // This will cause an error in TypeScript because 'x' is already declared

// Variable Types, the essence of 
// let identifier: dataType = value
let isActive: boolean = true;
let someIntegerValue: number = 23;
let name: string = "John Doe";

// In TypeScript, you can also use template strings, and template string scan also span multiple lines and can also have embedded expressions
let sentence: string = `Hello, my name is ${name} 
and I am ${someIntegerValue} years old.`;

console.log(sentence);

// Use of Types: 1.) StaticTypeChecking(Prevention of Coercion) 2.) Intellisense(In built intellisense of methods available on the variable)
let n: null = null;
let u: undefined = undefined;
// In TS null and undefined are subtypes of all other types, so you can assign them to any type
let isNew: boolean = null; // This is allowed in TypeScript
let myName: string = undefined; // This is also allowed in TypeScript

// Array in TS
let array: number[] = [1, 2, 3, 4, 5];
let array2: Array<number> = [1, 2, 3, 4, 5]; // This is another way to declare an array in TypeScript
// There is no advantage of using Array<number> over number[] in TypeScript, both are equivalent

// Some times we may need an array of mixed types, in that case we can use tuple
let tuple: [number, string] = [1, "Hello"];// this indicate that the first element is a number and the second element is a string and only contains these two elements with the same order

// Enum Types
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let c: Color = Color.Red;
console.log(c); // Output: RED

enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up); // Output: 0
console.log(Direction.Down); // Output: 1

// Any type, response form third party library, user input, etc.
// 'any' type is used when you don't know the type of a variable in advance or
let randomValue: any = 10; // 'any' type can hold any value
randomValue = "Hello"; // Now it holds a string
randomValue = true; // Now it holds a boolean
randomValue.toUpperCase();
randomValue();
// Use of 'any' type is discouraged in TypeScript, as it defeats the purpose of type safety

// Unknown type, it is similar to 'any' type, but it is safer to use
let unknownValue: unknown = 10; // 'unknown' type can hold any value
unknownValue = "Hello"; // Now it holds a string
unknownValue = true; // Now it holds a boolean
unknownValue.toUpperCase(); // This will cause an error, as we don't know the type of 'unknownValue'
(unknownValue as string).toUpperCase(); // This is how you can use 'unknown' type safely, by type assertion
unknownValue(); // This will also cause an error, as we don't know the type of 'unknownValue'

// type assertion is similar to Typecasting in other languages, it is used to tell the compiler that you know better about the type of a variable


// Type Inference
// without decalring the value of a variable we can always change the value of a variable to another type
let a;
a= 10;
a = true;

let b = 10;
b = true; // This will cause an error, as 'b' is inferred to be of type 'number' and cannot be assigned a boolean value

// In TypeScript we can specify union of types for the same variable
let myVariableWithMultiDataType: number | string;
myVariableWithMultiDataType = 10; // This is allowed
myVariableWithMultiDataType = "Hello"; // This is also allowed
// myDataType = true; // This will cause an error, as 'true' is not a valid type for 'myDataType'



// FUNCTIONS
function add(num1: number, num2: number){
    return num1 + num2;
}
// In TypeScript, parameters byv default are required, but you can make them optional by adding a '?' after the parameter name
function addOptional(num1: number, num2?: number){
    if(num2 === undefined){
        return num1;
    }
    return num1 + num2;
}
// We also have default parameters in TypeScript, which allows you to specify a default value for a parameter
function addWithDefault(num1: number, num2: number = 10){
    return num1 + num2;
}



// INTERFACES
// It is possible to specify an Object as a Type in TypeScript, this is done using Interfaces
function fullName(person: { firstName: string, lastName: string }) {
    return `${person.firstName} ${person.lastName}`;
}

let p = {
    firstName: "John",
    lastName: "Doe"
};

let p2 = {
    firstName: "Brian"
};

console.log(fullName(p)); // Output: John Doe 
// Now just imagine if we need to declare multiple functions with the same object, and not only that but in some cases the object we will use will have let's say 10 to 20 properties, that will become a nightmare
// we can solve that using interfaces
interface Person {
    firstName: string;
    lastName?: string;// now the lastName property is optional
}

function fullNameInterface(personObject: Person) {
    return `${personObject.firstName} ${personObject.lastName}`;
}

console.log(fullNameInterface(p));
console.log(fullNameInterface(p2));



// CLASSES and ACCESS MODIFIERS

// Create a class in TypeScript
class Employee {
    // Properties
    private id: number;
    public name: string;
    protected department: string;

    // Constructor
    constructor(id: number, name: string, department: string) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    // Method
    public getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`;
    }
}

let emp1 = new Employee(1, "John Doe", "Engineering");
console.log(emp1.getDetails()); // Output: ID: 1, Name: John Doe, Department: Engineering
// console.log(emp1.id); // This will cause an error, as 'id' is a private property
// console.log(emp1.department); // This will also cause an error, as 'department' is a protected property
console.log(emp1.name); // Output: John Doe
// In TypeScript, we have three access modifiers: public, private, and protected
// 1. public: The property or method can be accessed from anywhere.
// 2. private: The property or method can only be accessed from within the class.
// 3. protected: The property or method can be accessed from within the class and its subclasses.

// Using extends we can inherit properties and methods from another class
// This is called inheritance in TypeScript
// The class that is being inherited from is called the base class or parent class, and the class that is inheriting is called the derived class or child class
// The derived class can access the public and protected properties and methods of the base class, but not the private properties and methods
// The derived class can also have its own properties and methods, and can override the methods of the base class
class Manager extends Employee {
    private teamSize: number;

    // The child class needs to call the constructor of the parent class using the super() method
    // The super() method calls the constructor of the parent class and allows us to pass the parameters to it
    constructor(id: number, name: string, department: string, teamSize: number) {
        super(id, name, department);
        this.teamSize = teamSize;
    }

    public getTeamSize(): number {
        return this.teamSize;
    }

    public getDetails(): string {
        return `${super.getDetails()}, Team Size: ${this.teamSize}`;
    }
}