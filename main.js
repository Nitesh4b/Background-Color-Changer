const body = document.querySelector("body");
const para = document.createElement("p");
para.innerText = "By using start button choose different background colors every second";
para.id = "para";
body.appendChild(para);

// Creating start and stop buttons
function createButton(text) {
  const btn = document.createElement("input");
  btn.id = text;
  btn.classList.add("btn");
  btn.setAttribute("type", "button");
  btn.setAttribute("value", text);
  body.appendChild(btn);
}

createButton("start");
createButton("stop");

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

// Function to generate dark RGB values
function getRandomValue() {
  const min = 0;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Extracted color-changing logic
function setRandomBackground() {
  const r = getRandomValue();
  const g = getRandomValue();
  const b = getRandomValue();
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Handling the events
//if the user clicks “Start” multiple times, it creates multiple intervals = faster color changes that needs to be stopped.
//setInterval returns values like 0,1,2 etc therefore uing null
let colorIntervalId = null; // Descriptive name

startBtn.addEventListener("click", function () {
  if (colorIntervalId !== null) return; // Already running
  colorIntervalId = setInterval(setRandomBackground, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", function () {
  clearInterval(colorIntervalId);
  colorIntervalId = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
