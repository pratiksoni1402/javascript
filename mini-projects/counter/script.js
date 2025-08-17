let count = 0;

const displayCount = document.getElementById('count');
const increaseCount = document.getElementById('increment');
const decreaseCount = document.getElementById('decrement');
const resetCount = document.getElementById('reset');

const getMinValue = document.getElementById('min-value');
const getMaxValue = document.getElementById('max-value');
const stepSlider = document.getElementById('step-slider');
const stepLabel = document.getElementById('step-label');

let minValue = 0;
let maxValue = Infinity;
let stepValue = 1;

function updateUi() {
  displayCount.textContent = count;
  decreaseCount.disabled = count <= minValue;
  resetCount.disabled = count === 0;
}

// Handle min value
getMinValue.addEventListener('change', (e) => {
  let val = parseInt(e.target.value, 10);
  if (isNaN(val) || val < 0) {
    e.target.value = "";
    alert("Minimum value cannot be negative");
    return;
  }
  minValue = val;
  count = minValue;
  setupSlider();
  updateUi();
});

// Handle max value
getMaxValue.addEventListener('change', (e) => {
  let val = parseInt(e.target.value, 10);
  if (isNaN(val) || val < 0) {
    e.target.value = "";
    alert("Maximum value cannot be negative");
    return;
  }
  maxValue = val;
  setupSlider();
  updateUi();
});

// Setup slider range when min or max changes
function setupSlider() {
  if (minValue >= 0 && maxValue > minValue && maxValue !== Infinity) {
    stepSlider.min = 1;
    stepSlider.max = maxValue;   // ✅ now matches entered max value
    if (stepValue > maxValue) stepValue = maxValue; // keep in range
    stepSlider.value = stepValue;
    stepLabel.textContent = `Step: ${stepValue}`;
  }
}

// Step slider change
stepSlider.addEventListener('input', (e) => {
  stepValue = parseInt(e.target.value, 10);
  stepLabel.textContent = `Step: ${stepValue}`;
});

// Increment
increaseCount.addEventListener('click', () => {
  if (count + stepValue <= maxValue) {
    count += stepValue;
    updateUi();
  } else {
    alert('Cannot increase count beyond maximum value');
  }
});

// Decrement
decreaseCount.addEventListener('click', () => {
  if (count - stepValue >= minValue) {
    count -= stepValue;
    updateUi();
  } else {
    alert('Cannot decrease count below minimum value');
  }
});

// Reset
resetCount.addEventListener('click', () => {
  count = minValue;
  updateUi();
});

// Initialize
updateUi();
