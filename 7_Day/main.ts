// Question 1: OOP Related

// Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
// 1. Display the book details.
// 2. Check if the book is a recent publication (within the last 5 years).
// 3. Change the genre of the book.
// 4. Check if the book's author matches a given author name.

// *Hints:*
// - Use console.log to print book details in the displayDetails method.
// - In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
// - Update the genre property in the changeGenre method.
// - In the isAuthor method, compare the author property with the given author name.

//Make Class
class Book {
    //Add properties
    title:string;
    author:string;
    publicationYear:number;
    genre:string;

    //Make constructor
    constructor(title:string,author:string,publicationYear:number,genre:string){
        this.title=title;
        this.author = author;
        this.publicationYear= publicationYear;
        this.genre= genre;
    }
     // 1. Display the book details.
    displayBook():void{
        console.log(`Title ${this.title}`)
        console.log(`Author ${this.author}`)
        console.log(`PublicationYear ${this.publicationYear}`)
        console.log(`Genre ${this.genre}`)
        
    }
  // 2. Check if the book is a recent publication (within the last 5 years).
    isRecent():boolean{
    const currentYear = new Date().getFullYear()
    return currentYear - this.publicationYear <= 5
    }
// 3. Change the genre of the book.
    changeGenre(newGenre:string):void{
       this.genre = newGenre
    }
// 4. Check if the book's author matches a given author name.
    isAuthor(authorName:string):boolean{
     return this.author == authorName
    }
}

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Novel");

myBook.displayBook();
console.log(myBook.isRecent())
myBook.changeGenre("Classic");
myBook.displayBook();

console.log(myBook.isAuthor("F. Scott Fitzgerald")); // Output: true
console.log(myBook.isAuthor("J.K. Rowling"));//output false

//Question 2: Nested Object with Interfaces

// Create an interface Person that includes properties for name, age, email, phone, and addresses. The addresses property should be an array of objects, each containing street, city, state, and zipcode. Write a function to find the first person living in a specific city and return their name and email.
// 
// *Hints:*
// - Define the Address and Person interfaces with the required properties.
// - Use nested loops to iterate through the people array and each person's addresses array.
// - Check if the city property matches the given city in the function.
// - Return the name and email of the first matching person or undefined if no match is found.

//step :00 make interface with the name is person and nested array addressses  
interface Person{
    name:string,
    age:number,
    phone:number,
    email:string,
    address:[
        {
        street:number,
        city:string,
        state:string,
        zipcode:number
    }
    ]
      }
    
//step:01// Makes function with person and city two arguments
function firstPerson(people:Person[],targetcity :string):{name:string,email:string} | undefined{
    //Step:02 Iterate through the array of people.
   for(const person of people){
   //Step:03 For each person, iterate through their addresses.
    for(const address of person.address){
     //Step:03 Check if any address's city matches the given city.
      if(address.city.toLowerCase() === targetcity.toLowerCase()){
        //Step;04 if city is matches return name and email
        return {name:person.name,email:person.email}
      }
     }
    } //step 05: if its not matches return undefined
    return undefined;
}
const people:Person[]=[
   {
      name:"Alishba",
      age:18,
      phone: 678-789-765,
      email:"alishbanaseem890@gmail.com",
      address:[
           {street: 2,
           city:"karachi",
           state:"sindh",
           zipcode:7898,
        }
      ]
   }
]

const result = firstPerson(people,"Karachi")//output:name:Alishba,Email:alishbanaseem123@gmail.com


if(result){
    console.log(`Name:${result.name},Email:${result.email}`)
}else{
    console.log("not found")
}
const result2 = firstPerson(people,"Islamabad")//output: Not found

if(result2){
    console.log(`Name:${result2.name},Email:${result2.email}`)
}else{
    console.log("not found")
}