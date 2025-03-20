// -------------- Merging Objects -------------
const address = { street: "Main St", city: "New York" };
const contact = { phone: "1234567890", email: "example@example.com" };

const ObjectMerge = Object.assign({}, address, contact)
console.log("Merging two objects", ObjectMerge)

//You can use the spread operator (...) to merge objects in a cleaner and more modern way:

const ObjectMergeMethodTwo = { ...address, ...contact };
console.log("Merging two objects using modern approach", ObjectMergeMethodTwo);
