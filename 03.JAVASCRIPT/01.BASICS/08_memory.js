// Stack(Primitive) and Heap(Non-Primitive) Memory

let myName = "Shubham Raj";

let anotherName = myName;
anotherName = "Vicky Gupta"

console.log(myName)
console.log(anotherName)


let userOne = {
    email : "user@gmail.com",
    upi : "user@axis",
}
let userTwo = userOne

userTwo.email = "shubham@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
