const names = ["Arjun", "Meena", "Kabir"]

function addPrefix(name){
  return "Mr." + name
}

const result = names.map(addPrefix)
console.log(result)
