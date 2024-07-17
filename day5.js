// Activity 1
// Task 1
let num = 0
function checNum(){
    if (num ===0){
        console.log("Number is Zero")
    }
    else if (num%2===0){
        console.log("This number is even")
    }
    else if(num%2!=0){
        console.log("Number is odd number")
    }
    else{
        console.log("You inter invalid number")
    }
}
checNum()
// Task 2
let n = 44
function squ(){
    return result =  n*n
}
squ()
console.log(result)
// Activity 2
// Task 3
const func = function(x, y) {
    if (x>y){
        console.log("X is the  gretter")
    }
    else {
        console.log("Y is the  gretter")
    }
}
  func(55, 77)

// Task 4
const fnc = function (a, b) {
    return info = a + b
}
fnc("janhavi ", "Ganorkar")
console.log(info)
// Activity 3
// Task 5
const sum =(a, b) => {
    sum = a + b
    console.log(sum)
}
// Task 6
const chek = (str) =>{
    if (str.includes("g")){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
chek("lfkejiof")
// Activity 4
// Task 7
function div(num1, num2=7){
    return product = num1 / num2
    
}
div(55,66)
console.log(product)
// Task 8
function greeting(name, age){
    return gret = ("Hello " + `${name}` + " your age is " + `${age}`)
}
greeting("Janhavi", 21)
console.log(gret)