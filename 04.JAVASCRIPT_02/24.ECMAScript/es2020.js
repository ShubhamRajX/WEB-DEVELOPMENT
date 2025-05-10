//!    ECMAScript Features (2020) / ES11:

//? List of new useful features added in ES8  👇
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.
// promise.allSettled

//!  BigInt:

//? Creating BigInts:
// - Using the `n` suffix:

// Using the BigInt() constructor:
// const anotherLargeNumber = BigInt("123456789012345678901234567890");
// console.log(anotherLargeNumber);
// console.log(typeof anotherLargeNumber);

// let maxNumber = Number.MAX_SAFE_INTEGER;
// maxNumber = BigInt(maxNumber);
// let num = maxNumber + 10n;
// console.log(num);

//!  Nullish Coalescing Operator ??:

// let favNum = 0; // falsy
// // userFavNum = favNum || 10;
// userFavNum = favNum ?? 10;
// console.log(userFavNum);

//!  Optional Chaining Operator (?.):

// const person = {
//   name: "John",
//   address: {
//     city: 0,
//     zipCode: 12345,
//   },
// };

//? Accessing nested properties without optional chaining
// const city = person.address;
// const city = person.address ? person.address.city : "city is not present";
// console.log(city);

//? with optional chaining
// const city = person.address?.city ?? "city is not present";
// console.log(city);
//? One more example
// The optional chaining operator can be chained multiple times to access deeply nested properties:

// const person = {
//   name: "John",
//   address: {
//     city: "New York",
//     zipCode: 12345,
//     coordinates: {
//       latitude: 40.7128,
//       longitude: -74.006,
//     },
//   },
// };

// // Accessing deeply nested properties with optional chaining
// const latitude = person.address?.coordinates?.latitude ?? "not present";
// console.log(latitude);


//!  Promise.allSettled():
