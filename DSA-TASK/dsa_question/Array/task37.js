//2. Write a program to find the largest element in an array.



// Define an array of numbers
const numbers = [10, 45, 5,2, , 88,6743, 89, 234, 78, 56];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log(`The largest Number in the array is ${largest}.`);
