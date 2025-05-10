//!    ECMAScript Features (2022) / ES13:

//? List of new useful features added in ES8  
// Array.findLast()
// Array.findLastIndex()
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start, deleteCount, ...items)
// Array.prototype.with(index, value)

//!  Array.findLast() & Array.findLastIndex():

// const array = [1, 2, 3, 4, 5, 6, 4];
// console.log(array.findLast((elem) => elem > 4));
// console.log(array.findLastIndex((elem) => elem));

//!  New Array.prototype functions:

const myNames = ["vinod", "bahadur", "thapa", "kodyfier"];

//todo if it's not working run in browser

//? Array.prototype.toReversed();
// const reversedNum = myNames.toReversed();
// console.log("original", myNames);
// console.log("reversed", reversedNum);

//? Array.prototype.toSorted(compareFn);
// const sortedArr = myNames.toSorted();
// console.log("original", myNames);
// console.log("sorted", sortedArr);

//? Array.prototype.toSpliced(start, deleteCount, ...items);
// const splicedArr = myNames.toSpliced(1, 1, "thapaTechnical");
// console.log("original", myNames);
// console.log("spliced", splicedArr);

//? Array.prototype.with(index, value);
const replaceWith = myNames.with(2, "thapaTechnical");
console.log("original", myNames);
console.log("replaced", replaceWith);