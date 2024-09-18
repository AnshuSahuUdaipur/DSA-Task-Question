//7. Find the last index of a specific integer in an array. Return -1 if the integer is not found.


function findLastIndex(arr, target) {
    return arr.lastIndexOf(target);
}

const array = [10, 20, 30, 20, 50];
const target = 20;
const lastIndex = findLastIndex(array, target);
console.log(lastIndex); // Output: 3

const missingTarget = 100;
const missingIndex = findLastIndex(array, missingTarget);
console.log(missingIndex); // Output: -1
