//12. Write a `while` loop to calculate the sum of all digits in a number.


let num = 12345;
let sum = 0;

while (num > 0) {
    let digit = num % 10; 
    sum += digit; 
    num = Math.floor(num / 10);
}

console.log("The sum of all digits is: " + sum);
