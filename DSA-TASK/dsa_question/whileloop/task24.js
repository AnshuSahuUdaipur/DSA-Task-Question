//13. Write a `while` loop to determine if a given number is a palindrome.


let num = 12321; // Replace this with the number you want to check
let originalNum = num; // Store the original number
let reversedNum = 0;

// Reverse the number
while (num > 0) {
    let digit = num % 10; // Get the last digit
    reversedNum = (reversedNum * 10) + digit; // Build the reversed number
    num = Math.floor(num / 10); // Remove the last digit from the number
}

// Check if the original number is equal to the reversed number
if (originalNum === reversedNum) {
    console.log(originalNum + " is a palindrome.");
} else {
    console.log(originalNum + " is not a palindrome.");
}
