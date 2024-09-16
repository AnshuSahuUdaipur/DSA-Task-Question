//2. Write a `while` loop to find the factorial of a given number `n`.


let n = 67;
let factorial = 1;
let i = 1;

while (i <= n) {
    factorial *= i;
    i++; 
}

console.log("The factorial of " + n + " is: " + factorial);
