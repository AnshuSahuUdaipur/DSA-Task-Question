//Write a `for` loop to sum all elements in a 2D array.


const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let sum = 0;

for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        sum += array2D[i][j];
    }
}

console.log("The sum of all elements in the 2D array is:", sum);
