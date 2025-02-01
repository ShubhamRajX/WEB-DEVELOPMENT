// const userEmail = 'Shubham@raj.ai'
// const userEmail = ''
const userEmail = []

if(userEmail){
    console.log('Email is present');
}
else{
    console.log('Email is not present');
}


/* 
Falsy values:
1. false
2. 0 , -0, BigInt(0), Number(0), 0n
3. '', "", `` (empty string)
4. null
5. undefined
6. NaN

Truthy values:
1. true
2. 1, -1, 0.1, 0.
3. '0', 'false', 'null', 'undefined', 'NaN'
4. [], {}, function(){}
5. ' ', '  ', '   ' (white space)
6. 'Shubham', '0', 'false', 'null', 'undefined', 'NaN'
*/

/*
const userEmail = []
if(userEmail.length === 0){
    console.log('Array is empty');
}
const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log('Object is empty');
}
*/


// Nullish coalescing operator(??) Null & Undefined

let val1;
// val1 = 5 ?? 10
// val1 = 0 ?? 10
// val1 = '' ?? 10
val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20 


console.log(val1);


// terniary operator

// condition ? true : false

const teaPrice = 100
teaPrice <= 60 ? console.log('Affodable') : console.log('Expensive');
