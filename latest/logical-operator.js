// A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false


// The precedence of AND && is higher than ||, so it executes first.
  // The result of 2 && 3 = 3, so the expression becomes:
  // null || 3 || 4
// Now the result is the first truthy value: 3.
alert( null || 2 && 3 || 4 );
