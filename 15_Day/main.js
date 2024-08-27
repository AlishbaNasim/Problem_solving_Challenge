"use strict";
// // ### Question 1: Anagrams
// // *Problem:*
// // Write a TypeScript function areAnagrams(str1: string, str2: string): boolean that checks if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase using all the original letters exactly once.
// // *Hints:*
// // 1. *Normalize Case:*
// //    - Convert both strings to lowercase to ensure that the comparison is case-insensitive.
// //    - Traverse each character of the strings and convert uppercase characters to lowercase.
// // 2. *Count Characters:*
// //    - Use a fixed-size data structure like an array to count the occurrences of each character in both strings. Since we're only dealing with lowercase letters, an array of size 26 (for 'a' to 'z') will suffice.
// //    - Initialize two arrays (or two objects with 26 keys) to keep track of character frequencies for each string.
// // 3. *Compare Character Counts:*
// //    - After populating the frequency arrays for both strings, compare them to determine if they are identical.
// //    - If they match, then the two strings are anagrams; otherwise, they are not.
// // 4. *Edge Cases:*
// //    - Check if the strings have different lengths initially. If they do, they cannot be anagrams.
// //    - Handle empty strings as valid anagrams of each other.
function areAnagrams(str1, str2) {
    // Step:01;Normalize case
    let normalizeStr1 = str1.toLowerCase();
    let normalizeStr2 = str2.toLowerCase();
    //Step:2. *Count Characters:*
    let charCodeAt = new Array(26).fill(0);
    //Trasverse the string
    for (let i = 0; i < normalizeStr1.length; i++) {
        charCodeAt[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        charCodeAt[str2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    // Step:3 *Check if the element is zero return false;
    for (let i = 0; i < charCodeAt.length; i++) {
        if (charCodeAt[i] !== 0) {
            return false;
        }
    }
    // 4. *Edge Cases:*
    if (normalizeStr1.length !== normalizeStr2.length) {
        return false;
    }
    return true;
}
// //TESTING THE FUNCTION
// console.log(areAnagrams('hello', 'world'))//false
// console.log(areAnagrams('listen', 'silent'))//true
// console.log(areAnagrams('The eyes', 'They see'))//true
// console.log(areAnagrams('schoolmaster', 'theclassroom'))//true
// console.log(areAnagrams('typescript', 'javascript'))//false
// console.log(areAnagrams('abc', 'def'))//false
// ### Question 2: Reverse Words in a Sentence
// *Problem:*
// Write a TypeScript function reverseWords(sentence: string): string that reverses the words in a given sentence. For example, if the input is "Hello world", the output should be "world Hello".
// *Hints:*
// 1. *Identify Word Boundaries:*
//    - Traverse the sentence character by character.
//    - Detect the start and end of each word by identifying spaces or the start/end of the string.
// 2. *Extract Words:*
//    - Use indices to keep track of where each word starts and ends.
//    - Build an array of words from these indices by manually copying characters into new strings.
// 3. *Reverse the Order of Words:*
//    - After extracting the words, create a new array to hold them in reverse order.
//    - Iterate through the original array of words from the end to the beginning and insert them into the new array.
// 4. *Reconstruct the Sentence:*
//    - Concatenate the reversed array of words into a single string, ensuring that words are separated by spaces.
// 5. *Edge Cases:*
//     - Handle multiple spaces between words by treating consecutive spaces as single separators.
//     - Consider sentences with leading, trailing, or multiple spaces.
function reverseWords(sentences) {
    // *Identify Word Boundaries:*
    let word = sentences.split(' ');
    // *Reverse the Order of Words:*
    const reverseWords = [];
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWords.push(word[i]);
    }
    // *Reconstruct the Sentence:*
    let resentences = reverseWords.join(' ');
    //return result
    return resentences;
}
const reverse = 'Alishba Naseem';
const result = reverseWords(reverse);
console.log(result);
console.log(reverseWords("Hello world"));
