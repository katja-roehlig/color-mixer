let redRange = document.querySelector("#red");
let greenRange = document.querySelector("#green");
let blueRange = document.querySelector("#blue");
let numberElement = document.querySelector("#number");
let bodyElement = document.querySelector("body");

let r = redRange.value;
let g = greenRange.value;
let b = blueRange.value;
let hexNumber = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

bodyElement.addEventListener("input", function () {
  getRangeColor();
  setBodyBackgroundColor(r, g, b);
  numberElement.innerText = rgbToHex(r, g, b);
});

setBodyBackgroundColor(r, g, b);

function getRangeColor() {
  r = redRange.value;
  g = greenRange.value;
  b = blueRange.value;
}
function setBodyBackgroundColor(r, g, b) {
  bodyElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

/*function componentToHex(c) {
  var hex = c.toString(16);
  console.log(hex);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  numberElement.innerText = `${componentToHex(r)}-${componentToHex(
    g
  )}-${componentToHex(b)}`;
  console.log(numberElement.innerText);
}*/

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  //r war bisher als string gesetzt - damit die Fn funktioniert, muss es in eine Nummer verwandelt werden!)
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//let hexNumber = rgbToHex(r, g, b);
//numberElement.append(hexNumber);

//red.addEventListener();
/*document.addEventListener("DOMContentLoaded", function () {
  let volumeSlider = document.getElementById("volume"),
    volumeAnzeige = document.getElementById("output");

  function setzeVolumeAnzeige(wert) {
    volumeAnzeige.value = wert;
  }
  volumeSlider.addEventListener("input", function (event) {
    setzeVolumeAnzeige(event.target.value);
  });
  setzeVolumeAnzeige(volumeSlider.value);
  volumeAnzeige.hidden = false;
});*/
