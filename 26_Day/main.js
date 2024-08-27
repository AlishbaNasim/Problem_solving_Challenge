"use strict";
// ### Question 1: Reverse a Number
// Write a function reverseNumber(n: number): number that takes a positive integer n and returns the number with its digits reversed.
// Example:
// typescript
// reverseNumber(1234); // Output: 4321
// reverseNumber(567);  // Output: 765
// function reverseNumber(n:number):number{
//     let convert = n.toString()
//    let breakNum:string[]=convert.split('')
//    let num:string[]=[]
//    for(let i=breakNum.length-1;i>=0;i--){
//      num.push(breakNum[i])
//    } 
//    let join= num.join('')
//    let result = Number(join)
//    return result
// }
//  console.log(reverseNumber(1234)); // Output: 4321
//  console.log(reverseNumber(567));  // Output: 765
// Question 2: Find the Average of Numbers in a String
// Write a function averageOfNumbersInString(str: string): number that extracts all numbers from a given string, calculates their average, and returns the result.
// Example:
// typescript
// averageOfNumbersInString('The numbers are 12, 15, and 20.'); // Output: 15.666...
// averageOfNumbersInString('No numbers here!'); // Output: NaN
function averageOfNumbersInString(str) {
    let sum = 0;
    let count = 0;
    let averageNum = '';
    for (let i = 0; i < str.length; i++) {
        const res = str[i];
        if (res >= '0' && res <= '9') {
            averageNum += res;
        }
        else {
            if (averageNum !== '') {
                sum += Number(averageNum);
                count++;
                averageNum = '';
            }
        }
    }
    if (averageNum !== '') {
        sum += Number(averageNum);
        count++;
    }
    return count > 0 ? sum / count : NaN;
}
// 03432298059 sardar
console.log(averageOfNumbersInString('The numbers are 12, 15, and 20.')); // Output: 15.666...
console.log(averageOfNumbersInString('No numbers here!')); // Output: NaN
console.log(averageOfNumbersInString('The numbers are 15, 17, 12 and 25.')); // Output: 19
