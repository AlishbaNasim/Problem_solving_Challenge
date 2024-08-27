// ### Question 1: Sum of an Array
// *Instructions:*
// 1. Write a function named sumArray that takes an array of numbers as input.
// 2. The function should return the sum of all numbers in the array.
// 3. Ensure your function works correctly by testing it with different inputs.
// *Example:*
// - Input: [1, 2, 3, 4, 5]
// - Output: 15

//1:
function sumArray(arr:number[]){
    console.log(arr)
     let sum = 0;
     for (let i = 0; i < arr.length; i++) {
         sum += arr[i];
         
     }
     return sum;
  }
 console.log(sumArray([1,2,3,4,5]))//15
 console.log(sumArray([4,5,6,7,8]))//30
 console.log(sumArray([9,8,2,5,6,1]))//31
 console.log(sumArray([2,7,8,9,5,4]))//35
 
 
 // Question 3: Reverse a String
 // Instructions:
 
 // Write a function named reverseString that takes a string as input.
 // The function should return the reversed version of the input string.
 // Ensure your function works correctly by testing it with different inputs.
 // Example:
 // Input: "hello"
 // Output: "olleh"
 
 function reverseString(name:string){
     //1:break the word into letter
    let word = name.split('')
    //02:reverse the words 
    word.reverse();
    //03:join the word back to string
    let wordStr = word.join('')
    //04:now retrun the code 
    return wordStr
 }
 console.log(reverseString("hello"))//olleh
 console.log(reverseString("alishba"))//abhsila
 console.log(reverseString("world"))//dlrow
 console.log(reverseString("typescript"))//tpircsepyt
 
 
 