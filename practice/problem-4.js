// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 


// Solution
let sideOne = 5;
let sideTwo = 6;
let sideThree = 7;
const semiPerimeter = ((sideOne + sideTwo + sideThree) / 2)

let areaOfTriangle = Math.sqrt(semiPerimeter * (semiPerimeter - sideOne) * (semiPerimeter - sideTwo) * (semiPerimeter - sideThree))
console.log(areaOfTriangle)