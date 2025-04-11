let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

//! PUSH(Element)
//* arrName.push(element); // Adds an element to the end of the array

// fruits.push('mango'); // Adds 'mango' to the end of the array
// console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango']
// console.log(fruits.push('mango')); // 6


//! POP(Element)
//* arrName.pop(element); // Removes the last element from the array and returns it

// fruits.pop(); // Removes 'kiwi' from the end of the array
// console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
// console.log(fruits.pop()); // kiwi


//! UNSHIFT(Element)
//* arrName.unshift(element); // Adds an element to the beginning of the array

// fruits.unshift('strawberry'); // Adds 'strawberry' to the beginning of the array
// console.log(fruits); // ['strawberry', 'apple', 'banana', 'orange', 'grape']
// console.log(fruits.unshift('strawberry')); // 6


//! SHIFT(Element)
//* arrName.shift(element); // Removes the first element from the array and returns it

// fruits.shift(); // Removes the first element from the array and returns it
// console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
// console.log(fruits.shift()); // strawberry


//! SPLICE(Element)
//*  what if, we want to add or remove anywhere in an elements - p2
//* splice(start, deleteCount, item1, item2, /*...itemN*/); // Adds/removes items to/from an array, and returns the removed item(s)

// console.log(fruits.splice(1)); // ['banana', 'orange', 'grape']
// console.log(fruits.splice(1, 2)); // ['banana', 'orange']

// fruits.splice(1,1);
// console.log(fruits); // ['apple', 'orange', 'grape']

// fruits.splice(1, 1, 'mango'); // Adds 'banana' at index 1 without removing any elements
// console.log(fruits); // ['apple', 'mango', 'orange', 'grape', 'kiwi']

// fruits.splice(-1, 0, 'mango'); // Adds 'banana' at index 1 without removing any elements
// fruits.splice(fruits.length, 0, 'mango'); // Adds 'banana' at index 1 without removing any elements
// console.log(fruits);

//? what if you want to add the element at the end
fruits.splice(1, 0, 'mango', 'stawberry'); // Adds 'banana' at index 1 without removing any elements   
console.log(fruits); // ['apple', 'mango', 'banana', 'orange', 'grape']


