//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

// console.log(calculator(5, 2, '+')); // Output: 7
// console.log(calculator(8, 4, '-')); // Output: 4
// console.log(calculator(10, 2, '/')); // Output: 5

// const calculator = (num1, num2, operator) =>{

//     switch(operator){
//         case "+":
//             return num1 + num2;
        
//         case "-":
//             return num1 - num2;

//         case "*":
//             return num1 * num2;

//         case "/":
//             if(num2 == 0){
//                 return "Error:";
//             }
//             else{
//                 return num1 / num2;
//             }
//         default:
//             return "Enter valid Operator: ";
//     }
// };
// console.log(calculator(5, 2, '+')); // Output: 7
// console.log(calculator(8, 4, '-')); // Output: 4


function calculator(num1, num2, operator){
    let result;

    if (operator == "+"){
        return num1 + num2;
    }
    else if (operator == "-"){
        return num1 - num2;
    }
    else if(operator == "*"){
        return num1 * num2;
    }
    else if(operator =="/"){
        if(num2 == 0){
            return "Error"
        }
        else{
            return num1 / num2;
        }
    }
    else{
        return "Enter valid Operator: ";
    }
}
// console.log(calculator(45, 76 , "/"));
console.log(calculator(98, 75, "-")); // Output: 23