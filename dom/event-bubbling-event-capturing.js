const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

//! Default Behaviour
green.addEventListener('click', (e)=> {
  console.log("Green event listener");
}, true)

//! Default Behaviour
pink.addEventListener('click', (e) => {
  console.log("Pink event listener");
}, true)


blue.addEventListener('click', (e) => {
  //! This will stop propogation i.e event-bubbling
  console.log("Blue event listener")
}, true) //! {capture: true, once:true (this will fire event only once)}
