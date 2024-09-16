//4. Write a program to count the number of even and odd numbers in an array



// Sample array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


var evenCount = 0;
var oddCount = 0;


for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    } else {
        
        oddCount++;
    }
}

console.log("Even numbers count: " + evenCount);
console.log("Odd numbers count: " + oddCount);
