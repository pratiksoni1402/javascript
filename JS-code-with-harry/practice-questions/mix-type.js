// function add(x, y) {
//   return x + y;
// }
// console.log(add(1, 3, 4, 5, 6, 76));

// function args() {
//   return arguments;
// }
// console.log(args(1, 2, 3, 4, 5, 6));

// function addTwoNumbers(x, y) {
//   if (typeof x != "number" || typeof y != "number") {
//     throw "Please enter only number";
//   }
//   return x + y;
// }
// let aq;
// console.log(addTwoNumbers(1, 3));

// let dmx = {
//   occupation: "rapper",
// };
// dmx.real_ame = "Earl Simmons";
// console.log(dmx);

// let circle = {
//   radius: 10,
//   circumference: function () {},
// };

// var writing_tools = ["pencil", "pen", "marker"];
// console.log(writing_tools[writing_tools.length - 1]);

// let number = [2, 4, 6, 8];
// let counter = 0;
// let add = 0;
// while (counter < number.length) {
//   add += number[counter];
//   counter++;
// }
// console.log(add);

// let x = document.getElementById("card-title");
// x.style.color = "red";

// let aqz = document.getElementsByClassName("card-block"); //getElementByClassname will return array type either use loop or index positioning
// //index positioning
// aqz[1].style.color = "blue";

// //loop through elements
// for (let i = 0; i < aqz.length; i++) {
//   a[i].style.color = "green";
// }

// console.log(typeof (aqz, x)); // both will return objects

// //Write a JavaScript program to display the current day and time in the following format.
// let a = new Date();
// let day = a.getDay();
// console.log(window.print);

// let cap =
//   "Write a JavaScript program to capitalize the first letter of each word of a given string.";
// console.log(cap.toLowerCase);

// var num1 = 115
// var num2 = 110
// console.log(num1<num2)

// var x = 5, y = 8
// console.log(x++ - ++y + x++)


// let z = "99", x = "101"
// console.log(z <+ x)

let custom = 45
let b = parseInt(custom)
// console.log(typeof b)

if(!Number.isInteger(custom)){

  throw new Error("not an integer")
}else{
  console.log("integer")
}

const objects = {
  names:"pratik",
  lname:"",
}
console.log(objects.lname)
