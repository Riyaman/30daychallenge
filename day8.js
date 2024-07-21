// Activity 1: Template literals
// Task 1 String Interpolation:
console.log("Task 1 String Interpolation:")
const name = "janhavi"
const age = 21
console.log(`hello ${name} your age is: ${age}`)
// Task 2 Multiline Strings:
console.log("Task 2 Multiline Strings:")
console.log(`Codding is easy just do practice everyday`)
// Activity 2: Destructuring 
// Tassk 3 Destructuring first & second elements
console.log("Tassk 3 Destructuring first & second elements")
const array = ["Apple", "Banana", "Cherry", "Mango", "Grapes"];
const [fruit1, fruit2] = array;
console.log(fruit1, fruit2);
// Task 4 Destructuring extration author and titile
console.log("Task 4 Destructuring extration author and titile")
const book = {
    title: "To Kill a Mockingbird",
    year: 1960,
    author: "Harper Lee"
}
const {title, author} = book
console.log(`Title: ${title}, Author: ${author}`)
// Activity 3: Spread and Rest Operator
// Task 5 Creating new array using Spead
console.log("Task 5 Using Spead creating new array")
const myarr = [32, 54, 86, 97, 44, 22]
const numbers = [1, 2, 3];
const copy = [...myarr, ...numbers]; 
console.log(copy)
// Task 6
const sum = function(){

}
// Activity 4: Default Param
// Task 7
console.log("Task 7 Default parm")
const num = function(num1, num2=1){

    return val = num1*num2
};
num(44)
console.log(val)
// Activity 5
// Task 8 Use enhanced object literals to create an object with methods and properties, and log the object to the console.
console.log("Task 8 Enhanced litrals")
const myobj = {
    name: "samiksha",
    age: 34,
    subject: "python",
    ["city"]: "varanasi"
}
myobj.info = function(){
    console.log(`Hello, my name is ${this.name}`);
}
myobj.info()
console.log(myobj)
// Task 9 Creating Object with computed property
console.log("Task 9 Computed property")
const key = "name"
const value = "Kritika"
const user = {
    [key]: value
}
console.log(user)