const user = {
    username: "Shubham",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} ,welcome to website`);
        // console.log(this);
        
    }
        
}
// user.welcomeMessage()
// user.username = "Raj"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "Shubham"
//     // console.log(this);
//     console.log(this.username);
    
// }
// chai()


// const chai = function() {
//     let username = "Raj"
//     console.log(this.username);
    
// }
// chai()


// Arrow.....
// const chai = () => {
//     let username = "Raj"
//     console.log(this);
    
// }
// chai()


// () => {}

const addTwo = (num1 , num2) => {
    return num1 + num2
}
// console.log(addTwo(3,5));

// const addTwoo = (num1 , num2) => num1 + num2
// console.log(addTwoo(5,9));

const addTwoo = (num1, num2) => ({username: "Shubham"})
console.log(addTwoo());
