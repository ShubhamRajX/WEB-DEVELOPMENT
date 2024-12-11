// console.log("S");
// console.log("H");
// console.log("U");
// console.log("B");
// console.log("H");
// console.log("A");
// console.log("M");


// in easy way
function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}
// sayMyName           // reference
// sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
// addTwoNumbers(3,6);
// addTwoNumbers(3, "6");
// addTwoNumbers(3, b);
// addTwoNumbers(3, null);

function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     // console.log("Shubham");
//     return result

    return num1 + num2
}

const result = addTwoNumbers(4, 3)
// console.log("Result: ", result);


function loginUser(username){
    return `${username} just logged in`
}

// console.log(loginUser("Shubham"));
// console.log(loginUser(""));
// console.log(loginUser());


function loginUser1(username){
    // if(username === undefined){                          // use 3 =
    // if(username == undefined){                           // use 2 =
    // if(undefined){                                       // wrong statement because it is false value so doesn't check anything
    if(!username){                                          // right and shortcut method
        console.log("Please enter the username ");
        return        
    }
    return `${username} just logged in`
}

// console.log(loginUser1("Shubham"));
// console.log(loginUser1(""));
// console.log(loginUser1());

function loginUser2(username = "Raj"){
    // it doesn't check the below part because it has default value
    if(!username){
        console.log("Please enter the username ");
        return        
    }
    return `${username} just logged in`
}

// console.log(loginUser2("Shubham"));
console.log(loginUser2());