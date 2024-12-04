// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shubham",
    "full name": "Shubham Raj",
    age: 22,
    mySym: "mykey1",                // it doesn't show the property of symbol, for symbol use []
    [mySym]: "mykey1",
    location: "Greater Noida",
    email: "shubhamraj.1517@gmail.com",
    isLoggerIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);

// console.log(JsUser[mySym]);

JsUser.email = "theshubhamraj.01@gmail.com"
JsUser.location = "Lauriya"

// console.log(JsUser);

// Object.freeze(JsUser) 
JsUser.age = "23"
JsUser.location = "Alpha 1"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser.greeting);

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());



