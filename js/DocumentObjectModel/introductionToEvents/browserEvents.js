// elem.onclick = function(){
//   console.log("After")
// }

//() Accessing the element: this
//* The value of this inside a handler is the element. The one which has the handler on it.

//! Possible mistakes
//* If you’re starting to work with events – please note some subtleties.We can set an existing function as a handler:

// function sayThanks() {
//   alert('Thanks!');
// }
//
// elem.onclick = sayThanks;

//* right
// button.onclick = sayThanks;

//! wrong
// button.onclick = sayThanks();

//? If we add parentheses, then sayThanks() becomes a function call. So the last line actually takes the result of the function execution, that is undefined (as the function returns nothing), and assigns it to onclick. That doesn’t work.

//? …On the other hand, in the markup we do need the parentheses:

//* <input type="button" id="button" onclick="sayThanks()">

//? The difference is easy to explain. When the browser reads the attribute, it creates a handler function with body from the attribute content.

//? So the markup generates this property:

// button.onclick = function() {
//   sayThanks(); // <-- the attribute content goes here
// };

//() addEventListener
//* Developers of web standards understood that long ago and suggested an alternative way of managing handlers using the special methods addEventListener and removeEventListener which aren’t bound by such constraint.

  //? The syntax to add a handler:
  //* element.addEventListener(event, handler, [options]);

  //? To remove the handler, use removeEventListener:
  //* element.removeEventListener(event, handler, [options]);

//() Removal requires the same function
//? To remove a handler we should pass exactly the same function as was assigned.

// This doesn’t work:
// elem.addEventListener( "click" ,() => alert('Thanks!')) ;
// ....
// elem.removeEventListener( "click", () => alert('Thanks!'));
//? The handler won’t be removed, because removeEventListener gets another function – with the same code, but that doesn’t matter, as it’s a different function object.

//* Here’s the right way:

  function handler() {
    alert( 'Thanks!' );
  }

// input.addEventListener("click", handler);
// ....
// input.removeEventListener("click", handler);
//* Please note – if we don’t store the function in a variable, then we can’t remove it. There’s no way to “read back” handlers assigned by addEventListener.

// function handlerOne(){
//     console.log("Thanks handler one")
// }
//
// function handlerTwo(){
//     console.log("Thanks handler two")
// }
//
// element.onclick = ()=> console.log("Hello")
// element.addEventListener("click", handlerOne)
// element.addEventListener("click", handlerTwo)

// setTimeout(()=>{
//   element.removeEventListener("click", handlerOne)
// },2000)

//() For some events, handlers only work with addEventListener
//* There exist events that can’t be assigned via a DOM-property. Only with addEventListener.

//* For instance, the DOMContentLoaded event, that triggers when the document is loaded and the DOM has been built.

//! will never run
// document.onDOMContentLoaded = function() {
//   console.log("DOM built");
// };

//* this way it works
// document.addEventListener("DOMContentLoaded", function() {
//   console.log("DOM built");
// });

//() Event object
elem.onclick = function(event){
  console.log(event.type + " at " + event.currentTarget)
  console.log("Co-ordinates are",event.clientX + " : " + event.clientY)
}

//() Object handlers: handleEvent
//* We can assign not just a function, but an object as an event handler using addEventListener. When an event occurs, its handleEvent method is called.

let obj = {
  handleEvent(event) {
    console.log(event.type + " at " + event.currentTarget)
  }
}

objHandler.addEventListener('click', obj)