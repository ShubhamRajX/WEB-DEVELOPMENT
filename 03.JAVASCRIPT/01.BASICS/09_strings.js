const name = "Shubham"
const repoCount = 15

// console.log(name + repoCount + " Value");

// sting interpoletion
console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);


const newName = new String('Shubham-Raj')

console.log(newName);
console.log(newName[0]);
console.log(newName[4]);
console.log(newName.__proto__);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(3));
console.log(newName.indexOf('b'));

const newString = newName.substring(0,4)
// const newString = newName.substring(-6,4)                    // it neglect -ve number & and take 0 instead of -ve number
console.log(newString);

const anotherString = newName.slice(-10,4)
console.log(anotherString);

const newOne = "   Raj   "
console.log(newOne);
console.log(newOne.trim());

const newTwo = "Shubham_"
console.log(newTwo.replace('_',' Raj'));

console.log(newTwo.includes('bha'));
console.log(newTwo.includes('Raj'));


console.log(newName.split('-'));

// console.log(newName.bold);

