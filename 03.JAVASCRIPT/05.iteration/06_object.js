// OBJECTS

const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    py : 'Python',
    swift : 'Swift by apple',
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


// ARRAYS

const programming = ['js','cpp','rb','py','swift'];

for(const key in programming){
    // console.log(key);
    // console.log(programming[key]);
    
}

const map = new Map();
map.set('IN',"India");
map.set('US',"United States");
map.set('UK',"United Kingdom");
map.set('CA',"Canada");
map.set('SL',"Sri Lanka");
map.set('IN',"India");

for (const key in map) {
    console.log(key);                               // it doesn't gives any output because map is not iterable
        
}