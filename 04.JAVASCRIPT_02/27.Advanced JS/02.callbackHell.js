//!  Callback hell;

const studentData = () => {
    setTimeout( () => {
        console.log("Hello! ");
        setTimeout( () => {
            console.log("I'm Shubham Raj");
            setTimeout(() => {
                console.log("I'm from Lauriya");
                setTimeout(() => {
                    console.log("I'm a B.Tech student");
                    setTimeout(() => {
                        console.log("with Computer Science & Engineering");
                        setTimeout(() => {
                            console.log("Thank You!");                            
                        }, 1000);                       
                    }, 1000);                    
                }, 1000);                
            }, 1000);            
        }, 1000);        
    }, 1000);
};

studentData();