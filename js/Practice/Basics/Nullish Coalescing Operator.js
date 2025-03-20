let num1 = null;
let num2 = undefined;
let num3 = 0;
let num4 = "";
let num5 = "Hello";

let result = num1 ?? num2 ?? num3 ?? num4 ?? num5;
console.log(result);

let a = null ?? undefined ?? NaN ?? "" ?? 42 ?? "Hello";
console.log(a);


let results = null ?? "Hello";
console.log(results);


let resultt = null ?? false ?? "Final Answer";
console.log(resultt);

function getFinalValue(a, b) {
  return (a && b) ?? ("Backup" || null);
}

console.log("----",getFinalValue("", "Data"));

console.log('1' || 2)


