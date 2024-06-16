const accountId = 144553;
let accountEmail = "hitest@google.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // by default it makes the data type let but it is not a good practice

let accountState;
// accountId = 2 -- not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope & functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);