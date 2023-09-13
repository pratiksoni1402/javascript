let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456);
    }, 2000);
  });
};

// let f = async () => {
//   let b = await a()
//   console.log(b);
//   let c = await a()
//   console.log(c);pratikdo
//   let d = await a()
//   console.log(d);
// };
// f();

// immediately invoked function expression

(async () => {     
    let b = await a()
    console.log(b);
  
    let c = await a()
    console.log(c);
  
    let d = await a()
    console.log(d);
  })();
