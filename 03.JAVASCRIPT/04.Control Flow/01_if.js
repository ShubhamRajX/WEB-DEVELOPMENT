// IF
/* 
if(true){
    //Execute this code
}
if(false){
    //Don't execute this code
}
*/

/*
const isUserLoggedIn = true
// const isUserLoggedIn = false
if(isUserLoggedIn){
    console.log('Welcome User')
}
*/

/*
const temperature = 30
if(temperature === 60){
    console.log('less than 60')
}
else{
    console.log('greater than 60')
}
*/

/*
const score = 230

if(score > 150){
    const power = "Fly "
    console.log(`User power: ${power}`);    
}
console.log(`User score: ${power}`); // Error: power is not defined
*/

/*
const score = 230

// if (score > 150) console.log('test1');
// if (score > 200) console.log('test2'), console.log('test3');
if (score > 200) console.log('test2'),
 console.log('test3');
*/

/*
const score = 1500

if(score < 500){
    console.log('Score is less than 500');
}
else if(score < 750){
    console.log('Score is less than 750');
}
else if(score < 1000){
    console.log('Score is less than 1000');
}else{
    console.log('Score is greater than 1000');
}
*/

const loggedIn = true
const debitCard = true
const loggedInWithGoogle = false
const loggedInWithEmail = true

if(loggedIn && debitCard){
    console.log('User can make a payment');
}
if(loggedInWithGoogle || loggedInWithEmail){
    console.log('User can login');
}