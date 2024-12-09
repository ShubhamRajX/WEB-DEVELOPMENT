// Both are same

// const tinderUser = new Object()                  // singleton object
const tinderUser = {}                              // non singleton object

tinderUser.id = "Abc135"
tinderUser.name = "Shubham"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "shubhamraj.1517@gmail.com",
    name: {
        fullName: {
            firstName: "Shubham",
            lastName: "Raj"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.name.fullName.firstName);

const obj1 = {1: "s", 2: "r"}
const obj2 = {3: "a", 4: "d"}

// const obj3 = {obj1 , obj2}                        // it print the value as it is

// const obj3 = Object.assign(obj1, obj2)                // write but we always use{} in brackets
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "raj@gmail.com"
    },
    {
        id: 1,
        email: "raj@gmail.com"
    },
    {
        id: 1,
        email: "raj@gmail.com"
    },
    {
        id: 1,
        email: "raj@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

