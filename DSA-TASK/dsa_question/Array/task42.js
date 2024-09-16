//10. Write a program to remove duplicates from an array.


// Define an array with duplicates
var array = [1, 2,5,6, 2, 3, 4,,7,2,334,4,5, 4, 5, 6, 6];


var uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);

console.log("Array with duplicates removed:", uniqueArray);
