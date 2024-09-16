//15. Write a `for` loop to calculate the sum of squares of numbers from 1 to `n`


let n = 10;
let sumOfSquares = 0;

for (let i = 1; i <= n; i++) {
    sumOfSquares += i * i;
}

console.log("The sum of squares from 1 to " + n + " is: " + sumOfSquares);
