//3. Given an array of integers, return a new array containing only the even numbers.

function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = getEvenNumbers(array);
console.log(evenNumbers);
