// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);


// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a);                          // it gives error
// console.log(b);                          // it gives error
// console.log(c);                          // 30


// var c = 300

// if(true){
//     var c = 30;
// }
// console.log(c);


// let a = 3000

// if(true){
//     let a = 10;
//     // const b = 20;
//     // var c = 30;
//     console.log("Inner a: ",a);
// }
// console.log(a);




function one(){
    const username = "Shubham Raj"

    function two (){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()    
}
// one()

if(true){
    const username = "Anisha"
    if(username === "Anisha"){
        const look = " is so Cute"
        // console.log(username + look);
        
    }
    // console.log(look);
    
}
// console.log(username);



// ********** Intersting ***********

// In this both type are right 
console.log(addOne(5));

function addOne(num){
    return num + 1
}
// addOne(5)


// Right it return the value (8)
const addTwo = function(num){
    return num + 2
}
addTwo(6)

// wrong:-
// addTwo(6)
// const addTwo = function(num){
//     return num + 2
// }


 