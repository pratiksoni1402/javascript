//using backtick

let b1 = "Pratik";
let b2 = "Soni";
let fname = `${b1} 'is first name of' ${b2}`;
console.log(fname);
console.log("-----------------------------------------");

//escape sequence character
let fruits = "banana";
console.log(fruits);
console.log("-----------------------------------------");

//Console objects
console.log("log")
console.info('info')
console.warn('warning')
console.error('error')
console.assert('error'!=false)
console.assert('error' == false)

console.table(console)

console.time("For Loop")
for(let i = 0; i < 10; i++){
    console.log(i)
}
console.timeEnd("for loop")


let b = document.body
console.log("First child of b is", b.firstChild)
console.log("First element child of b is", b.firstElementChild)

let table = document.body.firstElementChild
console.log(table)
console.log(table.rows)


let id1 = document.getElementById("ele-1")
console.log(id1)
console.log(id1.matches('.box'))

console.log(id1.contains('.box'))
