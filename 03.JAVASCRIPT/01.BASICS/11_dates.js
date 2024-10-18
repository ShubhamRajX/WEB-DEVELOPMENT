// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);


// console.log(myDate.toString());                                 // Thu Oct 17 2024 15:28:39 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());                             // Thu Oct 17 2024
// console.log(myDate.toISOString());                              // 2024-10-17T09:58:39.498Z
// console.log(myDate.toJSON());                                   // 2024-10-17T09:58:39.498Z
// console.log(myDate.toLocaleDateString());                       // 17/10/2024
// console.log(myDate.toLocaleString());                           // 17/10/2024, 3:28:39 pm

let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2053, 5, 2)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

let myCreatedDateTime = new Date(2030, 11, 9, 20,30,50)
// console.log(myCreatedDateTime.toLocaleString());

// let myCreate = new Date("2023-11-30")
let myCreate = new Date("11-30-2024")
// console.log(myCreate.toLocaleDateString());
// console.log(myCreate.toLocaleString());


let mytimeStamp = Date.now()

// console.log(mytimeStamp);
// console.log(myCreate.getTime());

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));
