//() IIFE (Immediately invoked function expression)

function normalFunction(){
  console.log("This is normal Function")
}
normalFunction();

(function iifeFunction(){
  console.log("This is IIFE Function")
})();

//? Ways to create IIFE

(function() {
  console.log("Parentheses around the function");
})();

(function() {
  console.log("Parentheses around the whole thing");
}());

!function() {
  console.log("Bitwise NOT operator starts the expression");
}();

+function() {
  console.log("Unary plus starts the expression");
}();