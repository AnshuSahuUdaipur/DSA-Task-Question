//8. Given an array of numbers, return a new array with each number squared.

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers);
