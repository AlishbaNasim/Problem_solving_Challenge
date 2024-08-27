"use strict";
// // ### Question 1: Count Vowels in a String
// // *Problem Statement:*
// // Write a function in TypeScript that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// // *Example:*
// // typescript
// // countVowels("hello world"); // Output: 3
// // countVowels("TypeScript"); // Output: 3
// // *Function Signature:*
// // typescript
// // function countVowels(str: string): number {
// //     // Your code here
// // // }
function countVowels(str) {
    let count = str.toLowerCase();
    let countVowels = 0;
    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(count[i])) {
            countVowels++;
        }
    }
    return countVowels;
}
console.log(countVowels("hello")); //OUTPUT:2
console.log(countVowels("Bestie")); //OUTPUT:3   
// ### Question 2: Find the Missing Number in an Array
// *Problem Statement:*
// Write a function in TypeScript that takes an array of numbers containing n distinct numbers taken from the range 1 to n+1, where one number is missing. The function should find and return the missing number.
// *Example:*
// typescript
// findMissingNumber([1, 2, 4, 5]); // Output: 3
// findMissingNumber([3, 7, 1, 2, 8, 4, 5]); // Output: 6
// *Function Signature:*
// typescript
// function findMissingNumber(arr: number[]): number {
//     // Your code here
// }
function findMissingNumber(arr) {
    const n = arr.length;
    const expectedNum = ((n + 1) * (n + 2)) / 2;
    const actualNum = arr.reduce((a, b) => a + b, 0);
    return expectedNum - actualNum;
}
console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6
