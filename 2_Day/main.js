"use strict";
// Question 3:
//  First and Last Element
// Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.
// Requirements:
// If the array has only one element, the function should return an array with that element duplicated.
// Ensure the function handles arrays with a single element correctly.
function arrayNum(num) {
    if (num.length <= 1) {
        console.log(num[0], num[0]);
    }
    else {
        console.log(num[0], num.length - 0);
    }
}
arrayNum([1, 2, -3, 4, 5, 6]);
arrayNum([7]);
// Question: 4 
// Find the Largest Number
// Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.
// Requirements:
// The function should handle arrays with positive and negative numbers.
// If the array contains only one number, return that number.
// Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs).
function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
console.log(findLargestNumber([1, 2, 9, 7, 5])); //9
console.log(findLargestNumber([1, -9, 9, -7, 5])); //9
console.log(findLargestNumber([1, 5, 4, 7, 5])); //7
console.log(findLargestNumber([10, 15, 89, 7, -5])); //89
