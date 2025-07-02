let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearEntry() {
  display.value = display.value.slice(0, -1);
}

function clearAll() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    alert("Invalid Expression");
    display.value = "";
  }
}

function toggleSign() {
  if (display.value) {
    display.value = String(-1 * parseFloat(display.value));
  }
}
