function countDigits(n) {
  console.log("This is original", n)
  // Handle negative numbers by taking the absolute value
  n = Math.abs(n);
  console.log("This is absolute", n)
  // Special case for 0
  if (n === 0) {
    return 1;
  }

  // Initialize the count
  let count = 0;

  // Count digits using a loop
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
    console.log("This is count", count)
  }

  return count;
}
console.log(countDigits(-121));