// Immediately invoked function expressios (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()


(function chai(){
    //named IIFE
    // console.log('DB CONNECTED');
}) ();
// ; you have to user this in IIFE
// iy you not use ; then it gives error in next code


// ( () => {
//     console.log('DB CONNECTED');
// }) ();


( (name) => {
    // Unnamed IIFE
    console.log(`You Connected with ${name}`);
    
} ) ('Shubham');