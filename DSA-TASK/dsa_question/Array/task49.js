//5. Find the index of the first occurrence of a specific integer in an array. Return -1 if the integer is not found.


function findIndex(arr, target) {
    return arr.indexOf(target);
}


const array = [10, 20, 30, 40, 50];
const target = 30;
const index = findIndex(array, target);
console.log(index); 

const missing = 100;
const missingIndex = findIndex(array, missing);
console.log(missingIndex); // Output: -1
