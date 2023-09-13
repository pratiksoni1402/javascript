//Functions
function myfunction(a, b) {
    return 1 + a / b;
    // console.log('Printed')
}
let num_a = 4;
let num_b = 5;
console.log(myfunction(num_a, num_b));
console.log("-----------------------------------------");

//arrow function will continue in near future
const sum = (p, q) => {
    return p + q;
};
console.log("-----------------------------------------");


//old function
let fun = function () {
    return "Hello";
};
console.log(fun());
console.log(
    "--------------------------------------------------------------------"
);

let myfuntion = (name) => {
    //if there is only one parameter then no need of round brackets
    return `Hello ${name}`;
};
console.log(myfuntion("Pratik"));
console.log(
    "--------------------------------------------------------------------"
);