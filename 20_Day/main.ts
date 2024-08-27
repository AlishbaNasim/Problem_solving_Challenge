// ### Question 1: Check for Prime Number
// *Problem:*  
// Write a TypeScript function that takes a positive integer as input and checks whether it is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself. If the number is prime, return true; otherwise, return false.

// *Hint:*  
// - Use a loop to check divisibility from 2 up to the square root of the number.
// - If the number is divisible by any of these, it is not prime.

// typescript


// function isPrime(num: number): boolean {
//     //Check the num is less than 1 so it is not prime the function return false immediately.
//     if(num <= 1)return false;
//     //loop strat from 2 bcz 2 is smallest prime number 
//    for(let i =2 ; i< num;i++){
//     //check inside the loop if num is divisible by  i and equal to 0 then function return 0
//     if(num % i === 0){
//        return false
//     }
//    }
//    return true;
// }
// //testing the function..
// console.log(isPrime(2))//true
// console.log(isPrime(36))//false
// console.log(isPrime(3))//true
// console.log(isPrime(8))//false
// console.log(isPrime(5))//true




// ### Question 2: Reverse a Number
// *Problem:*  
// Write a TypeScript function that takes a number as input and returns the number with its digits reversed. For example, if the input is 1234, the output should be 4321.

// *Hint:*  
// - Convert the number to a string, reverse the string, and then convert it back to a number.

// typescript


function reverseNumber(num: number): number {
    //Convert num into string
    let num2=num.toString()
    //firstly break the number
    let breakNumber:string[]=num2.split('')
    //make varibale to store new data
    let num1:string[]=[]
    //pass loop topush the break num in new variable
    for(let i=breakNumber.length -1;i>= 0;i--){
      num1.push(breakNumber[i])
    }
    //reconstrct the reverse number
    let rejoin :string=num1.join('')
    //the final result  that show the string data type change into number
    let result = Number(rejoin)
    //return the result
    return result
}
//Testing the function
console.log(reverseNumber(1234))//OUTPUT:4321
console.log(reverseNumber(4321))//OUTPUT:1234
console.log(reverseNumber(9876))//OUTPUT:6789
console.log(reverseNumber(6789))//OUTPUT:9876



