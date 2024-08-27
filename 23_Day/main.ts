// Question 1: Calculate the Factorial of a Number
// Task: Write a function calculateFactorial that takes a number as input and returns its factorial.

// Hint: Factorial means multiplying a number by all positive integers less than it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function calculateFactorial(num1:number):number{
//     let factorial = 1;
//     for(let i =1;i<= num1;i++){
//         factorial *= i
//     }
//     return factorial
// }
// console.log(calculateFactorial(8))//Output:40320
// console.log(calculateFactorial(5))//Output:120


// ### Question 2: Convert a Number to Binary (Without Using Built-in Functions)
// Task: Write a function convertToBinary that takes a number as input and converts it into its binary form.

// Hint: Repeatedly divide the number by 2 and note down the remainder. Join the remainders in reverse order to get the binary representation.



function convertToBinary(num2: number): string {
  let binary = ''
  if (num2 === 0) return '0'
  while (num2 > 0) {
    let reminder = num2 % 2
    binary = reminder + binary
    num2 = num2 >> 1

  }
  return binary

}
console.log(convertToBinary(3))//output 11
console.log(convertToBinary(5))//output 101
console.log(convertToBinary(2))//output 10

