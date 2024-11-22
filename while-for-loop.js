let i = 1
do{
  console.log(i)
  i++
}while (i <= 5)

// For loop
// for(begin; condition; step){
// loop body
// }

let b = 10

// Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.
for(let a = 0; a <= b ; a++){
  console.log(a)
}

// begin	let a = 0	Executes once upon entering the loop.
// condition a <= 10 Checked before every loop iteration. If false, the loop stops.
// body	console.log(a) Runs again and again while the condition is truthy.
// step	a++	Executes after the body on each iteration.

// Skipping parts
// Any part of for can be skipped.
//
//   For example, we can omit begin if we don’t need to do anything at the loop start.
//
//   Like here:

  let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}
// We can also remove the step part:

  let i = 0;

for (; i < 3;) {
  alert( i++ );
}
// This makes the loop identical to while (i < 3).
//
// We can actually remove everything, creating an infinite loop:

  for (;;) {
    // repeats without limits
  }


// We need a way to stop the process if the user cancels the input.
//
//   The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!
//
//   A label is an identifier with a colon before a loop:

//   labelName: for (...) {
// ...
// }
// The break <labelName> statement in the loop below breaks out to the label:

  outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
  }

  alert('Done!');
  {/*In the code above, break outer looks upwards for the label named outer and breaks out of that loop.*/}

let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4

let z = 0;
while (z++ < 5) alert( z ); // 1 2 3 4 5

let w = 10;
if( w%2==0 ){
  console.log(w)
}