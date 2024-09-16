//11. Write a `while` loop to find the first 10 multiples of a given number.


let number = 7;
let count = 1;
let multiple = number;
while (count <= 10) {
    console.log(multiple); 
    multiple = number * (count + 1);
    count++;
}