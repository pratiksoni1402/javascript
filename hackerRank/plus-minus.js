function plusMinus(arr) {
  let positiveNumber = 0;
  let negativeNumber = 0;
  let neutral = 0;
  for (i = 0; i < arr.length; i++) {
    
    if (arr[i] > 0) {
      positiveNumber ++
    
    } else if (arr[i] < 0) {
      negativeNumber ++

    } else if (arr[i] == 0) {
      neutral = 1;
    
    }
  }
  console.log((positiveNumber/arr.length).toFixed(6));
  console.log((negativeNumber/arr.length).toFixed(6));
  console.log((neutral/arr.length).toFixed(6))
}

const array = [1, 2, 3, -1, -2, -3, 0, 0]
const result = plusMinus(array)