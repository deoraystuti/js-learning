let score = "30aba";
console.log("score:", score, "type:", typeof score);
let scoreInt = Number(score);
console.log("scoreInt:", scoreInt, "type:", typeof scoreInt);

let variable = undefined;
console.log("variable:", variable, "type:", typeof variable);
let variableInt = Number(variable);
console.log("variableInt:", variableInt, "type:", typeof variableInt);

let value = null;
console.log("value:", value, "type:", typeof value);
let valueInt = Number(value);
console.log("valueInt:", valueInt, "type:", typeof valueInt);
// null is converted to 0
// undefined is converted to NaN
// string which is not a pure number is converted to NaN
// string which is a pure number is converted to that number
// boolean true is converted to 1
// boolean false is converted to 0
let isTrue = true;
console.log("isTrue:", isTrue, "type:", typeof isTrue);
let isTrueInt = Number(isTrue);
console.log("isTrueInt:", isTrueInt, "type:", typeof isTrueInt);

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// 0, null, undefined, NaN, ""(empty string) are converted to false
// rest all values are converted to true

let someNumber = 123;
let stringNumber = String(someNumber);
console.log(stringNumber, typeof stringNumber);
// String() method converts number to string
// Number() method converts string to number
// Boolean() method converts values to boolean
// toString() method also converts number to string

console.log(+true);
console.log(+"");
console.log(+"123abc");
console.log(+"123");
console.log(+"0");
console.log(+"-123");
console.log(+"-123.45");
console.log(+"0.0001");
console.log(+"100000000000000000000");
console.log(+"100000000000000000000n"); // BigInt is not supported
console.log(+"Infinity");
console.log(+"-Infinity");
console.log(+"NaN");
console.log(+null);
console.log(+undefined);
console.log(+false);
console.log(+{});
console.log(+[]);
console.log(+[1, 2, 3]);
console.log(+[123]);
console.log(+function () {});
console.log(+Symbol("123")); // Symbol cannot be converted to number
console.log(+BigInt(123)); // BigInt is not supported   
console.log(+BigInt("123456789012345678901234567890")); // BigInt is not supported
// + operator before a value converts it to number
// BigInt is not supported with Number() or + operator  
// Symbol cannot be converted to number
// {} (object) is converted to NaN
// [] (empty array) is converted to 0
// [single value] is converted to that value
// [multiple values] is converted to NaN
// function is converted to NaN
// BigInt is a special type in JavaScript to represent whole numbers larger than 2^53 - 1
// BigInt literals are created by appending n to the end of an integer or by calling
// the BigInt() constructor
// BigInt cannot be used with Number() or + operator for conversion
// Symbol is a unique and immutable primitive value and cannot be converted to number
// Symbol is created using the Symbol() function
// BigInt and Symbol are not covered in detail here as they are more advanced topics
// and are not commonly used in basic JavaScript programming
// They are included here for completeness regarding type conversion
// For most practical purposes, you will primarily deal with Number, String, Boolean,
// null, undefined, Object, and Array types in JavaScript
// Understanding these basic types and their conversions is essential for effective
// JavaScript programming
// Always be cautious when converting types, especially with user input or external data
// as unexpected types can lead to bugs or security vulnerabilities in your code    


