// Question 19: Implement a Basic Counter

// Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:

// increment(): void - Increments the counter by 1.
// decrement(): void - Decrements the counter by 1.
// getValue(): number - Returns the current value of the counter.
// Example Usage:

// const counter = new Counter();
// counter.increment();
// counter.increment();
// console.log(counter.getValue()); // Output: 2
// counter.decrement();
// console.log(counter.getValue()); // Output: 1

class Counter{
    private value:number;

    //Make constructor and innitalize  value 0 bcz when thenew instance of classthen its  created is value is 0
    constructor(){
        this.value =0;
    }
   // Increments the counter by 1
    increment(): void {
         this.value++;
    }

   // Decrements the counter by 1.
    decrement(): void{
        this.value--;
    }
    //Returns the current value of the counter.
    getValue(): number{
        return this.value
    }
   
}
// // //Make new instance of class
// // const result = new Counter();
// // //getdata by different function performing
// // result.increment();
// // console.log(result.getValue());//Output:1
// // result.decrement();
// // console.log(result.getValue());//Output:0
// // result.decrement();//-1
// // result.decrement();//-2
// // result.increment();//-1
// // console.log(result.getValue());//Output:-1
// // result.increment();//0
// // result.increment();//1
// // console.log(result.getValue());//Output:1




// Question 20: Implement a Simple Student Record

// Problem Statement: Create a TypeScript class Student to manage a student's name and grade. The class should have the following methods:

// setName(name: string): void - Sets the student's name.
// setGrade(grade: number): void - Sets the student's grade.
// getRecord(): { name: string; grade: number } - Returns an object with the student's name and grade.
// Example Usage:

// const student = new Student();
// student.setName("Alice");
// student.setGrade(90);
// console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }


class Student{
 //define 2 properties in student class
    private name:string;
    private grade:number;
    //make constructor to inatize value name ,grade
    constructor(){
        this.name="" //initalize empty string array
        this.grade=0//initalize 0 value
    }
       //Sets the student's name.
    setName(name1: string): void{
        this.name = name1
    }
    //Sets the student's grade.
    setGrade(grade1: number): void{
        this.grade= grade1
    }
   //Returns an object with the student's name and grade.
    getRecord(): { name: string; grade: number }{
       return {name:this.name,grade:this.grade}
}
}
//make new instance of class student
const result = new Student();
//print the result
result.setName("Bob")
result.setGrade(1)
console.log(result.getRecord())

