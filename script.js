
console.log("1. Create three variables");
let StudentName = "Charlie"; 
let StudentAge = 10; 
let isEnrolled = true; 

console.log(StudentName); 
console.log(StudentAge); 
console.log(isEnrolled); 


// Demonstrate data types
console.log("2. Create and log examples for all five basic JavaScript data type")
let flower = "Rose" // String: A text value
console.log(flower) 

let temperature = -13; // Number: an integer or floating-point number.
console.log(temperature); 

let isSunny = true; // Boolean: true or false.
console.log("Is it sunny?", isSunny); 

let tree = ['Oak', 'Maple', 'Juniper']; // Array: A collection of values
console.log(tree); 
console.log(tree[0]); 
console.log(tree[1]); 
console.log(tree[2]); 
tree.push("Willow");
console.log(tree); 
tree.pop(); 
console.log(tree); 

let animal = { 
    species: "Pig",
    breed: "yorkshire pig",
    origin: "England",
    trainability: "Easy",
};
console.log("Pig Breed: " + animal.breed + "\n" + "Training Difficulty: " + animal.trainability); // Object
console.log(animal);

// Use Basic Operators
console.log ("3. Perform and log operations using different types of operators:")

// Arithmetic Operators
let a = 69; 
let b = 11; 

let c = a + b; // Addition
console.log("Addition: " + c); 
let x = a - b; // Subtraction 
console.log("Subtraction: " + x); 
let y = a * b; // Multiplication 
console.log("Multiplication: " + y); 
let z = a / b; // Division 
console.log("Division: " + z); 

// Comparison Operators
let num1 = 6; 
let num2 = 9; 
let answer = true

answer = num1 > num2; // greater than (>)
console.log("Is 6 greater than 9? " + answer); 
answer = num1 < num2; // Less than (<)
console.log("Is 6 less than 9? " + answer); 
answer = num1 === num2; // Equal to (===)
console.log("Is 6 equal to 9? " + answer); 
answer = num1 !== num2; // Not equal (!==)
console.log("Is 6 not equal to 9? " + answer); 

// Logical operator
let d = true; 
let e = false; 

// AND (&&)
console.log("d && e = " + (d&&e)); 
// OR (||)
console.log("d || e = " + (d || e)); 
// NOT (!)
console.log("!d = " + (!d)); 

console.log("!e = " + (!e)); 
