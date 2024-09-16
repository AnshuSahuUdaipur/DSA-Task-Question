//7. Write a `while` loop to find the length of a string.


let str = "Hello, world!";
let length = 0;
let index = 0;

while (str[index] !== undefined) {
    length++;
    index++;
}

console.log("The length of the string is: " + length);
