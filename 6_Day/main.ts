// // *Task:*
// // Create a simple calculator that can perform addition, subtraction, multiplication, and division.

// // 1. *Functional Programming Approach:* 
// //    - Write functions for each operation: add, subtract, multiply, and divide.
// //    - Implement a function calculate that takes two numbers and an operation (as a string) and returns the result of the operation.

// // 1. *Functional Programming Approach:* 

function simple_calculator(operation:string,num1:number,num2:number){
    if(operation == "Addition"){
        return num1 + num2
    }else  if(operation == "Subtraction"){
        return num1 - num2
    }else if(operation == "Multiplication"){
        return num1 * num2
    } else if(operation == "Divide"){
        return num1 / num2
    }else {
        console.log("Invalid operation")
    }
}
console.log(simple_calculator("Addition",2,4))//6
console.log(simple_calculator("Subtraction",12,5))//7
console.log(simple_calculator("Multiplication",5,2))//10
console.log(simple_calculator("Divide",9,3))//3


// // 2. *Object-Oriented Programming (OOP) Approach:*
// // - Create a Calculator class with methods for each operation.
// //   - Implement a method calculate in the class that takes two numbers and an operation (as a string) and returns the result of the


class simple_calculator2 {

   add(num1:number,num2:number){
    console.log(num1+ num2)
   }
   sub(num1:number,num2:number){
   console.log(num1 - num2)
   }
   multiply(num1:number,num2:number){
    console.log(num1* num2)
   }
   divide(num1:number,num2:number){
    console.log(num1/num2)
   }

}
const new_calaculator = new simple_calculator2();

new_calaculator.add(2,5);
new_calaculator.sub(6,2);
new_calaculator.multiply(5,3);
new_calaculator.divide(9,5);

// Question 12: Separate Elements by Type

// *Task:*
// Given an array with mixed types of elements, separate them into different arrays based on their type (number, string, boolean).



function separateElement(arr1:any[]):[number[] , string[] , boolean[]]{
    let num1:number[] =[];
    let string:string[]=[];
    let boolean:boolean[]=[];
    for(let i = 0; i < arr1.length; i++){
        if(typeof arr1[i]  === "number"){
           num1.push(arr1[i])
        }else if(typeof arr1[i] === "string"){
            string.push(arr1[i])
        }else if (typeof arr1[i] === "boolean"){
            boolean.push(arr1[i])
        }
    }
    return [num1 , string , boolean]
}
let multiple_types=[12,"alishba", true,78,false,"mano"]
console.log(separateElement(multiple_types))