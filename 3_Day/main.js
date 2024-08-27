"use strict";
// // // Question 5:
// // // Remove Duplicates from Array
// // // Write a TypeScript function named removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements removed. 
// // // *Do not use built-in methods* like Set.
// // // Requirements:
// // // - The function should iterate through the array and check for duplicates manually.
// // // - You can use additional arrays or variables to keep track of seen elements.
// // // - Do not use any built-in methods like filter, reduce, or Set.
function removeDuplicates(arr) {
    let uniqueNumber = [];
    for (let i = 0; i < arr.length; i++) {
        let duplicateNum = false;
        for (let a = 0; a < uniqueNumber.length; a++) {
            if (arr[i] === uniqueNumber[a]) {
                duplicateNum = true;
                break;
            }
        }
        if (!duplicateNum) {
            uniqueNumber.push(arr[i]);
        }
    }
    return uniqueNumber;
}
console.log(removeDuplicates([1, 3, 4, 5, 5, 6, 4])); //1,3,4,5,6
console.log(removeDuplicates([9, 7, 45, 45, 8, 2, 3])); //9,7,45,8,2,3
// console.log(removeDuplicates([1,2,2,3,3,4,4,5,5,6,6]))//1,2,3,4,5,6
// console.log(removeDuplicates([7,7,8,8,9,9,10,20]))//7,8,9,10,20
// Question 6:
//  Find the Second Largest Number in an Array
// Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. *Do not use built-in methods* like sort.
// Requirements:
// - The function should manually find the largest and second largest numbers by iterating through the array.
// - You can use additional variables to keep track of the largest and second largest numbers.
// - Do not use any built-in methods like sort.
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return undefined;
    }
    let largestNum = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            secondLargest = largestNum;
            largestNum = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] !== largestNum) {
            secondLargest === arr[i];
        }
    }
    return secondLargest === -Infinity ? undefined : secondLargest;
}
console.log(findSecondLargest([1, 2, 3, 4, 5])); //4
console.log(findSecondLargest([1, 2, 5, 6, 3])); //5
console.log(findSecondLargest([1, 2, 3, 7, 8])); //7
console.log(findSecondLargest([2, 3, 5, 6, 9])); //6
