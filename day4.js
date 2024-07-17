// Activity 1
// Task 1
for (let i=1; i<11; i++){
    console.log(i)
}

// Task 2
let n = 5
for (let i=1; i<11; i++){
    console.log("5*" + i + "= " + i*n)
}
// Activity 2
// Task 3
 let sum =0
 let i = 1;
 while (i <= 10) {
     i += 1;
     sum +=1
    }
    console.log(sum);

// Task 4
let j = 10;
while (j >= 1) {
    console.log(j);
    j -= 1;
}
// Activity 3
// Task 5
let y=1
do{
    console.log(y)
    y++
} while(y<=5)
// Task 6 *Factorial Calculate
let a = 5
let f = 1
if (a>1){
    do{
        f=f*a;
        a--;
        console.log(f)
    } while(a>1)
}
// Task 7
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.write( "* ")
    
    }
    document.write("<br>")
}
