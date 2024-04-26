function compareTriplets(a, b){
  let aScore = 0;
  let bScore = 0;
   
  debugger
  for(let i = 0 ; i < 3; i++){
    if(a[i] > b[i]){
      aScore += 1;
    }else if(a[i] < b[i]){
      bScore += 1;
    }
  }
  console.log(aScore, bScore)
  return aScore, bScore
  

  
}

const alice = [5, 6, 7]
const bob = [3, 6, 10]
const z = compareTriplets(alice, bob)
