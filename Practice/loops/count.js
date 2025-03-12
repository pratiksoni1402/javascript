let charToFind = 'a'
const givenString = 'dlfgal asd dfkgaa asgnla sga lgsal aasoig qwalda'
let total = 0;
for(let i=1; i <= givenString.length; i++){
  if (givenString.charAt(i) === charToFind){
    total += 1
  }
}
console.log("Total", total)