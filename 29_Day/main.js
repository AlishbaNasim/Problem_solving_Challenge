"use strict";
// *Question 1: Calculate the Product of Non-Zero Digits*
// Description:
// Write a TypeScript function that takes a number as input and returns the product of all non-zero digits in the number.
// Example:
// typescript
// Input: 4056
// Output: 120  // 4 * 5 * 6 = 120
// Input: 1002
// Output: 2  // 1 * 2 = 2
// function nonZeroDigit(n:number):number{
//     let convert = n.toString()
//     let product = 1
//     for(let i=0;i<convert.length;i++){
//         let num1 = Number(convert[i])
//         if(num1 !== 0){
//           product *= num1
//         }
//     }
//     return product
// }
// console.log(nonZeroDigit(102))//Output: 2  // 1 * 2 = 2
// console.log(nonZeroDigit(4056))//Output: 120  // 4 * 5 * 6 = 120
// console.log(nonZeroDigit(20980))//Output: 144 // 2 * 9 * 8 = 144
// *Question 2: Find the Difference Between the Largest and Smallest Digit*
// Description:
// Write a TypeScript function that takes a number as input and returns the difference between its largest and smallest digits.
// Example:
// typescript
// Input: 7593
// Output: 6  // 9 - 3 = 6
// Input: 12345
// Output: 4  // 5 - 1 = 4
// Hint: Convert the number to a string or use a loop to identify the largest and smallest digits, then calculate their difference.
function differenceLargeAndSmall(n) {
    // let convertToStr = n.toString()
    let maxDigit = 0;
    let minDigit = 9;
    let convertToStr = n.toString();
    for (let i = 0; i < convertToStr.length; i++) {
        let currentDigit = Number(convertToStr[i]);
        if (currentDigit > maxDigit) {
            maxDigit = currentDigit;
        }
        if (currentDigit < minDigit) {
            minDigit = currentDigit;
        }
    }
    let difference = maxDigit - minDigit;
    return difference;
}
console.log(differenceLargeAndSmall(7593)); // Output: 6  // 9 - 3 = 6
console.log(differenceLargeAndSmall(12345)); // Output: 4  // 1 - 5 = 4
console.log(differenceLargeAndSmall(8765)); // Output: 3  // 8 - 5 = 3
