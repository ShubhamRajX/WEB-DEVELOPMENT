//!1: program To check if a year is a leap year🧑‍💻
//? If a year is divisible by 4 and not divisible by 100, or
//? If a year is divisible by 400,
// then it is a leap year. Otherwise, it is not a leap year.


var year = 2002;

if( year % 4 === 0 && year % 100 != 0 || year % 400 === 0){
    console.log(`${year} is a leap year`);
}
else{
    console.log(`${year} is not a leap year`);
    
}