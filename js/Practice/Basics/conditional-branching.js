function numberChecker(num){
  if (num < 0) return console.log('-ve')
  if (num > 0) return console.log('+ve')
  if (num === 0) return console.log('equal')
}

numberChecker(-1)

let age = 12
let result = age >= 18 ? 'Can vote' : 'Can"t vote'
console.log(result)
