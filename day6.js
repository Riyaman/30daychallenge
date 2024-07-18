// Activity 1
// Task 1
console.log("Array creation & access")
let arr = [1, 2, 3, 4, 5]
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}
// Task2
console.log("Access first and last elements of array")
console.log(arr[0])
console.log(arr[4])
// activity 2 
// Task 3
console.log(" add a new number by using push at the end of array")
arr.push(6)
console.log(arr)
// Task 4
console.log(" remove last element of the array by using pop")
arr.pop()
console.log(arr)
// Task 5
console.log(" remove first element of the array by using shift")
arr.shift()
console.log(arr)
// Task 6
console.log(" adding last element in the array by using unshift")
arr.unshift(7)
console.log(arr)
// Activity 3
// Task 7
console.log("using Map to create a new array where each number is doubled")
let a = arr.map((arr)=>{
    return doubled = arr * arr
})
console.log(doubled)
// Task 8
console.log("use Filter to create a new array with only even number")
let no = arr.filter((arr)=> {
    return arr % 2 === 0;
})
console.log(no)


// Task 9
console.log("use Reduce to calculate sum of all number")
const sum = arr.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0)
console.log(sum);
console.log("Iterate over array")
let myarray = [34, 54, 43, 43, 55]
myarray.forEach(myarray => {
    console.log(myarray)
});
// Activity 4
// Task 10
console.log("Array creation & access")
let r = [31, 32, 63, 45, 45]
for(let i=0; i<r.length; i++){
    console.log(r[i])
}
// Task 11
console.log("Use the forEach loop to iterate over the array")
let b = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
b.forEach(ele=>{
    console.log(ele);
  })
  
// Activity 5
// task 12
console.log("Create two-dimensional array and log it")
let myar = [[54,64,76,43,75],[45,73,74,23],[45,5,3,75]]
for(let i=0; i<myar.length; i++){
    console.log(myar[i])
}
// Task 13
console.log("Access and log a specific element from the two-dimensional array")
let  = t_d = [[5,36,46,4],[7, 47, 84, 8],[96,98,55]]
console.log(t_d[2][2])