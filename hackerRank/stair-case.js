function stairCase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i)
    for (let j = i + 1; j <= n; j++) {
      console.log(j)
    }
  }
}

const value = 4;
const result = stairCase(value);