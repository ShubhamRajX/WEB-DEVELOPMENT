//todo Challenge time
//? 1: Add Dec at the end of an array?

const months = ["Jan", "march", "April", "June", "July"];
// console.log(months.push("Dec")); // 6

// months.push("Dec");
// console.log(months); // [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]

// months.splice(months.length, 0, "Dec");
// console.log(months); // [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]


//? 2: What is the return value of splice method?

// When used to add elements, the splice method returns an empty array ([]).


//? 3: Update march to March (update)?

// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate, 1, "March");
// console.log(months); // [ 'Jan', 'March', 'April', 'June', 'July', 'Dec' ]


//? 4: Delete June from an array?

const indexToDelete = months.indexOf("June");
months.splice(indexToDelete, 1);
console.log(months); // [ 'Jan', 'March', 'April', 'July', 'Dec' ]
