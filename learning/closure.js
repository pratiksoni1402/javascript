// When variable of parent functions are used inside child function then it is called closure
// function Grandparent(){
//    const a = 3;
//   const b = 4;
//   function parent(){
//     const c = 5;
//     const f = 5;
//     function child(){
//       const d = 10;
//       const e = 12;
//       return d + e
//     }
//     child()
//     return c + f
//   }
//   return a + b
//   parent()
// }
 
// Grandparent()

function doSomething(){
  const userName = "Pratik"
  function child(){
    console.log(userName)
  }
  console.dir (doSomething)
  setTimeout(child, 2000)
}

doSomething()



