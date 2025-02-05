//() Variable scope

//* If a variable is declared inside a code block {...}, it’s only visible inside that block.

{
  // show message
  let message = "Hello";
  alert(message);
}

{
  // show another message
  let message = "Goodbye";
  alert(message);
}
// console.log(message) This will produce an error

//! There’d be an error without blocks if we use let with the existing variable name:

//() Lexical Environment

//* Every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

//? The Lexical Environment object consists of two parts:

//* Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
//* A reference to the outer lexical environment, the one associated with the outer code.

//? A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.

//() Real-life optimizations

//* JavaScript engines try to optimize that. They analyze variable usage and if it’s obvious from the code that an outer variable is not used – it is removed.

//* An important side effect in V8 (Chrome, Edge, Opera) is that such variable will become unavailable in debugging.

function f() {
  let value = Math.random();

  function g() {
    debugger; // in console: type alert(value); No such variable!
  }

  return g;
}

let g = f();
g();

//* there is no such variable! In theory, it should be accessible, but the engine optimized it out.

//* That may lead to funny (if not such time-consuming) debugging issues. One of them – we can see a same-named outer variable instead of the expected one:

let value = "Surprise!";

function f() {
  let value = "the closest value";

  function g() {
    debugger; // in console: type alert(value); Surprise!
  }

  return g;
}

let g = f();
g();

//? This feature of V8 is good to know. When debugging with Chrome/Edge/Opera, sooner or later you will meet it.

//? That is not a bug in the debugger, but rather a special feature of V8. Perhaps it will be changed sometime. You can always check for it by running the examples on this page.