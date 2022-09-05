"use strict";

var _translator = require("./translator.js");

var translate = document.querySelector('#btn');
var morseDisplay = document.querySelector('#morse');
var englishDisplay = document.querySelector('#english');

var translation = function translation() {
  var string = document.querySelector('#word-input').value;
  morseDisplay.innerHTML = (0, _translator.translateToMorse)(string);
  englishDisplay.innerHTML = "";
  englishDisplay.innerHTML += "".concat(string);
};

translate.addEventListener("click", translation);