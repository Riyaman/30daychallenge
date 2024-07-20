// Activity 1
// Task 1
console.log("Create an object represention a book with properties like title, author, and year, and log the oject to the console.")
const book = {
    title: "To Kill a Mockingbird",
    year: 1960,
    auther: "Harper Lee"
}
console.log(book)
// Task 2
console.log("Access and log the title and author properties of the book ojbect")
console.log("Log the title")
console.log("Title: " + book.title)
console.log("Log the author")
console.log("Author: " + book["auther"])
// Activity 2
// Task 3
console.log("Add a method to the book object that returns a string with the book's title author, and log the result of calling this method.")
const book1 = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    getInfo: function () {
        return `${this.title} by ${this.author}`;
    }
};
console.log(book1.getInfo());
// Task 4
console.log("Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updates object.")
const mybook = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 2000,
    getyr: function (year) {
        return mybook.year = 2010
    }
};
console.log(mybook.getyr());
// Activity 3
// Task 5
console.log("Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.")
const library = {
    name: "Library",
    books:[
        { title: "Sherlock holmes", year: 2009, author: "Conan Doyle"},
        { title: "Rich Dad Poor Dad", year: 1997, author: "Robert Kiyosaki, Sharon Lechter" },
        { title:"Atomic Habits", year: 2018, author: "James Clear" }

    ]
}
console.log("Library:", library);
// Task 6
console.log("Access and log the name of the library and the titles of all the books in the library.")
console.log(`Name of Library: ${library.name}`);
library.books.map((b, index)=>{
    console.log(`Book${index+1} title:`, b.title);
})
// Activity 4
// Task 7
console.log("Add a method to the book object that uses the this keyword to return a string with the title and year, and log the result of calling this method.")

console.log(book1.getInfo());
// Activity 5
// Task 8
console.log("Use a for...in loop to iterate over the properties of the book object and log each property and its value.")
for(let property in book){
    if(book.hasOwnProperty(property)){
        console.log(`${property} : ${book[property]}`);
    }
}
// Task 9
console.log("Use object.keys and object.values methods to log all the keys and values of the book object.")
const keys=Object.keys(book);
keys.forEach(key=>{
    console.log("key:" ,key);
})
const values=Object.values(book);
values.forEach(value=>{
    console.log("Value:", value);
})