let count = 0

const displayCount = document.getElementById('count')
const increaseCount = document.getElementById('increment')
const decreaseCount = document.getElementById('decrement')
const resetCount = document.getElementById('reset')

increaseCount.addEventListener('click', function (){
  count++
  displayCount.textContent = count
})

decreaseCount.addEventListener('click', ()=>{
  if(count > 0){
    count--
    displayCount.textContent = count
  }else{
    alert('Value cannot be less then 0')
  }
})

resetCount.addEventListener('click', ()=>{
  count = 0
  displayCount.textContent = count
})