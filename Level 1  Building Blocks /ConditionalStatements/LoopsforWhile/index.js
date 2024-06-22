for (let i = 1; i <= 10; i++) {
     console.log(i);
 }


 // Create a program that calculates the factorial of a number.
 function factorial(n) {
     if (n === 0 || n === 1) {
         return 1;
     } else {
         return n * factorial(n - 1);
     }
 }
 
 // Example usage:
 console.log(factorial(5)); // Output: 120