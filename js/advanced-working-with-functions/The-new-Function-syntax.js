//() The "new Function" syntax

//* Syntax
//! let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a+b');
console.log(sum(1,3))

let message = new Function('console.log("Hello")');
console.log(message());

//() Closure
//* Usually, a function remembers where it was born in the special property [[Environment]]. It references the Lexical Environment from where it’s created (we covered that in the chapter Variable scope, closure).

//* But when a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment, but the global one.

//* So, such function doesn’t have access to outer variables, only to the global ones.

function getFunc(){
  let value = "Pratik";
 let demo = new Function('console.log("Value", value)');
 return demo
}
getFunc()()


//() Compare it with the regular behavior:

  function getFunc() {
    let value = "test";

    let func = function() { console.log(value); };

    return func;
  }

getFunc()(); // "test", from the Lexical Environment of getFunc