const accountId = 144578
let accountEmail = "vikash@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"  // valid but not recommended to use
let accountState;  // when no value provided it gives unefined

// accountId = 2 // not allowed
/* Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState])