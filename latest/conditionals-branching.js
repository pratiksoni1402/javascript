// Non-traditional use of ‘?’
// Sometimes the question mark ? is used as a replacement for if:

// let company = prompt('Which company created JavaScript?', '');
//
// (company == 'Netscape') ?
//   alert('Right!') : alert('Wrong.');

let official_name = "Script"
if(official_name == "ECMAScript"){
  console.log("Right")
}else{
  console.log("Wrong")

}

let number = -10;
if(number > 0){
  console.log("1")
}else if(number < 0){
  console.log("-1")
}else if(number == 0){
  console.log("0")
}

let result
let a = 2
let b = 10
let c = (a + b < 4) ? result = "Below" : result = "Over"
console.log(c)

let message
let login = "sdf"
let d = (login == "Employee") ? message = "Hello" : (login == "Director") ? message = "Greetings" : (login == '') ? "No Login" : ''
console.log(d)