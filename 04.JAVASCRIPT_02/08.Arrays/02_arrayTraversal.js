let fruits = ["Apple", "Banana", "Orange","Mango", "Grapes"];

//! for of loop (Elements)

for(let items of fruits){
    // console.log(items);
}

// for(let i = 0; i < fruits.length; i++){
    // console.log(/fruits[i]);
// }

//! for in loop (Index)
for ( let index in fruits){
    // console.log();
}

// for(let i = 0; i < fruits.length; i++){
//     console.log(i);
// }

//! forEach loop (Elements)

//? syntax
//* Array.forEach(function
//*     callback(currebtValue, index, array){
//*         // your logic here
//*     }, thisValue);

//* Array.forEach((currentValue, index, array) => {
//*     // your logic here
//*     }, thisValue);

fruits.forEach((curElem, index, array)=>{
    // console.log(`${curElem} ${index}`);
    // console.log(`${array}`);
    // console.log(array);
});


//! Map Function 

//? Syntax
//* array.map(function callback(currentValue, index, array){
//*     // your logic here
//* }, thisValue);

//* array.map((currentValue, index, array) => {
//*     // your logic here
//*     }, thisValue);

// const myArr = fruits.map((curElem, index, array) => {
//     return `${curElem} ${index}`;
// });
// console.log(myArr); // [ 'Apple 0', 'Banana 1', 'Orange 2', 'Mango 3', 'Grapes 4' ]


// const myArr = fruits.map((curElem, index, array) => {
//     return `my fav fruit is ${curElem}`;
// });
// console.log(myArr); // [ 'my fav fruit is Apple', 'my fav fruit is Banana', 'my fav fruit is Orange', 'my fav fruit is Mango', 'my fav fruit is Grapes' ]

// console.log(fruits);



