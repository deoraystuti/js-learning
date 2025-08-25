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

