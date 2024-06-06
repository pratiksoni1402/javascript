//! This will give all the image
const allImages = document.getElementsByTagName('img');
console.log("This are the images", allImages)

//! This will return the result in array format even if there is single object
const cssImage = document.getElementsByClassName('image') 

//! The return value will be single object not an array
const getById = document.getElementById('abc')


//! This will return only the first tag encountered and will ignore the rest  if there are multiple tags with .test classname 
const byQuerySelector = document.querySelector('.test')

//! This will return all the tag with .testing class name and same goes with id attribute
const byQuerySelectorAll = document.querySelectorAll('.testing')

//! Can also work with alt querySelector is flexible
const byAltSelect = document.querySelector("[alt = 'javascript roadmap']")
console.log(byAltSelect)

//! This will select only first li tag if you want to select multiple use li:nth or use querySelectorAll
const liSelection = document.querySelector('ul li:')
console.log(liSelection)