//() Creation

//? To create a new Date object call new Date() with one of the following arguments:
//? new Date()
//? Without arguments – create a Date object for the current date and time:

let now = new Date()
console.log(now)
console.log(now.getHours())
console.log(now.getUTCHours())
console.log(now.getTimezoneOffset())
//! Not getYear(), but getFullYear()
//! Many JavaScript engines implement a non-standard method getYear(). This method is deprecated. It returns 2-digit year sometimes. Please never use it. There is getFullYear() for the year.

//() Out-of-range date components are distributed automatically.
//*  Let’s say we need to increase the date “28 Feb 2016” by 2 days. It may be “2 Mar” or  “1 Mar” in case of a leap-year. We don’t need to think about it. Just add 2 days. The Date object will do the rest:

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log( date ); // 1 Mar 2016

//() Can be used for measurement
let start = new Date()

for (i = 1; i < 100000; i++){
  console.log("*")
}

let end = new Date()
console.log(`Loop took ${end - start} ms `)