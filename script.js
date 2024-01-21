const toggle = document.querySelector("#toggle");

let bg = document.body;

toggle.addEventListener("change", function () {
  if (this.checked) {
    // Toggle button is checked
    // Perform actions for the checked state
    bg.style.backgroundColor = "#222222";
  } else {
    // Toggle button is unchecked
    // Perform actions for the unchecked state
    bg.style.backgroundColor = '#FBFCFC';
  }
});
