
//6. Write a for loop to print the Fibonacci sequence up to a given number of terms.
const n = 10; 

if (n > 0) {
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}