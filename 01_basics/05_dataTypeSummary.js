//. Preimitive
 
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 100 // Number
const scoreValue = 100.5 // Number
const isLoggedIn = false // Boolean
const outsideTemp = null // Null
let userEmail // Undefined
const id = Symbol('123') // Symbol
const anotherId = Symbol('123') // Symbol
console.log(id === anotherId) // false
const bigNumber = 1234567890123456789012345678901234567890n // BigInt

//Reference (Non-primitive)

// Array, Object, Function

const heros = ['Shaktiman', 'Naagraj', 'Doga'] // Array
const myObj = {
    name: 'Bruce',
    age: 30,
    isLoggedIn: false
} // Object
const myFunc = function() {
    console.log('Hello World')
} // Function   

console.log(typeof scoreValue) // number

/* //datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.
*/