//11. Write a `for` loop to generate a list of even numbers from 1 to 50.


const evenNumbers = []; 

for (let i = 2; i <= 50; i += 2) {
    evenNumbers.push(i);
}

console.log("Even numbers from 1 to 50:", evenNumbers);

