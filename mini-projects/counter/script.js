let count = 0;

const displayCount = document.getElementById('count');
const increaseCount = document.getElementById('increment');
const decreaseCount = document.getElementById('decrement');
const resetCount = document.getElementById('reset');
const minValue = document.getElementById('min-value');
const maxValue = document.getElementById('max-value');

function updateUi() {
  displayCount.textContent = count;
 decreaseCount.disabled = count ===0
  resetCount.disabled = count ===0
}

// Initialize on load
updateUi();

increaseCount.addEventListener('click', () => {
  count++;
  updateUi();
});

decreaseCount.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateUi();
  }
});

resetCount.addEventListener('click', () => {
  count = 0;
  updateUi();
});
