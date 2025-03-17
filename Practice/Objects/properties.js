function objectProperties(propertiesCount) {
  return Object.keys(propertiesCount).length
}

console.log(objectProperties({
  country: "USA",
  occupation: "Developer"
}))