// there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.

let sayHi = function (){

}

function ask(question, yes, no){
  if (console.log(question)) yes()
  else no();
}

function showOk(){
  console.log("You agreed");
}

function showError(){
  console.log("Not agreed");
}
// The arguments showOk and showCancel of ask are called callback functions or just callbacks.

// The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer.
ask("Are you ok", showOk, showError);

//Anonymous Function
function hello(q, y, n){
  if(console.log(q)) y()
  else n();
}

function yes(){
  console.log("Yes")
}

function no(){
  console.log("No")
}

// functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.

hello(
  "Thik hai tu",
  function (){console.log("Hanji")},
  function () {console.log("Nhi yr")}
)

// Summary

// Functions are values. They can be assigned, copied or declared in any place of the code.

//   If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.

// If the function is created as a part of an expression, it’s called a “Function Expression”.

// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.

//   Function Expressions are created when the execution flow reaches them.

//   In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

  // So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future.

