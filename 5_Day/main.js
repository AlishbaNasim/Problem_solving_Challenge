"use strict";
// // *Question 1: Array Comparison and Manipulation (Updated)*
// // Create a function in TypeScript that takes two arrays of numbers as input. The function should perform the following operations based on the conditions given:
// // 1. *If the lengths of both arrays are the same and all elements are the same:*
// //    - Merge both arrays into one array.
// //    - Multiply all elements of the merged array to produce a single number.
// //    - Return the product.
// // 2. *If the lengths of both arrays are different:*
// //    - Merge both arrays into one array.
// //    - Return the middle element of the merged array.
// // 3. *If the lengths of both arrays are the same but elements are different:*
// //    - Make the elements of both arrays the same by adding corresponding elements.
// //    - Merge the arrays.
// //    - Return the sum of the elements of the resulting merged array.
function arrayComparison(arr1, arr2) {
    let multipled_array = [];
    let middle_array = [];
    let merged_array = [];
    for (let i = 0; i < arr1.length; i++) {
        let multiply = 1;
        //Condition no:1 If the lengths of both arrays are the same and all elements are the same
        if (arr1[i] === arr2[i]) {
            //merged both array if lenght is same
            multipled_array = [...arr1, ...arr2];
            //if all element is also same
            for (let a = 0; a < multipled_array.length; a++) {
                //multiple array if element is also same
                multiply *= multipled_array[a];
            }
            // return the product
            return multiply;
        }
        // Condition no :2 *If the lengths of both arrays are different:*
        else if (arr1[i] !== arr2[i]) {
            //merged both array
            middle_array = [...arr1, ...arr2];
            //calculate middle index
            let largest_num = Math.floor(middle_array.length / 2);
            //return the product
            return middle_array[largest_num];
        } //Condition no: 3 *If the lengths of both arrays are the same but elements are different:*
        else if (arr1.length === arr2.length) {
            let sum = 0;
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    //make both array crosspending
                    arr1[i] = arr2[i];
                }
                //merged the array
                merged_array = [...arr1, ...arr2];
            }
            //return the sum of element
            for (let b = 0; b < merged_array.length; b++) {
                sum += merged_array[b];
            }
            return sum;
        }
    }
}
console.log(arrayComparison([1, 2, 3], [1, 2, 3])); //36
console.log(arrayComparison([1, 2, 3], [3, 4, 5, 6])); //3
console.log(arrayComparison([7, 8], [6, 5])); //6
// *Question 2: Extract First Letters from String Array*
// Create a function in TypeScript that takes an array of strings (names) as input. The function should return a new array containing the first letter of each name.
// *Hints:*
// - Iterate through each name in the array.
// - Extract the first letter of each name without using built-in methods.
// *Example:*
// typescript
// function extractFirstLetters(names: string[]): string[] {
//     // Your implementation here
// }
// Example Test Case
// extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"]) should output ["A", "B", "C", "D", "E"]
function extractFirstLetters(names) {
    let my_name = [];
    for (let i = 0; i < names.length; i++)
        my_name.push(names[i][0]);
    return my_name;
}
console.log(extractFirstLetters(["Alice", "Boby", "Charlie", "Alishba", "Mano"])); //a,b,c,a,m
