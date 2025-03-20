//() Function object

//? Every value in JavaScript has a type. What type is a function?
//* In JavaScript, functions are objects.

//* A good way to imagine functions is as callable “action objects”. We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc.

//() The “name” property
//* Function objects contain some useable properties.
//* A function’s name is accessible as the “name” property:
function sayHi(){
  console.log("Say Hi")
}
console.log("Name property", sayHi.name)

//? What’s kind of funny, the name-assigning logic is smart. It also assigns the correct name to a function even if it’s created without one, and then immediately assigned:

let sayyHi = function() {
  console.log("Hi");
};

console.log(sayyHi.name); // sayHi (there's a name!)

//? It also works if the assignment is done via a default value:

function f(sayHi = function() {}) {
  console.log(sayHi.name); // sayHi (works!)
}

f();
//*  This feature is called a “contextual name”. If the function does not provide one, then in an assignment it is figured out from the context.

let user = {
  sayHello(){

  },
  sayBye(){

  },
}

console.log("----",user.sayHello.name)
console.log("----",user.sayBye.name)

//() The “length” property
//* There is another built-in property “length” that returns the number of function parameters

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2

//() Named Function Expression
//* Named Function Expression, or NFE, is a term for Function Expressions that have a name.

let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};

sayHi("John"); // Hello, John

//* There are two special things about the name func, that are the reasons for it:

//* It allows the function to reference itself internally.
//* It is not visible outside of the function.

//? For instance, the function sayHi below calls itself again with "Guest" if no who is provided:

let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};

sayHi(); // Hello, Guest

// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)

//* The problem with that code is that sayHi may change in the outer code. If the function gets assigned to another variable instead, the code will start to give errors:

let sayHi = function(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    sayHi("Guest"); // Error: sayHi is not a function
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Error, the nested sayHi call doesn't work any more!

//* That happens because the function takes sayHi from its outer lexical environment. There’s no local sayHi, so the outer variable is used. And at the moment of the call that outer sayHi is null.

//* The optional name which we can put into the Function Expression is meant to solve exactly these kinds of problems.

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // Now all fine
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (nested call works)

//* Now it works, because the name "func" is function-local. It is not taken from outside (and not visible there). The specification guarantees that it will always reference the current function.

//* The outer code still has its variable sayHi or welcome. And func is an “internal function name”, the way for the function to can call itself reliably.

