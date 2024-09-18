//. Add a new element to the end of an array and return the new length of the array.


function addElement(arr, element) {
    return arr.push(element);
}

const array = [1, 2, 3];
const Length = addElement(array, 4);
console.log(Length); 
console.log(array); 
