//() Many JavaScript built-in functions support an arbitrary number of arguments.

//? For instance:
//? Math.max(arg1, arg2, ..., argN) – returns the greatest of the arguments.
//? Object.assign(dest, src1, ..., srcN) – copies properties from src1..N into dest.
//? …and so on.

function showName(firstName, lastName, ...titles) {
  console.log( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log( titles[0] ); // Consul
  console.log( titles[1] ); // Imperator
  console.log( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

//! The rest parameters must be at the end
// *The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
                                  // error
}
//* The ...rest must always be last.

//() The “arguments” variable

//* There is also a special array-like object named arguments that contains all arguments by their index.

function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

//? In old times, rest parameters did not exist in the language, and using arguments was the only way to get all arguments of the function. And it still works, we can find it in the old code.

//? But the downside is that although arguments is both array-like and iterable, it’s not an array. It does not support array methods, so we can’t call arguments.map(...) for example.

//? Also, it always contains all arguments. We can’t capture them partially, like we did with rest parameters.

//() Arrow functions do not have "arguments"
//* If we access the arguments object from an arrow function, it takes them from the outer “normal” function.

// ?Here’s an example:
  function f() {
    let showArg = () => console.log(arguments[0]);
    showArg();
  }

f(1); // 1
//* As we remember, arrow functions don’t have their own this. Now we know they don’t have the special arguments object either.