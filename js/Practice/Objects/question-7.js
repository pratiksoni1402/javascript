function isDeepEqual(objOne, objTwo) {
  if (objOne === objTwo) return true;

  if (typeof objOne !== 'object' || typeof objTwo !== 'object' || objOne === null || objTwo === null) {
    return false;
  }

  const keysOne = Object.keys(objOne);
  console.log("Keys One", keysOne)
  const keysTwo = Object.keys(objTwo);
  console.log("Keys Two", keysTwo)

  if (keysOne.length !== keysTwo.length) return false;

  for (let key of keysOne) {
    if (!keysTwo.includes(key)) return false;

    if (!isDeepEqual(objOne[key], objTwo[key])) return false;
  }

  return true;
}

console.log(isDeepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 3}}))