//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).

//* isi  ==   isi
//* radar
//* level

const isPalindrome = (str) => {
    let reverse = "";
    for(let i = str.length - 1; i >= 0; i--){
        reverse = reverse + str[i];
    }
    // if(str == reverse){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return reverse == str ? true : false;
}
// console.log(isPalindrome("radar")); // true
// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("Shubham")); // false