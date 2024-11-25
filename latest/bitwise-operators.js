// ----------------------------------------------

// for( a = 2, b = 5, c = a * b; a < 10; a++){
//   console.log(a)
// }

// ----------------------------------------------

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// console.log(c)
// console.log(d)

// ----------------------------------------------

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x)

//-----------------------------------------------

let b = "" + 1 + 0;
// console.log(b); // "10"

let c = "" - 1 + 0;
// console.log(c); // "-1"

let d = true + false;
// console.log(d); // 1

let e = 6 / "3";
// console.log(e); // 2

let f = "2" * "3";
// console.log(f); // 6

let g = 4 + 5 + "px";
// console.log(g); //9px

let h = "$" + 4 + 5;
// console.log(h); // $45

let i ="4" - 2;
// console.log(i); // 42

let j = "4px" - 2;
// console.log(j); //NaN

let k = "  -9  " + 5;
// console.log(k); //-95

let l = "  -9  " - 5;
// console.log(l); // -14

let m = null + 1;
// console.log(m); // 1

let n = undefined + 1;
// console.log(n); // NaN

let o = " \t \n" - 2;
// console.log(o); // -2

// -------------------------------------------------

let a = +prompt("First number?", 1); //! prefix the operator +
// let x = a.parseInt();
let z = +prompt("Second number?", 2);
// let y = z.parseInt();
console.log(x + y); // or (+x + +y)

// ------------------------------------------------
