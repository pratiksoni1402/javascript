let ch = 2
switch (ch){
  case 1:
    console.time();
    let pi = 3.14;
    let radius = 3;
    console.log("Area of Circle is", (pi * radius * radius).toFixed(5));
    console.timeEnd();
    break;
  case 2:
    console.time();
    let length = 3;
    let breath = 2;
    console.log("Area of Rectangle is", length * breath);
    console.timeEnd();
    break;
}