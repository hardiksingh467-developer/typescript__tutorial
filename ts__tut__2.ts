//* Advantages of TypeScript over JavaScript
//* 1.) Static Typing ( Being able to define data types for variables, function parameters, and return values )
//* 2.) Enhanced IDE Support and Intellisense
//* 3.) Early Bug Detection
//* 4.) Improved Code Readability and Maintainability
//* 5.) Advanced Language Features
//* 6.) Large Ecosystem and Community Support
//* 7.) Compatibility with JavaScript Libraries
//* 8.) Better Refactoring Capabilities
//* 9.) Optional Typing System
//* 10.) Cross-Platform Development
//* 11.) Active Development and Updates
//* 12.) Strong Corporate Backing (Microsoft)
//* 13.) Growing Popularity and Adoption
//* 14.) Better Collaboration in Teams
//* 15.) Support for Modern JavaScript Features

//* Important TS Features:-
//* 1.) Define Data Type
//* 2.) Interfaces
//* 3.) Decorators
//* 4.) Generics
//* 5.) Namespaces
//* 6.) Type Inference
//* 7.) Advance Features
//* 8.) Code Quality
//* 9.) Etc

// To use TypeScript we first need to install nodeJS, TypeScript always compiles down to JavaScript and to execute JavaScript we need NodeJS in our system
// Always open a fresh terminal after installing NodeJS
// Now we can wither install TypeScript globally using npm or we can install TypeScript in VSCode itself
// OR we can install typescript for each directory
//* npm install typescript --save-dev
// After installing TypeScript we would need to compile our TypeScript Code to JavaScript, everytime we run our code
var userName:string = "Hardik Singh";
// var name = "sam";we cannot declare var name as it is already present in our Document
// now in command line run: npx tsc ts__tut__2.ts
// lets say we write more code in the file after compiling, then we would again need to compile the TypeScript file
// to prevent that we can use command: npx tsc ts__tut__2.ts --watch

//* Data Types in TypeScript
// In a variable what type of Data you want to store, that is called a Data Type
// Categories of Data Type: Primitive, Object, Special, Advanced, Function
// Primitive Data Types are in-built in TypeScript: string, number, boolean, bigint, symbol, null, undefined
let stringVariable:string = "This is a String";
let numberVariable:number = 1.998;
let booleanVariable:boolean = true;
let bigintVariable:bigint = 9007199254740991n; // Example BigInt with 'n' suffix
let symbolVariable:symbol = Symbol("This is a String");
let nullVariable:null = null;
let undefinedVariable:undefined
// Object Data Types includes: Array(Collection of same Data Type), Tuples(Array with fixed size and elements with different data types), Objects(Collection of Key Value pair, Array and Tuple are built in Object Data Types, that is, they are syntactical sugar, in the root they are instances of Objects)
let arrayVariable1:Array<string> = ["a", "b", "cat"];
let arrayVariable2:number[] = [1, 2, 3, 4];
let tupleVariable1:[ string ,number] = ["Hardik", 23]// Tuple is simply an array with fixed length
let objectVariable1:{ name: string, age: number} = {name: "Hardik",age: 23}// Object is collection of key value pair

// Special Data Types: Any, Unknown, Void, Never
let anyVariable1: any = 10// Any can accept any Data Type
let anyVariable2: any = "10"// Any can accept any Data Type
let unknownVariable1: unknown = "Hello";// unknown is similar to any, the only difference being that it requires Type Checking before use or operation
let voidVariable: () => void = () => {
    console.log("This function returns nothing");
};// refers to return data type of a function whose return is unspecified, that is, it can or it cannot return anything
let neverVariable: () => never = () => {
    throw new Error("This function never returns!");
};// used for functions that never return anything, like throwing an error

// Advanced Data Types: Union, Intersection, Type Alias, Enum, Literal Types
let unionVariable: string | number;// Union Data Type allows assign values of multiple data types
unionVariable = "Hardik";
unionVariable = 23;
// Intersection
type Employee = { name: string};
type Manager = { department: string};
type TeamLead = Employee & Manager;
let lead: TeamLead = { name: "Hardik", department: "Engineering"};
// Type Alias, defining your custom Data Types
type ID = string | number;
let userId: ID = "user123";
// ENUm
enum Role {
    Admin, 
    User,
    Guest
}// choose only specified value
let userRole: Role = Role.Admin;
// Literal Value, It means exactly that value
let direction: "up" | "down";
direction = "up";
// direction = "left";, this will result in error


// Function Types
let add: (x: number, y: number) => number;
add = (x, y) => x + y;

// Deep dive in Number Data Type
let num1: number = 23;// this line in TS file will give an error after compiling, as TS will say that the compiled JS file has the same variable in the same scope declares, This issue is solved in ts.config file
let octalValueIncorrect: number = 00001;// This will give an error saying Octal Values are not allowed
let octalValueCorrect: number = 0o00001;
let hexaValueIncorrect: number = 00001;// This will give an error saying Octal Values are not allowed
let hexaValueCorrect: number = 0x00001;
let binaryValueIncorrect: number = 00001;// This will give an error saying Octal Values are not allowed
let binaryValueCorrect: number = 0b00001;
// Type Conversion
let item: number = 10;
let item2 = "10";
// let item2Converted = Number(item2);
let item2Converted =+ item2;// will work the same as above
console.log(item + item2Converted);
// OR
console.log(item+ + item2);
// Type Inference, andaaza lgana athava anumaan lagaana

// Deep Dive into String and Boolean Data Type
let stringVariable2: string = "Hardik"; 
let stringVariable3: string = 'Hardik'; 
let stringVariable4: string = `Hardik`;
let ageNumber: number = 30;
let usernameString: string = "Hardik Singh";
let infoString: string = `My name is ${usernameString} and my age is ${ageNumber}`;
console.log(infoString);
let numberData: number = 100;
let convertToString1: string = numberData.toString();
let convertToString2: string = " " + numberData;
let booleanData1: boolean = true
let convertToString3: string = booleanData1.toString();
let convertToString4: string ="" + booleanData1;
// Type Inference
// If we do not specify the type of a variable in TypeScript, it assumes thr value by analyzing the initial passed value and prevents reassigning of values

// Deep Dive into NUll and Undefined Data Types
// `null` and `undefined` are Primitive Data Types
// A complete Vacuum of value is called `null`
// When a variable is initialized but there os no value assigned to it, then it has undefined value
let nullVariable: null = null;
let undefinedVariable: undefind = undefined;

console.log(typeof null);// object

//* Configuration File in TypeScript
// Whenever we build projects in TypeScript, we may need to change the configuration in TypeScript as we build our project according to out requirement
// CREATE a tsconfig.json file
// we use command: tsc --init, if TypeScript is installed globally, npx tsc --init, if it is installed locally
// On first look we will see a lot of comments in the file, which are there so that we can uncomment those properties and use them as per our requirement
// Also if we simply run tsc, all our TS files will get compiled to JS files
// there is a property called outdir, in our tsconfig.json, if we want all our compiled files to be stored in a directory, we need to specify the path of that directory on the value of outdir
// There is another property in tsconfig.json called declaration, if we uncomment it and assign the value `true` to it, we will get a filename.d.ts file for every filename.ts file, and in that we will have all the variables specified in it


// Deep Dive into BigInt Data Type
// This  data type is mostly used in very big projects
console.log(Number.MAX_SAFE_INTEGER);
let bigNumberVariable: number = Number.MAX_SAFE_INTEGER + 2
console.log(bigNumberVariable);// it will print the same number as JavScript cannot count any further
let bigIntVariable: bigint = 9007199254740991n
console.log(bigIntVariable + 2n);

// Deep Dive in Symbol Data Type
// This datatype is very rarely used, but wherever it is used there is no alternative to it
// This datatype always generate a unique value, even if we keep the key to be same
let symbolVariable1: symbol = Symbol("key1");
let symbolVariable2: symbol = Symbol("key1");
console.log(symbolVariable1 === symbolVariable2);// false
console.log(symbolVariable1) // Symbol(key1)
console.log(symbolVariable2) // Symbol(key1)
// if we go to out tsconfig file and change the target to ES5, then we will get an error as Symbol is not supported in ES5
const objectId = Symbol("id");
const objectExample = {
    name: "Hardik",
    age: 23,
    [objectId]: 1
}
console.log(objectExample[objectId]);// 1

// How to use TypeScript for input fields