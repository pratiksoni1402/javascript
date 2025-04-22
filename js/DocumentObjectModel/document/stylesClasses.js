// () className
// alert(document.body.classList)

// () classList
// document.body.classList.add('article');
// document.body.classList.remove('main');
// document.body.classList.toggle('page'); // adds the class if it doesn’t exist, otherwise removes it.
// document.body.classList.contains('main');
// alert(document.body.className)

for(let list of document.body.classList){
  console.log(list)
}

//() Element style
document.body.style.backgroundColor = 'pearlWhite'

//() Resetting the style property
setTimeout(()=> document.body.style.removeProperty(backgroundColor),1000)

//() Full rewrite with style.cssText

heading.style.cssText = `
font-size:30px;
color: teal;
background-color: lightGrey;
display: inline-block;
padding: 10px 20px;
`

//() Computed styles: getComputedStyle
let computedStyle = getComputedStyle(document.querySelector('h1'))
console.log(computedStyle.padding)
console.log(computedStyle.color)