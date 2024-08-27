// ### Question 1: *Generate Fibonacci Sequence*
// Write a function generateFibonacci(n: number): number[] that generates and returns the first n numbers of the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

// *Hint:* Use a loop or recursion to build the sequence.

// *Example:*
// typescript
// generateFibonacci(5); // Output: [0, 1, 1, 2, 3]
// generateFibonacci(7); // Output: [0, 1, 1, 2, 3, 5, 8]


// function generateFibonacci(n:number):number[]{
//     let fibsequence:number[]=[0,1]
//     for(let i =2;i<n;i++){
//         fibsequence[i] = fibsequence[i - 1] + fibsequence[i - 2];
//     }
//     return fibsequence
// }

// console.log(generateFibonacci(5)) // Output: [0, 1, 1, 2, 3]
// console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
// console.log(generateFibonacci(6)); // Output:[ 0, 1, 1, 2, 3, 5 ]
// console.log(generateFibonacci(3)); // Output: [0, 1, 1,]
// console.log(generateFibonacci(4)); // Output: [ 0, 1, 1, 2 ]


// ### Question 2: *Replace Vowels with Asterisks*
// Write a function replaceVowels(str: string): string that takes a string str and returns a new string where all vowels (a, e, i, o, u) are replaced with asterisks (*). The function should be case-insensitive.

// *Hint:* You can use a loop or a regular expression to find and replace vowels.

// *Example:*
// typescript
// replaceVowels('Hello World'); // Output: 'H*ll* W*rld'
// replaceVowels('TypeScript');  // Output: 'Typ*Scr*pt'

function replaceVowels(str: string): string {
    let vowels = ''
    for (let i = 0; i < str.length; i++) {
        if ('aeiou'.includes(str[i])) {
            vowels += '*'
        } else {
            vowels += str[i]
        }
    } return vowels
}


console.log(replaceVowels('Hello World')); // Output: 'H*ll* W*rld'
console.log(replaceVowels('TypeScript'));  // Output: 'Typ*Scr*pt'
console.log(replaceVowels('alishba'));  // Output: '*l*shb*'
console.log(replaceVowels('JavaScript'));  // Output: 'J*v**Scr*pt'


