// let elementId = document.getElementById('element')
element.style.background = 'blue'
let querySelect = document.querySelectorAll('ul > li:last-child')

for(let x in querySelect){
  console.log(x.inn)
}

let chapter = document.querySelector('.chapter');
console.log("Closest 1",chapter.closest('.book'))
console.log("Closest 2",chapter.closest('.contents'))
console.log("Closest 3",chapter.closest('h1'))

//() getElementsBy
let getElement = document.getElementsByTagName('input')
for (input of getElement){
  console.log(input.value + '; ' + input.checked)
}