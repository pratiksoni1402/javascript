let count = 0;

const displayCount = document.getElementById('count');
const increaseCount = document.getElementById('increment');
const decreaseCount = document.getElementById('decrement');
const resetCount = document.getElementById('reset');

const getMinValue = document.getElementById('min-value');
const getMaxValue = document.getElementById('max-value');
const stepSlider = document.getElementById('step-slider');
const stepLabel = document.getElementById('step-label');

const saveSettings = document.getElementById('save-settings');

let minValue = 0;
let maxValue = Infinity;
let stepValue = 1;

function updateUi() {
  displayCount.textContent = count;
  decreaseCount.disabled = count <= minValue;
  resetCount.disabled = count === 0;
}

function saveToLocalStorage(){
  if(saveSettings.checked){
    localStorage.setItem('savedValues', JSON.stringify({
      count,
      minValue,
      maxValue,
      stepValue,
      checkStatus : true
    }))
  }
}
saveSettings.addEventListener('change', function() {
  if(this.checked) {
    jSuites.notification({
      message: 'Local Storage Enabled',
      class: 'toast-success',
    });
      saveToLocalStorage()
  }else{
    localStorage.removeItem('savedValues')
    jSuites.notification({
      message: 'Local Storage Disabled',
      class: 'toast-error',
    });
  }
})


// Whenever values change, call saveToLocalStorage()
getMinValue.addEventListener("input", () => {
  minValue = +getMinValue.value || 0;
  updateUi();
  saveToLocalStorage();
});

getMaxValue.addEventListener("input", () => {
  maxValue = +getMaxValue.value || Infinity;
  updateUi();
  saveToLocalStorage();
});

stepSlider.addEventListener("input", () => {
  stepValue = +stepSlider.value;
  stepLabel.textContent = `Step: ${stepValue}`;
  updateUi();
  saveToLocalStorage();
});

// Restore values if they exist
window.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("savedValues"));
  console.log('saved',saved)
  if (saved && saved.checkStatus) {
    count = saved.count ?? 0;
    minValue = saved.minValue ?? 0;
    maxValue = saved.maxValue ?? Infinity;
    stepValue = saved.stepValue ?? 1;

    getMinValue.value = minValue !== 0 ? minValue : "";
    getMaxValue.value = isFinite(maxValue) ? maxValue : "";
    stepSlider.value = stepValue;
    stepLabel.textContent = `Step: ${stepValue}`;
    saveSettings.checked = true;

    updateUi();
  }
});

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
    stepSlider.max = maxValue;
    if (stepValue > maxValue) stepValue = maxValue;
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
    saveToLocalStorage();
  } else {
    alert('Cannot increase count beyond maximum value');
  }
});

// Decrement
decreaseCount.addEventListener('click', () => {
  if (count - stepValue >= minValue) {
    count -= stepValue;
    updateUi();
    saveToLocalStorage();
  } else {
    alert('Cannot decrease count below minimum value');
  }
});

// Reset
resetCount.addEventListener('click', () => {
  count = minValue;
  updateUi();
  saveToLocalStorage();
});

// Initialize
updateUi();
