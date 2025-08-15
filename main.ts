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