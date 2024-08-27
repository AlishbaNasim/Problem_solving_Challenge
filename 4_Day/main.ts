// // Question 7: Find Duplicate Numbers in an Array
// // *Description:*
// // Write a TypeScript function that takes an array of numbers as input and returns a new array containing only 
// //the duplicate numbers from the original array. If there are no duplicates, return an empty array.

function findDuplicates(num:number[]){
    let dupliNum : {[key:number]:number}= [];
    for (let i = 0 ; i < num.length ; i++){
        let result = num[i]
        if(dupliNum[result] === undefined){
            dupliNum[result]=1;
        }else{
            dupliNum[result]++
        }
    }
        let duplicate:number[]=[]

       for(let num in dupliNum) {
        if(dupliNum[num]>1){
            duplicate.push(Number(num))
        }
       }

return duplicate;
}
console.log(findDuplicates([1,2,3,4,4,5,6,7,7]))//[4,7]
console.log(findDuplicates([8,8,3,3,4,5,6,7]))//[3,8]
console.log(findDuplicates([1,1,2,2,3,3,4,4,5,5,6,6,]))//[1,2,3,4,5,6]


// Question 8: Filter Students with Marks Greater than 80
// *Description:*
// Create an array of objects where each object represents a student with properties name, age, and marks. Write a function that filters and prints the data of students who have marks greater than 80.
//make interface
interface Student{
    name:string,
    age:number,
    marks:number
}
const student:Student[]=[
    {name:"alishba",age:14,marks:75},
    {name:"sana",age:13,marks:80},
    {name:"atiqa",age:12,marks:95},
    {name:"areeba",age:15,marks:85},
]
function printStudentMarks(student:Student[]):Student[]{
    const aboveEighty:Student[] = [];
     for(let i = 0; i < student.length; i++){
        if(student[i].marks >  80){
           aboveEighty.push(student[i])
        }
     }
     return aboveEighty;
}
const aboveEighty = printStudentMarks(student)
// console.log(printStudentMarks(student1))
// console.log(aboveEighty)
console.log("Students with marks greater than 80:");

for(const student of aboveEighty){
    console.log(`Name:${student.name}, Age:${student.age}, Marks: ${student.marks}`)
}
