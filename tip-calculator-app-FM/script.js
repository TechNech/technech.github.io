const bill = document.getElementById("bill");
const people = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-per-person");
const tipCustom = document.getElementById("custom-tip");
const resetBtn = document.getElementById("reset-btn");

const error = document.querySelector(".error");
const customTip = document.querySelector(".custom-tip");
const tipsCheck = document.querySelectorAll('input[type="checkbox"]');

//input on bill and person
bill.addEventListener("input", billInput);
people.addEventListener("input", peopleInput);

//  click on tips [select tips]
tipsCheck.forEach(function (val) {
  val.addEventListener("click", tipsChecked);
});

// custom tip
customTip.addEventListener("input", tipCustomInput);

// reset button
resetBtn.addEventListener("click", reset);

// setting default values
bill.value = (0.0).toFixed(2);
people.value = 1;
tipAmount.value = "$" + (0.0).toFixed(2);
totalPerPerson.value = "$" + (0.0).toFixed(2);

// predefining values
let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInput() {
  billValue = parseFloat(bill.value);
  //console.log("bill value :", billValue);
  calculateTip();
}

function peopleInput() {
  peopleValue = parseFloat(people.value);

  if (peopleValue < 1) {
    error.style.display = "block";
    error.style.position = "absolute";
    error.style.right = "2rem";
    people.style.outline = "0.25rem solid hsl(337, 92%, 49%)";
  } else {
    error.style.display = "none";
    people.style.outline = "none";
    calculateTip();
  }
}

function tipCustomInput() {
  tipValue = parseFloat(customTip.value / 100);
  // console.log("Custom Tip: ", tipValue);
  tipsCheck.forEach(function (val) {
    val.parentNode.classList.remove("tips-checked");
  });
  calculateTip();
}

function tipsChecked(event) {
  tipsCheck.forEach(function (val) {
    val.parentNode.classList.remove("tips-checked");
    if (event.target.value == val.value) {
      val.parentNode.classList.add("tips-checked");
      tipValue = parseFloat(val.value);
      //console.log("Tip Value: ", tipValue);
    }
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipTotal = parseFloat((billValue * tipValue) / peopleValue);
    let total = (billValue + tipTotal) / peopleValue;
    tipAmount.value = "$" + tipTotal.toFixed(2);
    totalPerPerson.value = "$" + total.toFixed(2);

    // console.log("Total Tip/p: ", tipTotal);
    // console.log("Total/p: ", total);
  }
}

function reset() {
  bill.value = "0.0";
  billInput();
  people.value = "1";
  peopleInput();
  tipsCheck.forEach(function (val) {
    val.parentNode.classList.remove("tips-checked");
  });
  //tipCustom.value = "";
}
