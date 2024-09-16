//6. Write a program to sort an array in ascending order.


var numbers = [5, 3, 8, 1, 2, 7, 4, 6];
numbers.sort(function(a, b) {
    return a - b;
});

console.log("Sorted array in  assending :", numbers);
