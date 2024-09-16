//8. Write a `while` loop to generate the Fibonacci sequence up to a given number.


let limit = 100; 
let a = 0; 
let b = 1; 

console.log("Fibonacci sequence up to " + limit + ":");

while (a <= limit) {
    console.log(a); 
    let next = a + b; 
    a = b; 
    b = next; 
}