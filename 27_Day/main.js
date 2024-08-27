"use strict";
// ### Question 1: Count the Number of Divisors
// *Description:*
// Write a TypeScript function that takes a positive integer as input and returns the number of its divisors (factors). A divisor is a number that divides the input number without leaving a remainder.
// *Example:*
// typescript
// Input: 12
// Output: 6  // (1, 2, 3, 4, 6, 12)
// Input: 7
// Output: 2  // (1, 7)
// *Hint:* Use a loop to check each number from 1 to the given number to see if it divides the number evenly.
// function divisor(n:number):number{
//     let count=0
//     for(let i = 0;i<= n;i++){
//         if(n%i===0){
//           count++
//         }
//     }
//   return count
// }
// console.log(divisor(12))//Output: 6  // (1, 2, 3, 4, 6, 12)
// console.log(divisor(7))//Output: 2  // (1, 7)
// console.log(divisor(10))//Output:  4 // (1, 2, 5,10)
// ### Question 2: Check if a Number is a Perfect Square
// *Description:*
// Write a TypeScript function that takes a positive integer as input and returns true if the number is a perfect square, otherwise return false. A perfect square is a number that is the square of an integer.
// *Example:*
// typescript
// Input: 16
// Output: true  // (4 * 4 = 16)
// Input: 20
// Output: false
// *Hint:* Use the square root function Math.sqrt() and check if the result is an integer.
function positiveInteger(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    const value = Math.sqrt(n);
    return value == Math.floor(value);
}
//  console.log(positiveInteger(-1))//throw error
console.log(positiveInteger(50));
console.log(positiveInteger(45));
