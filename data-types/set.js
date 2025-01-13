//() Set
//? A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

//* new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
//* set.add(value) – adds a value, returns the set itself.
//* set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
//* set.has(value) – returns true if the value exists in the set, otherwise false.
//* set.clear() – removes everything from the set.
//* set.size – is the elements count.

//? The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

//? For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

//? Set is just the right thing for that:

let newSet = new Set()
newSet.add('Pratik')
.add('Hardik')
.add('Pratik')
.add('Naresh')
console.log('This is set', newSet)
console.log('This is set', newSet.size)

//^ The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find. But the performance would be much worse, because this method walks through the whole array checking every element. Set is much better optimized internally for uniqueness checks.

//() Iteration Over Set

//? Method 1 (for of loop)
for (let items of newSet){
  console.log("for of loop method", items)
}

//? Method 2 (for each)
newSet.forEach((value) =>(
  console.log("for each method", value)
))