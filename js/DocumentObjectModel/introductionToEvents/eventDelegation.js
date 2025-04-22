//() Event delegation

//? Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.

//? The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

document.addEventListener('click', function(event){
  let id = event.target.dataset.toggleId
  if(!id) return;
  let element = document.getElementById(id);
  element.hidden = !element.hidden;
})