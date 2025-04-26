function hasCommonValue(arrayOne, arrayTwo){
  for (let values of arrayOne) {
    if (arrayTwo.includes(values)){
      return true;
    }
  }
  return false;
}

console.log(hasCommonValue(['a', 'b'], ['x', 'y']));