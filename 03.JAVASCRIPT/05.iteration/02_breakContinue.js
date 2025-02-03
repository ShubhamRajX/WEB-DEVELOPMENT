// Break Continue

for (let i = 0; i < 20; i++) {
    console.log(i);
    if(i == 5){
        console.log('Detected 5');
        break;   
    } 
}

for (let i = 0; i < 20; i++) {
    if(i == 10){
        console.log('Detected 10');
        continue;        
    }
    console.log(i);
    
}