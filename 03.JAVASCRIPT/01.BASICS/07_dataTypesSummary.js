// Primitive

// 7 Types: String, Numbers, Boolean, Null,
//          Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);
console.log(id === anotherId);

const bigNumber =564164876118484123148642n 
console.log(typeof bigNumber);


// Reference (non-primitive)

// types: Array, Objects, Function

const heros = ["Shaktiman", "Naagraj", "Doga"]
console.log(typeof heros);


let myInfo = {
    name : "Shubham Raj",
    age : 21,
    height : 5.6
}
console.log(typeof myInfo);


const myFunction = function(){
    console.log("Hello, Shubham");
    
}
console.log(typeof myFunction);
