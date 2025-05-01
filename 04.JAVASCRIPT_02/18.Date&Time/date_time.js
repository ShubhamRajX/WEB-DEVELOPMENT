//! Date & Time Objects in JavaScript:

//? Date() constructor:
//? Creating a Date Object:
//! Syntax

//* new Date()
//* new Date(date string)

//* new Date(year,month)
//* new Date(year,month,day)
//* new Date(year,month,day,hours)
//* new Date(year,month,day,hours,minutes)
//* new Date(year,month,day,hours,minutes,seconds)
//* new Date(year,month,day,hours,minutes,seconds,ms)

//* new Date(milliseconds).

//! Current date and time:

//? 1: new Date():

// const currentDate = new Date();
// console.log(currentDate);

//? 2: new Date(dateString):

// const dateString = "2024-02-19T10:44:09.274Z";
// const dateFrom = new Date(dateString);
// console.log(dateFrom);

//? 3: new Date(year, month):

// const date1 = new Date(2025, 12);
// console.log(date1);

//? 4: new Date(year, month, day):

// const date2 = new Date(2024, 1, 19);
// console.log(date2);

//? 5: new Date(year, month, day, hours):

// const date3 = new Date(2024, 1, 19, 10);
// console.log(date3);

//? 6: new Date(year, month, day, hours, minutes):

// const date4 = new Date(2024, 1, 19, 10, 44);
// console.log(date4);

//? 7: new Date(year, month, day, hours, minutes, seconds):

// const date5 = new Date(2024, 1, 19, 10, 44, 9);
// console.log(date5);

//? 8: new Date(year, month, day, hours, minutes, seconds, ms):.

// const date6 = new Date(2024, 1, 19, 10, 44, 9, 274);
// console.log(date6);

//? 9: new Date(milliseconds):

// const curMilliSeconds = new Date().getTime();
// // const milliseconds = 1632090690883; // Example milliseconds
// const dateFromMilliseconds = new Date(curMilliSeconds);
// console.log(dateFromMilliseconds);.


//todo Note:
//? 1: JavaScript counts months from 0 to 11:
// ?January = 0, December = 11

//? 2: JavaScript Stores Dates as Milliseconds: JavaScript stores dates as number of milliseconds since January 01, 1970.


//! Date String Format:

//? new Date(date string):

// const date1 = new Date("2024-01-05"); // Year-Month-Day
// const date2 = new Date("January 5, 2024"); // Month Day, Year
// console.log(date1);
// console.log(date2);


//! JavaScript Get Date Methods / Getting Components:

// const currentDate = new Date();
// //? In a date object, the time is static.
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth(); // 0-based index
// const date = currentDate.getDate();
// const day = currentDate.getDay();
// console.log(currentDate);
// console.log(year);
// console.log(month);
// console.log(date);
// console.log(day);


//! JavaScript Set Date Methods / Setting Components:

// const date = new Date();

//? setFullYear(yearValue[, monthValue[, dayValue]]):

// console.log(date);
// date.setFullYear(2026);
// console.log(date); // Date object with the year set to 2025

//? setMonth(monthValue[, dayValue]):

// date.setMonth(5); // June (months are zero-based)
// console.log(date); // Date object with the month set to June

//? setDate(dayValue):

// date.setDate(15);
// console.log(date); // Date object with the day of the month set to 15


//! JavaScript Get Time Methods / Getting Components:

// const currentTime = new Date();

// const hours = currentTime.getHours();
// const minutes = currentTime.getMinutes();
// const seconds = currentTime.getSeconds();
// const time = currentTime.getTime();
// console.log(currentTime);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
// console.log(time);


//! JavaScript Set Time Methods / Getting Components:

// const date = new Date();

//? setHours(hourValue[, minuteValue[, secondValue[, millisecondValue]]]):

// date.setHours(10);
// console.log(date); // Date object with the hours set to 10

//? setMinutes(minuteValue[, secondValue[, millisecondValue]]):

// date.setMinutes(30);
// console.log(date); // Date object with the minutes set to 30

//? setSeconds(secondValue[, millisecondValue]): 

// date.setSeconds(45);
// console.log(date); // Date object with the seconds set to 45

//? setMilliseconds(millisecondValue):

// const date = new Date();

// date.setMilliseconds(500);
// console.log(date); // Date object with the milliseconds set to 500

//? setTime(timeValue):

// const date = new Date();
// date.setTime(1832090690883);
// console.log(date); // Date object representing the specified time


//* A few useful methods of the Date object in JavaScript

//? 1: toLocaleString():

// const date = new Date();
// const localString = date.toLocaleString();
// console.log(localString); // Example output: "2/19/2024, 4:30:00 PM" (depending on the locale)

//? 2: toLocaleDateString():

// const date = new Date();
// const localDateString = date.toLocaleDateString();
// console.log(localDateString); // Example output: "2/19/2024" (depending on the locale)

//? 3: toLocaleTimeString():

// const date = new Date();
// const localTimeString = date.toLocaleTimeString();
// console.log(localTimeString); // Example output: "4:30:00 PM" (depending on the locale)

//? 5: parse():

// const dateString = "2024-02-19T16:30:00Z";
// const parsedDate = Date.parse(dateString);
// console.log(parsedDate); // Example output: 1703254200000 (milliseconds)

//!  Bonus:

// let newDate = new Date();
// console.log(Date.now());
// console.log(newDate.getTime());

//! Interview Questions:

//! 1: Write a function to add a specified number of days to a given date.

const addDaysToDate = (date, extraDay) => {
    // console.log(date);
    // console.log(date.setDate(date.getDate() + extraDay));
    // console.log(new Date(1709769600000));
    // console.log(new Date(date.setDate(date.getDate() + extraDay)));
    const updatedDate = date.setDate(date.getDate() + extraDay);
    // const newUpdatedDate = new Date(updatedDate);
    // return newUpdatedDate;
    return new Date(updatedDate);
    // return new Date(date.setDate(date.getDate() + extraDay));
    
    
    
}

const date = new Date("2024-02-29");
const newDate = addDaysToDate(date, 7);
console.log(newDate);
console.log(newDate.toLocaleDateString());

//! Question: Write a function to calculate the difference in days between two given dates.
// const getDaysDifference = (d1, d2) => {
//     let oneDay = 24*60*60*1000;
//     let diff = Math.abs(d1 - d2);
//     // console.log(oneDay);
//     // console.log(diff);
//     // const difference = Math.round(diff / oneDay);
//     // return difference;
//     return Math.round(diff / oneDay);
// };

// const date1 = new Date("2024-02-19");
// const date2 = new Date("2024-03-01");
// console.log(getDaysDifference(date1, date2)); // Output: 11 (difference in days)
