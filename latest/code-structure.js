// But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.
//
//   Errors which occur in such cases are quite hard to find and fix.
//
//   An example of an error
// If you’re curious to see a concrete example of such an error, check this code out:

console.log("Hello");
[1, 2].forEach(console.log);
// No need to think about the meaning of the brackets [] and forEach yet. We’ll study them later. For now, just remember the result of running the code: it shows Hello, then 1, then 2.
//
// Now let’s remove the semicolon after the alert:

console.log("Hello");
[1, 2].forEach(console.log);
// The difference compared to the code above is only one character: the semicolon at the end of the first line is gone.
//
//   If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more.
//
//   That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.
//
//   Here’s how the engine sees it:

  console.log("Hello")[1, 2].forEach(console.log);
// Looks weird, right? Such merging in this case is just wrong. We need to put a semicolon after alert for the code to work correctly.
//
//   This can happen in other situations also.