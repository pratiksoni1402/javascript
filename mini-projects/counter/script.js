let count = 0;

const displayCount = document.getElementById('count');

const increaseCount = document.getElementById('increment');
const decreaseCount = document.getElementById('decrement');
const resetCount = document.getElementById('reset');

const getMinValue = document.getElementById('min-value');
const getMaxValue = document.getElementById('max-value');


let maxValue;
let minValue;

console.log(maxValue)
console.log(minValue)

function updateUi() {
  displayCount.textContent = count;
  decreaseCount.disabled = count ===0
  resetCount.disabled = count ===0
}

getMinValue.addEventListener('change', (e)=>{
  displayCount.textContent = e.target.value
})

getMaxValue.addEventListener('change', (e)=>{
  maxValue = e.target.value

})

// Initialize on load
updateUi();

increaseCount.addEventListener('click', () => {
  console.log("Max value", maxValue)
    if(count < maxValue){
      count++
      updateUi();
    }else{
      alert('Cannot increase count above maximum value')
    }

});
decreaseCount.addEventListener('click', () => {
  console.log("Min Value",minValue)
});

resetCount.addEventListener('click', () => {
  count = 0;
  updateUi();
});
