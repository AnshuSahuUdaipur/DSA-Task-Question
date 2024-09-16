//14. Write a program to find the intersection of two arrays.



const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const set1 = new Set(array1);
const ans = array2.filter(item => set1.has(item));

console.log("Intersection of the two arrays:", ans);
