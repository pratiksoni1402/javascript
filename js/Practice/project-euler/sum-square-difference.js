let sum = 0
let temp = 0
let square = 0

for (x = 1; x <= 100; x++){
  sum += x * x
}

for (y = 1; y <= 100; y++){
  temp += y
  square = temp**2
}
console.log("Sum square difference",square - sum)
  console.log("This is temp", temp)
  console.log("This is square", square)
console.log("This is sum", sum)