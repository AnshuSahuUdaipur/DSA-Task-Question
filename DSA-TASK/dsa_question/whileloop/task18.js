//6. Write a `while` loop to reverse a number.

let num = 12345; 
let reversed = 0;

while (num > 0) {
    let lastDigit = num % 10; 
    reversed = (reversed * 10) + lastDigit; 
    num = Math.floor(num / 10);
}

console.log("The reversed number is: " + reversed);
