//4. Implement a function that prints each string from a given array of strings in uppercase.


function UppercaseStrings(arr) {
    arr.forEach(str => {
        console.log(str.toUpperCase());
    });
}

// Example usage
const str = ['hello', 'world', 'javascript', 'is', 'awesome'];
UppercaseStrings(str);
