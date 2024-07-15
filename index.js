// Activity 1
// Task 1
let num = -3
if (num < 0) {
    console.log(num + " Number is negative")
}
else if (num === 0) {
    console.log("Number is Zero")
}
else if (num > 0) {
    console.log("Number is Positive")
}
else {
    console.log("Invalid Number you Enter")
}
// Task 2
let Age = 22
if (Age === 0 || Age < 0) {
    console.log("Invalid Age you Enter")
}
else if (Age > 18) {
    console.log("You can drive a car")
}
else {
    console.log("You can not drive a car")
}
// Activity 2
// Task 3
let a = 64
let b = 78
let c = 90
if (a < b) {
    if (b < c) {
        console.log("C is largest")
    }
    else if (b > c) {
        console.log("B is largest")
    }
}
else if (a > b) {
    if (a > c) {
        console.log("a is largest")
    }
}
// Acitivity 3
// Task 4
let day = 6
switch (day) {
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Friday")
        break
    case 7:
        console.log("Saturday")
        break
    default:
        console.log("Invalid")
}
// Task 5
let grade = "B"
switch (grade) {
    case "A":
        console.log("Very Good")
        break
    case "B":
        console.log("Good")
        break
    case "C":
        console.log("Ok-Ok")
        break
    case "D":
        console.log("Bad")
        break
    case "E":
        console.log("Very Bad")
        break
    case "F":
        console.log("Fail")
    default:
        console.log("Invalid Grade")
}
// Acitivity 4
// Task 6
let value = 47
let expr = value %2==0 ? "This is even" : "This is odd"
console.log(expr)
// Activity 5
// Task 7
let year = 2008
if (year % 4 === 0 || year % 400 === 0) {
    if (year % 100 != 0) {
        console.log("year is leap year")
    }
}
else {
    console.log("Year is not leap year")
}