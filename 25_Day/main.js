"use strict";
// ### Question 1: Calculate the Difference Between the Sum of Odd and Even Digits
// *Problem:* You are given a positive integer. You need to calculate the sum of the odd digits and the sum of the even digits, then find the difference between these two sums. The difference should be positive.
// *Example:*
// - Input: number = 1234
// - Output: 2 (Odd sum: 1 + 3 = 4, Even sum: 2 + 4 = 6, Difference: |4 - 6| = 2)
// *Hint:* Convert the number to a string, then check each digit to see if it’s odd or even, and calculate the respective sums.
// function differenceBtwOddOrEven(numbers:number):number{
//     let convertToString=numbers.toString()
//     let evenSum =0
//     let oddSum =0
//     for(let i =0;i<convertToString.length;i++){
//         let digits = Number(convertToString[i])
//         if(i % 2 === 0){
//           evenSum += digits
//         } else {
//            oddSum += digits
//         }
//     }
//     let difference = oddSum - evenSum
//     return difference
// }
// console.log(differenceBtwOddOrEven(1234))//Output:2(Odd sum: 1 + 3 = 4, Even sum: 2 + 4 = 6, Difference: |4 - 6| = 2)
// console.log(differenceBtwOddOrEven(6789))//Output:2(Odd sum: 7 + 9 = 16, Even sum: 6 + 8 = 14, Difference: |16 - 14| = 2)
// ### Question 2: Find the Smallest Divisor of a Number (Greater than 1)
// *Problem:* You are given a positive integer. Your task is to find the smallest divisor of this number that is greater than 1.
// *Example:*
// - Input: number = 15
// - Output: 3 (because 3 is the smallest divisor of 15 that is greater than 1)
// *Hint:* Use a loop to check which number divides the integer without leaving a remainder, starting from 2 upwards.
function smallestDivisor(num) {
    //using loop check the smallest divisor
    for (let i = 2; i <= num; i++) {
        //compare if after divider there is 0 reminder then return i
        if (num % i === 0) {
            return i;
        }
    }
    return num;
}
console.log(smallestDivisor(30)); //Output: 2 (because 2 is the smallest divisor of 30 that is greater than 1)
console.log(smallestDivisor(15)); //Output: 3 (because 3 is the smallest divisor of 15 that is greater than 1)
console.log(smallestDivisor(45)); //Output: 3 (because 3 is the smallest divisor of 15 that is greater than 1)
