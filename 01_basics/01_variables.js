const accountId =  144553;
let accountEmail = "cat8873@gmail.com";
var accountPassword = "cat8873";
accountCity = "munger";         // you can resurve memeory for variable without even declareing it.  
let accountState;               // undefined will be printed because we have not assigned any value to it.

// accountId = 122367;      // const value can't be reinitialize;

/*
Prefer not to use var, because of issue in block scope and functional scope
*/

console.log(accountId);
accountEmail = "straycat@gmail.com";
accountPassword = "StrayCat8873";
accountCity = "patna"
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);