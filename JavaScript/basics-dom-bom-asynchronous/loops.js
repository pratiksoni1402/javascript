
//For in Loop
//iterate over theo bjects
const obj = {
    name: "Pratik",
    lname: "Soni",
    mobilenumber: "7531598426",
};

for (let a in obj) {
    console.log("Key is", a, "and value is", obj[a]);
}
console.log("-----------------------------------------");

//For of Loop
// iterate over the array, map, set, string
//not recommended to use for of loop to iterate over the objects still it can be done.
const job = [
    {
        name: "Pratik",
        lname: "Soni",
        mobilenumber: "45468465684654",
    },
];
for (let b of job) {
    console.log(b);
}
console.log("-----------------------------------------");

//While loop
let n = 10;
let i = 1;
while (i <= n) {
    console.log(i);
    i++;
}
console.log("End of while loop");
console.log("-----------------------------------------");

//do-while loop

let a = 10;
let b = 0;
do {
    console.log(b);
    b++;
} while (b < a);
console.log("-----------------------------------------");

