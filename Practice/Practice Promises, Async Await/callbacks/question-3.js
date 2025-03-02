// Write a function calculate that takes two numbers and a callback function. The callback function should perform an operation (like addition) on the two numbers. Then, call calculate with two numbers and a callback function that adds them and logs the result.

function calculate(a, b, callBackFunction) {
  callBackFunction(a, b)
}

function performCalculation(a, b) {
  console.log("Addition is", a + b)
}

calculate(5, 7, performCalculation)