const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0;

//!When mouse button is clicked then event will be fired
// card.addEventListener('mousedown', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//!When mouse button is released then event will be fired
// card.addEventListener('mouseup', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//! When mouse is hovered over the button then event will be fired  (child excluded)
// card.addEventListener('mouseenter', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//! When mouse get away from the button boundary then this event will be fired
// card.addEventListener('mouseleave', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//! This will fire the event continously till to hovered the mouse on button (child included)
// card.addEventListener('mousemove', () => {
//   const newCard = document.createElement('div')
//   newCard.classList.add('card')
//   newCard.innerText = count++
//   container.append(newCard)
// })

//! Triggered when mouse wheel rotates
card.addEventListener('wheel', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard) 
})