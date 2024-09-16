//1. Write a program to find the sum of all elements in an array.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalSum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); 
console.log(`The sum of all elements in the array is ${totalSum}.`);