const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

//! Default Behaviour
green.addEventListener('click', (e)=> {
  console.log("Green event listener");
})

//! Default Behaviour
pink.addEventListener('click', (e) => {
  console.log("Pink event listener");
})

blue.addEventListener('click', (e) => {
  e.stopPropagation();
  //! This will stop propogation i.e event-bubbling
  console.log("Blue event listener")
}) //! {capture: true, (once:true (this will fire event only once))}
