let number = 1000
let sum = 0;
for (let i = 1; i< number; i++){
  if(i % 3 === 0 || i % 5 === 0){
    sum += i
  }
}
console.log(sum)
