//9. Write a `for` loop to find the maximum number in an array of integers.

const numbers = [3, 5, 7, 2, 8, 1, 4]; //
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("The maximum number is:", max);
