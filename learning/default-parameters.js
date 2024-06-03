function multiply(a, b) {
  return a * b
}
const result = multiply(4, 7)
console.log('This is result', result)

function rollADie(numberofSides = 6) { //Default parameter if we don't pass any value
  return Math.floor(Math.random() * numberofSides) + 1
}

console.log(rollADie())