// Arrow Function Syntax
// let fun = (arg1, arg2, arg3, ...... argn) => expression;

let sum = (a, b) => a + b;
console.log(sum(1, 5))

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
let multiply = n => n * 2
console.log(multiply(5))

// If there are no arguments, parentheses are empty, but they must be present:
let sayHi = () => console.log("Hello!");
sayHi();

let ask =(question, yes, no) => {
  if (console.log(question)) yes()
  else no()
}


ask(
  "Bhai tu thik hai",
  () => console.log("Ha Bhai"),
  () => console.log("Na Bhai")
)

//let sayOK = () => console.log("Ha bhai") why is this wrong ??