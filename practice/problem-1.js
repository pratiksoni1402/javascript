// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38



// Solution
let day;
let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let calculateMeridian = (hours >= 12 ? 'PM' : 'AM');
let twelveHours = (hours >= 12 ? hours - 12 : hours );
let concatTime = twelveHours + ':' +  minutes + ':' + seconds + ' ' + calculateMeridian
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thrusday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}
console.log('Today is', day);
console.log('Current Time is', concatTime);