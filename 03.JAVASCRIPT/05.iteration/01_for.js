// for

// for(let index = 0; index < Array.length; index++){
//     const element = Array[index];
// }

for(let index = 0; index < 10; index++){
    const element = index;
    if(element === 5){
        // console.log('element is 5');
        
    }
    // console.log(element);
}

for (let i = 0; i < 10; i++) {
    // console.log(`Outer Loop: ${i}`);    
    for (let j = 0; j < 5; j++) {
        // console.log(`Inner Loop: ${j} & Outer Loop: ${i}`);        
        // console.log(i + '*' + j + " = " + i*j);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

const myArray = ["Shubham", "Raj", "Anisha", "Das"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}