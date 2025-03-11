//() Currying

//? Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.

//? Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

//? Currying doesn’t call a function. It just transforms it.

function currying(f){
  return function (a){
    return function (b){
      return  f(a, b);
    };
  };
}

function sum(a, b){
  return a + b;
}

let curriedSum = currying(sum)
console.log(curriedSum(7)(8))

const taxRate = a => b => b + b * a;
const applyGst = taxRate(0.18)
const applyVat = taxRate(0.12)

console.log("GST", applyGst(1000))
console.log("VAT", applyVat(2000))