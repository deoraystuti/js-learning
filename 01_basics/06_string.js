const name = "Stuti-Deoray"
const repoCount = 4;
console.log(`Hello ! My name is ${name} and my repo count is ${repoCount}  `)

const gameName = new String('Stuti-Deoray')
console.log(typeof gameName) // "object"

console.log(gameName[0])           // will print S first position in the given string.
console.log(gameName.__proto__)    // will print a object {}

const a = 'Stuti'
const b = new String('Stuti')

console.log(a == b)  // true  (because `b` is converted to primitive)
console.log(a === b) // false (because types differ: string vs object)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('t'));

const subString = gameName.substring(0, 4);   // even if you pass the -Ve value it will start counting from index 0;
console.log(subString);

const anotherString = gameName.slice(-4, 4);   // can pass the negative value. here , -ve counting will start in reverse direction
console.log(anotherString);

const newStringOne = "    Stuti     "
console.log(newStringOne);
console.log(newStringOne.trim());

console.log(gameName.replace('ray' ,'re'));
console.log(gameName.includes('ray'));

console.log(gameName.split('-'));