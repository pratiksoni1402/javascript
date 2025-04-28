function recursionOne(n){
  if(n <= 0){
    console.log('Done')
  }
    return n
  recursionOne(n - 1)
}
console.log(recursionOne(10))