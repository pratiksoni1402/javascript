// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


// Solution
let currentDate = new Date();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();
let date = currentDate.getDate();

const prepandMonth = month < 10 ? '0' + month : month;
const prepandDate = date < 10 ? '0' + date : date;

console.log(prepandMonth + '-' + prepandDate + '-' + year);
console.log(prepandMonth + '/' + prepandDate + '/' + year);
console.log(prepandDate + '-' + prepandMonth + '-' + year);
console.log(prepandDate + '/' + prepandMonth + '/' + year);