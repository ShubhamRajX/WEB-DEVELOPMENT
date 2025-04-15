//* String Search Methods

//! indexOf()

//* syntax
//* indexOf(searchString)
//* indexOf(searchString, position)

// let text = "Shubham Raj";
// console.log(text.indexOf("Raj"));       // 8
// console.log(text.indexOf("raj"));       // -1

// let strArr = Array.from(text);
// console.log(strArr);

// let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
// console.log(strMap);


//!  lastIndexOf() 

//* syntax
//* lastIndexOf(searchString)
//* lastIndexOf(searchString, position)


// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let index = text.indexOf("JavaScript");               // 6
// let index = text.lastIndexOf("JavaScript");          // 44
// let index = text.lastIndexOf("JavaScript", 40);     // 6

// console.log(index);


//!  search()

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.search('Javascript');          // -1
// let result = text.search('JavaScript');          // 6

// let result = text.search(/Javascript/g);         // -1
// let result = text.search(/JavaScript/g);         // 6

// let result = text.search(/Javascript/i);           // 6
// let result = text.search(/JavaScript/gi);            // 6

// console.log(result);


//!  match()

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("Javascript");          // null
// let result = text.match("JavaScript");

// let result = text.match(/JavaScript/);

// let result = text.match(/JavaScript/g);
// let result = text.match(/Javascript/g);             // null
// let result = text.match(/Javascript/gi);

// console.log(result);


//!   matchAll()

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let matchResult = text.matchAll("javascript");
// let matchResult = text.matchAll("JavaScript");
// console.log(matchResult);

// let matchResult = text.matchAll("JavaScript");
// console.log(...matchResult);

// for (let item of matchResult) {
//   console.log(item);
// }

// for (let item of matchResult) {
//   console.log(item[0]);
// }

// for (let index of matchResult) {
//   console.log(index.index);
// }

// for (let { index } of matchResult) {
//   console.log(index);
// }


//! includes()

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let includeResult = text.includes("Java");           // true
// let includeResult = text.includes("java");              // false

// let includeResult = text.includes(/java/i);          // error

// let includeResult = text.includes("J");           // true
// let includeResult = text.includes("Javac");             // false
// console.log(includeResult);


//! startsWith()

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.startsWith("welcome");         // false
// let result = text.startsWith("Welcome");         // false

// let result = text.startsWith("Hello");              // true

// let result = text.startsWith("welcome", 18);            // true
// let result = text.startsWith("Welcome", 18);            // false
// let result = text.startsWith("welcome", 17);            // false
// console.log(result);


//!  endsWith()

let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.endsWith("welcome");           // false

let result = text.endsWith("course");            // true
console.log(result);