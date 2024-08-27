"use strict";
// // *Find the Maximum Sum from Two Arrays*
// // *Problem Statement:*  
// // Create a function findMaxSum that accepts two arrays of numbers. The function should determine the maximum number from each array and return the sum of these two maximum numbers.
// // *Example:*  
// // typescript
// // findMaxSum([3, 5, 7, 2, 8], [10, 20, 30, 5]); // Output: 38 (8 from the first array + 30 from the second array)
// // findMaxSum([1, 2, 3], [4, 5, 6]); // Output: 9 (3 from the first array + 6 from the second array)
// // *Hints:*  
// // 1. *Step 1: Write a Helper Function to Find the Maximum Value in an Array*
// //    - Start by creating a function findMax that takes an array of numbers as its parameter.
// //    - Initialize a variable (e.g., let max = array[0];) to store the first element of the array, assuming it to be the maximum.
// //    - Use a for loop to iterate over the remaining elements of the array.
// //    - During each iteration, compare the current element with max. If the current element is greater, update max.
// //    - After the loop, max will hold the largest number in the array. Return this value.
// // 2. *Step 2: Apply the Helper Function to Both Arrays*
// //    - Use the findMax function to find the maximum value in both input arrays.
// //    - Store these maximum values in two separate variables.
// // 3. *Step 3: Sum the Maximum Values*
// //    - Calculate the sum of the two maximum values obtained from the arrays.
// //    - Return the final sum.
// // 4. *Step 4: Test with Multiple Scenarios*
// //    - Test the function with different arrays to ensure it correctly finds the maximum values and sums them.
// // By following these steps, students will have a clear path to solving the problem, allowing them to build their understanding of both array traversal and function utilization in TypeScript.
// //step 01:
// function findMax(array: number[]): number {
//     //initalize variable
//     let max = array[0]
//     /// use loop to iiterate
//     for (let i = 1; i < array.length; i++) {
//         //compare current elment
//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//     return max;
// }
// // Step:02
// //find max value
// function findMaxSum(array1: number[], array2: number[]): number {
//     let max1 = findMax(array1)
//     let max2 = findMax(array2)
//     //step :03 calculate the sum
//     let sum: number = max1 + max2
//     return sum
// }
// //check with multiple function
// console.log(findMaxSum([1, 2, 4, 6, 8], [12, 6, 4, 9, 5]))//Output: 20 (8 from the first array + 12 from the second array)
// console.log(findMaxSum([1, 2, 3], [4, 5, 6])); // Output: 9 (3 from the first array + 6 from the second array)
// console.log(findMaxSum([3, 5, 7, 2, 8], [10, 20, 30, 5])); // Output: 38 (8 from the first array + 30 from the second array)
// console.log(findMaxSum([5, 7, 3], [4, 5, 6])); // Output: 13 (7 from the first array + 6 from the second array)
// console.log(findMaxSum([1, 2, 3], [1, 4, 6])); // Output: 9 (3 from the first array + 6 from the second array)
// console.log(findMaxSum([9, 6, 3], [4, 5, 6])); // Output: 15 (9 from the first array + 6 from the second array)
// ### Question 2: *Check if a String is a Palindrome*
// *Problem Statement:*  
// Write a function isPalindrome that takes a string as input and checks if it reads the same backward as forward. The function should return true if the string is a palindrome and false otherwise.
// *Example:*  
// typescript
// isPalindrome("madam"); // Output: true
// isPalindrome("hello"); // Output: false
// *Hints:*  
// 1. *Step 1: Normalize the String*
//    - Convert the string to lowercase to handle case sensitivity (str = str.toLowerCase();).
//    - If necessary, remove non-alphanumeric characters (e.g., spaces, punctuation) to focus on the actual content.
// 2. *Step 2: Use Two-Pointer Technique*
//    - Initialize two pointers: one at the start of the string (let left = 0;) and one at the end (let right = str.length - 1;).
//    - Use a while loop to compare characters at these pointers. Continue looping until the two pointers meet in the middle.
//    - If at any point the characters at left and right pointers do not match, return false.
// 3. *Step 3: Complete the Loop*
//    - If the loop completes without finding a mismatch, the string is a palindrome. Return true.
// 4. *Step 4: Test with Various Strings*
//    - Test the function with both palindromes and non-palindromes to verify that it works as expected.
function isPalindrome(str) {
    // Step 1: Normalize the String
    str = str.toLowerCase();
    // Remove non-alphanumeric characters
    let result = '';
    // Using a loop to iterate over the string
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            result += char;
        }
    }
    // Step 2: Use Two-Pointer Technique
    let left = 0;
    let right = result.length - 1;
    // Use a while loop to compare characters
    while (left < right) {
        if (result[left] !== result[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }
    // Step 3: Complete the Loop
    return true; // Is a palindrome
}
// Testing the function with various words
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
console.log(isPalindrome("world")); // Output: false
console.log(isPalindrome("radar")); // Output: true
