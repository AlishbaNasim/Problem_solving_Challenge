// ### Question:1 *Sum of Even Numbers from Multiple Arrays*

// *Problem Statement:*
// You are given three arrays of integers. Write a function sumEvenNumbers(arr1: number[], arr2: number[], arr3: number[]): number[] that calculates the sum of all even numbers in each array. The function should return a new array containing the sum of even numbers from each of the three arrays.

// *Example:*
// typescript
// sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]) // [6, 14, 22]
// sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30]) // [12, 0, 60]
// sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12]) // [0, 6, 30]


// *Hint:*
// - Iterate through each array and sum up only the even numbers.
// - Store the sum for each array in a new array.
// - Return the new array containing the sums


// function sumEvenNumbers(arr1:number[], arr2:number[],arr3:number[]):number[]{
//     //Initalize sum of array
//     let sum1=0;
//     let sum2=0;
//     let sum3 =0;
//     //loop for arr1
//     for(let num of arr1){
//         if(num % 2 === 0){
//             sum1 += num
//         }
//     }
//     //loop for arr2
//     for(let num of arr2){
//         if(num % 2 === 0){
//             sum2 += num
//         }
//     }

//     //loop for arr3
//     for(let num of arr3){
//         if(num % 2 === 0){
//             sum3 += num
//         }
//     }
//    //return sum of even number
//     return  [sum1 , sum2  , sum3]
// }

// //testing the fumction with multiple condition.
// console.log(sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12])) // [6, 14, 22]
// console.log(sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30])) // [12, 0, 60]
// console.log(sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12])) // [0, 6, 30]

// ### Question:2 *Concatenate Strings from Arrays*

// *Problem Statement:*
// You are given three arrays of strings. Write a function concatenateFirstLetters(arr1: string[], arr2: string[], arr3: string[]): string[] that extracts the first letter of each string in the arrays, concatenates these letters for each array, and returns a new array containing the concatenated strings.

// *Example:*
// typescript
// concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"])
// // ["abc", "def", "ghk"]

// concatenateFirstLetters(["sun", "moon"], ["star", "planet"], ["galaxy", "comet"])
// // ["sm", "sp", "gc"]

// concatenateFirstLetters(["table", "chair", "lamp"], ["carpet", "curtain", "sofa"], ["desk", "shelf", "cabinet"])
// // ["tcl", "ccs", "dsc"]


// *Hint:*
// - Iterate through each string in the arrays, extract the first letter, and concatenate them.
// - Store the concatenated result for each array in a new array.
// - Return the new array containing the concatenated strings.


function concatenateFirstLetters(arr1:string[],arr2:string[],arr3:string[]):string[]{
    //Initalize variable to store first letter
    let result :string[]=[]
    //For loop no:1
    let concatenatestr1 = ''
    //iterate arr1;
    for(let words of arr1){
        concatenatestr1 += words[0]
    }
    //push concatenatestr1 in result
    result.push(concatenatestr1)
    //For loop no:2
    let concatenatestr2 = ''
    //iterate arr1;
    for(let words of arr2){
        concatenatestr2 += words[0]
    }//push concatenatestr2 in result
    result.push(concatenatestr2)
    //For loop no:3
    let concatenatestr3 = ''
    //iterate arr1;
    for(let words of arr3){
        concatenatestr3 += words[0]
    }//push concatenatestr3 in result
    result.push(concatenatestr3)
/// return result
    return result
  
}
console.log(concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"]))
// // ["abc", "def", "ghk"]

console.log(concatenateFirstLetters(["sun", "moon"], ["star", "planet"], ["galaxy", "comet"]))
// // ["sm", "sp", "gc"]

console.log(concatenateFirstLetters(["table", "chair", "lamp"], ["carpet", "curtain", "sofa"], ["desk", "shelf", "cabinet"]))
// // ["tcl", "ccs", "dsc"]