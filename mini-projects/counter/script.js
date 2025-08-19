let count = 0;

const enableTimer = document.getElementById("enable-timer");
const timerButtons = document.querySelector(".timer-buttons");
const startTimer = document.getElementById("start-timer");
const pauseTimer = document.getElementById("pause-timer");
const stopTimer = document.getElementById("stop-timer");
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
    let val = e.target.value.trim();

    // If field is empty → reset defaults
    if (val === "") {
      if (idx === 0) {
        minValue = 0;
        count = Math.max(count, minValue);
      } else {
        maxValue = Infinity;
      }
    } else {
      val = parseInt(val, 10);

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


let timerInterval = null;

// Handle toggle
enableTimer.addEventListener("change", function () {
  if (this.checked) {
    // Hide + - buttons, show timer buttons
    document.querySelector(".action-buttons").style.display = "none";
    timerButtons.style.display = "block";

    // Disable local/session storage
    saveSettings.disabled = true;
    saveSession.disabled = true;
    saveSettings.checked = false;
    saveSession.checked = false;
    localStorage.removeItem("savedValues");
    sessionStorage.removeItem("savedValues");

    jSuites.notification({ message: "Timer Mode Enabled" });
  } else {
    // Show + - buttons, hide timer buttons
    document.querySelector(".action-buttons").style.display = "block";
    timerButtons.style.display = "none";

    // Enable storage options back
    saveSettings.disabled = false;
    saveSession.disabled = false;

    stopTimerFunc(); // reset timer
    jSuites.notification({ message: "Timer Mode Disabled" });
  }
});

// Timer functions
function startTimerFunc() {
  if (timerInterval) return; // already running
  timerInterval = setInterval(() => {
    if (count + stepValue <= maxValue) {
      count += stepValue;
      updateUi();
    } else {
      stopTimerFunc(); // stop when reaching max
    }
  }, 1000); // 1 sec interval
}

function pauseTimerFunc() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function stopTimerFunc() {
  clearInterval(timerInterval);
  timerInterval = null;
  count = minValue; // reset to min
  updateUi();
}

// Button events
startTimer.addEventListener("click", startTimerFunc);
pauseTimer.addEventListener("click", pauseTimerFunc);
stopTimer.addEventListener("click", stopTimerFunc);
