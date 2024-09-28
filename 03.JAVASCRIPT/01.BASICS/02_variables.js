const accountNumber = 7461885333
let accountEmail = "sraj.845453@gmail.com"
var accountPassword = "123456"
accountCity = "Greater Noida"           //(without 'var' or 'let')
let accountState;
// let accountState                     //(without semiColon(;))

// accountNumber = 12314462  //not allowed due to constant can't be change


accountEmail = "shubbhamraj.1517@gmail.com"
accountPassword = "987456321"
accountCity = "New Delhi"

/*
Prefer not to use 'var'
because of issue in block scope and functional scope
*/


console.log(accountNumber);

// console.table([accountEmail, accountNumber, accountPassword, accountCity, accountState])                 //(without semiColon(;))
// console.table(accountEmail, accountNumber, accountPassword, accountCity, accountState);                  //(it give error, due to [])
console.table([accountEmail, accountNumber, accountPassword, accountCity, accountState]);


// console.log([accountEmail, accountNumber, accountPassword, accountCity, accountState])                   //(without semiColon(;))
// console.log(accountEmail, accountNumber, accountPassword, accountCity, accountState);                  
