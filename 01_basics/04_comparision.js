console.log(3 == "3"); // true
console.log(3 === "3"); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log(1 == true); // true
console.log(1 === true); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(" " == false); // true
console.log(" " === false); // false
console.log("" == false); // true
console.log("" === false); // false

null == 0; // false
null >= 0; // true
null > 0; // false
null <= 0; // true
null < 0; // false  
// null is only equal to undefined and not equal to anything else
// null is converted to 0 when compared with <, >, <=, >=       
// undefined is converted to NaN when compared with <, >, <=, >=
// undefined is not equal to anything including null
// NaN is not equal to anything including NaN   
undefined == 0; // false
undefined >= 0; // false
undefined > 0; // false
undefined <= 0; // false
undefined < 0; // false
// String is converted to number when compared with number using <, >, <=, >=
// Boolean is converted to number when compared with number using <, >, <=, >=
// String is compared lexicographically when compared with string using <, >, <=, >=
console.log("2" > "12"); // true
console.log("2" < "12"); // false
console.log("2" >= "12"); // true
console.log("2" <= "12"); // false
console.log("2" > 1); // true
console.log("2" < 1); // false              


