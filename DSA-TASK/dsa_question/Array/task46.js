//2. Determine if all elements in a given array of integers are positive numbers.



function allPositive(arr) {
    return arr.every(num => num > 0);
}


const array1 = [1, 2, 3, 4];
const array2 = [1, -2, 3, 4];

console.log(allPositive(array1));
console.log(allPositive(array2)); 