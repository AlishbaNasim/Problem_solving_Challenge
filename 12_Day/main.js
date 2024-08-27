"use strict";
// // ### Question 1: Remove Duplicates from Sorted Array
// // *Problem:*njm
// // You are given a sorted 'array that may contain duplicate elements. Your task is to remove the duplicates in-place (without creating a new array) and return the length of the resulting array. The array should be compressed so that the unique elements are placed first.
// // *Example:*
// // typescript
// // Input: [1, 1, 2, 2, 3, 4, 4, 5]
// // Output: 5
// // Explanation: The resulting array is [1, 2, 3, 4, 5] and its length is 5.
// // *Note:*
// // * Only return the length of the unique elements.
// // * Duplicate elements should be ignored.
function sortedArray(arr) {
    let uniNumb = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[uniNumb]) {
            uniNumb++;
            arr[uniNumb] == arr[i];
        }
    }
    return uniNumb + 1;
}
const duplicates = [1, 2, 2, 3, 3, 4, 4];
const arrNumber = sortedArray(duplicates);
console.log(duplicates.length);
// ### Question 2: Move Zeroes
// *Problem:*
// You are given an array that contains some zero elements. Your task is to move all the zeroes to the end of the array, while keeping the relative order of the non-zero elements unchanged.
// *Example:*
// typescript
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// *Note:*
// * You must modify the array in-place.
// * The relative order of the non-zero elements should remain the same.
function moveZeroes(arr) {
    let nonZero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZero] = arr[i];
            nonZero++;
        }
    }
    for (let i = nonZero; i < arr.length; i++) {
        arr[i] === 0;
    }
}
const zero = [1, 2, 45, 67, 0, 0];
const result = moveZeroes(zero);
console.log(zero);
