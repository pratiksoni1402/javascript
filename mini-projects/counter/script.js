let count = 0;

const displayCount = document.getElementById('count');

const increaseCount = document.getElementById('increment');
const decreaseCount = document.getElementById('decrement');
const resetCount = document.getElementById('reset');

const getMinValue = document.getElementById('min-value');
const getMaxValue = document.getElementById('max-value');


let maxValue ;
let minValue = 0;


console.log("This is minimum value",maxValue)
console.log("This is maximum value",minValue)

function updateUi() {
  displayCount.textContent = count;
  decreaseCount.disabled = count ===0
  resetCount.disabled = count ===0
}

// Adding input value to variable (min value)
getMinValue.addEventListener('change', (e)=>{
  minValue = e.target.value
})

// Adding input value to variable (max value)
getMaxValue.addEventListener('change', (e)=>{
  maxValue = e.target.value

})

// Initialize on load
updateUi();

increaseCount.addEventListener('click', () => {
  console.log("Max value", maxValue)
  console.log("Min value", minValue)
    if(count < maxValue){
      count = minValue + 1
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
