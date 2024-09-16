//1. Write a program to add all prime numbers between 1 and 50.



let totalSum = 0;


for (let num = 1; num <= 50; num++) {
    
    if (num > 1) {  
        let isPrime = true;
     
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            totalSum += num;
        }
    }
}


console.log(`The sum of all prime numbers between 1 and 50 is ${totalSum}.`);
