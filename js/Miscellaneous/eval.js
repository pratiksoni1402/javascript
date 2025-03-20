// () In strict mode, eval has its own lexical environment. So functions and variables, declared inside eval, are not visible outside:

let code = 'console.log("Hello")';
eval(code)

let x = 10
eval("x=13")
console.log(x)

eval("let y = 23; function f() {}");

console.log(typeof y);