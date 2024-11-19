function findNthFibonacci(n) {
  if (n <= 0) return "Invalid input"; // Handle edge cases
  if (n === 1 || n === 2) return 1;   // First two Fibonacci numbers are 1

  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) { // Start from the 3rd Fibonacci number
    const next = a + b;
    a = b; // Update previous number
    b = next; // Update current number
  }
  return b;
}

console.log(findNthFibonacci(6)); // Output: 8
