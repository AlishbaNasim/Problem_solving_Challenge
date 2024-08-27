"use strict";
// // *Question 1: Convert Number to Words*
// // *Problem:*
// // Write a TypeScript function that takes a number between 0 and 99 and returns the number in words. For example, if the input is 45, the output should be "Forty-Five".
// // *Hint:*
// // - Create arrays for single digits (0-9), teens (10-19), and tens (20, 30, ... 90).
// // - Handle different cases separately: numbers less than 10, between 10 and 19, and between 20 and 99.
// // *Function Signature:*
// // typescript
// function numberToWords(num: number): string {
//   let singleDigit: string[] = [
//     "Zero",
//     "One",
//     "Two",
//     "Three",
//     "Four",
//     "Five",
//     "Six",
//     "Seven",
//     "Eight",
//     "Nine",
//   ];
//   let teen: string[] = [
//     "ten",
//     "eleven",
//     "tweleve",
//     "thirteen",
//     "fourteen",
//     "fifteen",
//     "sixteen",
//     "seventeen",
//     "eighteen",
//     "ninteen",
//   ];
//   let tens: string[] = [
//     "",
//     "",
//     "twenty",
//     "thirty",
//     "fourty",
//     "fifty",
//     "sixty",
//     "seventy",
//     "eighty",
//     "ninty",
//   ];
//   if (num < 10) {
//     return singleDigit[num];
//   } else if (num < 20) {
//     return teen[num - 10];
//   } else {
//     let tenWords = tens[Math.floor(num / 10)];
//     let singleWords = singleDigit[num % 10];
//     if (singleWords === "Zero") {
//       return tenWords;
//     } else {
//       return tenWords + "-" + singleWords;
//     }
//   }
// }
// console.log(numberToWords(23));
// **Question 2: Calculate the Sum of the First n Natural Numbers**
// *Problem:*
// Write a TypeScript function that takes a positive integer n and returns the sum of the first n natural numbers. For example, if n = 5, the output should be 15 (because 1 + 2 + 3 + 4 + 5 = 15).
// *Hint:*
// - Use the formula for the sum of the first n natural numbers: \(\text{Sum} = \frac{n \times (n + 1)}{2}\).
// - Alternatively, implement the sum using a loop that adds each number from 1 to n.
// *Function Signature:*
// typescript
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i < sum; i++) {
        sum += i;
    }
    let sum1 = (n * (n + 1)) / 2;
    return sum1;
}
console.log(sumOfNaturalNumbers(5)); //Output:15 + 2 + 3 + 4 + 5 = 15
console.log(sumOfNaturalNumbers(4)); //Output:28 + 2 + 3 + 4  = 28
console.log(sumOfNaturalNumbers(6)); //Output:21 + 2 + 3 + 4 + 5 + 6 = 21
