//9. Remove the last element from an array and return it.


function removeLastElement(arr) {
    return arr.pop();
}

// Example usage
const array = [10, 20, 30, 40, 50];
const lastElement = removeLastElement(array);
console.log(lastElement); // Output: 50
console.log(array); // Output: [10, 20, 30, 40]
