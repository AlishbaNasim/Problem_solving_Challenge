"use strict";
// *Problem Statement:*
// Given an array of integers, find the maximum difference between any two elements in the array. The difference should be calculated as difference = arr[j] - arr[i] where j > i.
// *Example:*
// typescript
// Input: [2, 7, 9, 5, 1, 3, 5]
// Output: 7
// Explanation: The maximum difference is between 9 and 2, where 9 - 2 = 7.
// *Hint:*  
// Iterate through the array, keeping track of the minimum value encountered so far. Calculate the difference between the current element and the minimum value and update the maximum difference accordingly.
// ---
function findMaximumDifference(arr) {
    let difference = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) { //j is always start after i element
            if (arr[j] > arr[i]) {
                let currentDifference = arr[j] - arr[i];
                //check if currentdifference is greater than difference then do both same
                if (currentDifference > difference) {
                    difference = currentDifference;
                }
            }
        }
    }
    return difference;
}
// console.log(findMaximumDifference([2, 7, 9, 5, 1, 3, 5]))// Output is 7 
// // Explanation: The maximum difference is between 9 and 2, where 9 - 2 = 7. 
// console.log(findMaximumDifference([ 7, 1,2,3, 5]))// Output is 4
// // Explanation: The maximum difference is between 7 and 3, where 7 - 3 = 4.
// console.log(findMaximumDifference([4, 5, 4, 3, 5]))// Output is 2
// // Explanation: The maximum difference is between 5 and 3, where 5 - 3 = 2.
// ### Question 2: String Character Frequency
// *Problem Statement:*
// Write a function that takes a string as input and returns an object where the keys are characters and the values are the frequency of those characters in the string.
// *Example:*
// typescript
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
// *Hint:*  
// Use an object to store the frequency of each character. Iterate over the string and update the count for each character
function stringCharacterFrequency(str) {
    str = str.toLowerCase();
    let character = {};
    for (let i = 0; i < str.length; i++) {
        let count = str[i];
        if (character[count]) {
            character[count]++; //If the character already exists, then increase its count.
        }
        else {
            character[count] = 1; //If the character is not  exists, then add it.
        }
    }
    return character;
}
console.log(stringCharacterFrequency("Hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
console.log(stringCharacterFrequency("Alishba")); // Output: { a: 2, l: 1, i: 1, s: 1,h:1,b:1 }
console.log(stringCharacterFrequency("Typescript")); // Output: { t: 2, y: 1, p: 2, e: 1,s:1,c:1,r:1,i:1,p:1 }
