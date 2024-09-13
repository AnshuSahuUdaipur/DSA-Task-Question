//12. Write a `for` loop to print all prime numbers between 1 and 50.


for (let num = 2; num <= 50; num++) {
    let isPrime = true; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false; 
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}