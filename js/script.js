'use strict'

function buttonClicked(){
  // variable setup
  let baseOne = parseFloat(document.getElementById("first-base").value)
  let baseTwo = parseFloat(document.getElementById("second-base").value)
  let height = parseFloat(document.getElementById("height").value)
  // doing calculations
  const FRACTION = (baseOne + baseTwo / 2)
  // testing things
  document.getElementById('answer').innerHTML = "your area is: " + FRACTION.toFixed(2)
}