const upKeyEvent = document.querySelector('h1');
upKeyEvent.addEventListener('keyup', (e) =>{
  console.log(e.key);
})

const downKeyEvent = document.querySelector('h1');
downKeyEvent.addEventListener('keydown', (e) =>{
  console.log(e.key);
})

//! In Key press alt, enter, shift won't work
const keyPressEvent = document.querySelector('h1');
keyPressEvent.addEventListener('keypress', (e) =>{
  console.log(e.key);
})
