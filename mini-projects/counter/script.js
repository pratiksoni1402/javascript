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
    stepLabel.textContent = `Increase count by: ${stepValue}`;
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

// Handle Min/Max Value
function parseValue(input, fieldName) {
  let val = input.value.trim();

  if (val === "") return null;

  val = parseInt(val, 10);
  if (isNaN(val) || val < 0) {
    input.value = "";
    alert(`${fieldName} value cannot be negative`);
    return null;
  }

  return val;
}

getMinValue.addEventListener("change", (e) => {
  const newMin = parseValue(e.target, "Minimum");
  minValue = newMin === null ? 0 : newMin;
  if (count < minValue) count = minValue;
  setupSlider();
  updateUi();
  saveData();
});

getMaxValue.addEventListener("change", (e) => {
  const newMax = parseValue(e.target, "Maximum");
  maxValue = newMax === null ? Infinity : newMax;
  setupSlider();
  updateUi();
  saveData();
});

stepSlider.addEventListener("input", (e) => {
  stepValue = +e.target.value;
  stepLabel.textContent = `Increase count by: ${stepValue}`;
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
  if (loadData(localStorage)) saveSettings.checked = true;
  else if (loadData(sessionStorage)) saveSession.checked = true;

  updateUi();
  updateTimerButtons("idle"); // set buttons initially
});

let timerInterval = null;

// ---------- Helper for Buttons ----------
function updateTimerButtons(state) {
  if (state === "idle") {
    startTimer.disabled = false;
    pauseTimer.disabled = true;
    stopTimer.disabled = true;
  } else if (state === "running") {
    startTimer.disabled = true;
    pauseTimer.disabled = false;
    stopTimer.disabled = false;
  } else if (state === "paused") {
    startTimer.disabled = false;
    pauseTimer.disabled = true;
    stopTimer.disabled = false;
  }
}

// ---------- Timer Mode Toggle ----------
enableTimer.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector(".action-buttons").style.display = "none";
    timerButtons.style.display = "block";

    saveSettings.disabled = true;
    saveSession.disabled = true;
    saveSettings.checked = false;
    saveSession.checked = false;
    localStorage.removeItem("savedValues");
    sessionStorage.removeItem("savedValues");

    jSuites.notification({ message: "Timer Mode Enabled" });
    updateTimerButtons("idle");
  } else {
    document.querySelector(".action-buttons").style.display = "block";
    timerButtons.style.display = "none";

    saveSettings.disabled = false;
    saveSession.disabled = false;

    stopTimerFunc();
    jSuites.notification({ message: "Timer Mode Disabled" });
  }
});

// ---------- Timer functions ----------
function startTimerFunc() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (count + stepValue <= maxValue) {
      count += stepValue;
      updateUi();
    } else {
      stopTimerFunc();
    }
  }, 1000);
  updateTimerButtons("running");
}

function pauseTimerFunc() {
  clearInterval(timerInterval);
  timerInterval = null;
  updateTimerButtons("paused");
}

function stopTimerFunc() {
  clearInterval(timerInterval);
  timerInterval = null;
  count = minValue;
  updateUi();
  updateTimerButtons("idle");
}

// ---------- Button Events ----------
startTimer.addEventListener("click", startTimerFunc);
pauseTimer.addEventListener("click", pauseTimerFunc);
stopTimer.addEventListener("click", stopTimerFunc);
