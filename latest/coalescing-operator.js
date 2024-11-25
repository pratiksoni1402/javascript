// Nullish coalescing operator '??'
// A recent addition
// This is a recent addition to the language. Old browsers may need polyfills.
//   The nullish coalescing operator is written as two question marks ??.
//
// As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.
//
//   The result of a ?? b is:
//
//   if a is defined, then a,
// if a isn’t defined, then b.
//   In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
//
//   The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.
//
//   We can rewrite result = a ?? b using the operators that we already know, like this:

result = (a !== null && a !== undefined) ? a : b;
let user = "John";

alert(user ?? "Anonymous");

// We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.
//
//   Let’s say we have a user’s data in variables firstName, lastName or nickName. All of them may be not defined, if the user decided not to fill in the corresponding values.
//
//   We’d like to display the user name using one of these variables, or show “Anonymous” if all of them are null/undefined.
//
//   Let’s use the ?? operator for that: