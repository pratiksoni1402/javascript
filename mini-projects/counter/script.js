let count = 0;

const displayCount = document.getElementById('count');
const increaseCount = document.getElementById('increment');
const decreaseCount = document.getElementById('decrement');
const resetCount = document.getElementById('reset');

const getMinValue = document.getElementById('min-value');
const getMaxValue = document.getElementById('max-value');
const stepSlider = document.getElementById('step-slider');
const stepLabel = document.getElementById('step-label');

const saveSettings = document.getElementById('save-settings'); // local
const saveSession = document.getElementById('save-session');   // session

let minValue = 0;
let maxValue = Infinity;
let stepValue = 1;
let previousCount = count;

// ---------- Utilities ----------
function updateUi() {
  displayCount.textContent = count;

  displayCount.classList.toggle("count-up", count > previousCount);
  displayCount.classList.toggle("count-down", count < previousCount);

  decreaseCount.disabled = count <= minValue;
  resetCount.disabled = count === 0;

  previousCount = count;
}

function getDataObj() {
  return { count, minValue, maxValue, stepValue, checkStatus: true };
}

function saveData() {
  if (saveSettings.checked) {
    localStorage.setItem("savedValues", JSON.stringify(getDataObj()));
  } else {
    localStorage.removeItem("savedValues");
  }

  if (saveSession.checked) {
    sessionStorage.setItem("savedValues", JSON.stringify(getDataObj()));
  } else {
    sessionStorage.removeItem("savedValues");
  }
}

function loadData(storage) {
  const saved = JSON.parse(storage.getItem("savedValues"));
  if (saved && saved.checkStatus) {
    count = saved.count ?? 0;
    minValue = saved.minValue ?? 0;
    maxValue = saved.maxValue ?? Infinity;
    stepValue = saved.stepValue ?? 1;

    getMinValue.value = minValue || "";
    getMaxValue.value = isFinite(maxValue) ? maxValue : "";
    stepSlider.value = stepValue;
    stepLabel.textContent = `Step: ${stepValue}`;
    updateUi();
    return true;
  }
  return false;
}

// ---------- Event Listeners ----------
saveSettings.addEventListener("change", function () {
  if (this.checked) {
    saveSession.checked = false; // only one active
    jSuites.notification({ message: "Local Storage Enabled" });
    saveData();
  } else {
    localStorage.removeItem("savedValues");
    jSuites.notification({ message: "Local Storage Disabled" });
  }
});

saveSession.addEventListener("change", function () {
  if (this.checked) {
    saveSettings.checked = false; // only one active
    jSuites.notification({ message: "Session Storage Enabled" });
    saveData();
  } else {
    sessionStorage.removeItem("savedValues");
    jSuites.notification({ message: "Session Storage Disabled" });
  }
});

[getMinValue, getMaxValue].forEach((input, idx) => {
  input.addEventListener("change", (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 0) {
      e.target.value = "";
      alert(`${idx ? "Maximum" : "Minimum"} value cannot be negative`);
      return;
    }
    if (idx === 0) {
      minValue = val;
      count = Math.max(count, minValue);
    } else {
      maxValue = val;
    }
    setupSlider();
    updateUi();
    saveData();
  });
});

stepSlider.addEventListener("input", (e) => {
  stepValue = +e.target.value;
  stepLabel.textContent = `Step: ${stepValue}`;
  updateUi();
  saveData();
});

increaseCount.addEventListener("click", () => {
  if (count + stepValue <= maxValue) {
    count += stepValue;
    updateUi();
    saveData();
  } else alert("Cannot increase count beyond maximum value");
});

decreaseCount.addEventListener("click", () => {
  if (count - stepValue >= minValue) {
    count -= stepValue;
    updateUi();
    saveData();
  } else alert("Cannot decrease count below minimum value");
});

resetCount.addEventListener("click", () => {
  count = minValue;
  updateUi();
  saveData();
});

// ---------- Setup Slider ----------
function setupSlider() {
  if (minValue >= 0 && maxValue > minValue && maxValue !== Infinity) {
    stepSlider.min = 1;
    stepSlider.max = maxValue;
    stepSlider.value = Math.min(stepValue, maxValue);
    stepLabel.textContent = `Step: ${stepValue}`;
  }
}

// ---------- Init ----------
window.addEventListener("DOMContentLoaded", () => {
  // Try local first, then session
  if (loadData(localStorage)) saveSettings.checked = true;
  else if (loadData(sessionStorage)) saveSession.checked = true;

  updateUi();
});
