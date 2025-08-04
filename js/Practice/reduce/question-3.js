// Q4. Flatten a nested array
const nested = [[1, 2], [3, 4], [5, 6]];

const flattenArray = nested.reduce((acc, currentValue)=>{
  return acc.concat(currentValue);

},[])
console.log(flattenArray);