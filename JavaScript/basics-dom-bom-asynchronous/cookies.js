
document.cookie = "name=pratik64654"
console.log(document.cookie)
document.cookie = "name=soni645754"
console.log(document.cookie)


console.log(document.cookie)
document.cookie = "name=soni1122334400"
document.cookie = "name2=soni11223344002"
document.cookie = "name=soni"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)