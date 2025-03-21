// for Of
// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
// for (variable of iterable) {
//     statement
// }

// Array ["", "", "", "", "", "", "", "", "", ""]
// Object [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

const arr = [1,2,3,4,5,6,7,8,9,10];

for (const num of arr) {
    // console.log(num);    
}

const greeting = "Hello World!";
for (const greet of greeting) {
    // console.log(greet);
    // console.log(`Character: ${greet}`);
}


const map = new Map();
map.set('IN',"India");
map.set('US',"United States");
map.set('UK',"United Kingdom");
map.set('CA',"Canada");
map.set('SL',"Sri Lanka");
map.set('IN',"India");

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key);
    // console.log(value);
    // console.log(key ,':-', value);
}

const myObject = {
    'game1': 'Cricket',
    'game2': 'Football',
    'game3': 'Hockey',
}

// for (const [key, value] of myObject) {
//     console.log(key,':-', value);       // Error: myObject is not iterable 
    
// }
