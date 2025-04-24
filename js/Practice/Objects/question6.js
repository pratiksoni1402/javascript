
function isObjectEqual(objOne, objTwo){
  let objOneKeys = Object.keys(objOne)
  let objTwoKeys = Object.keys(objTwo)

  if (objOneKeys.length !== objTwoKeys.length) return false
  for (let keys of objOneKeys){
    console.log("keys",keys)
    if (objOne[keys] !== objTwo[keys]) return false

  }
  return true
}

console.log(isObjectEqual({a: 1, b: 2}, {a: 1, b: 2}))