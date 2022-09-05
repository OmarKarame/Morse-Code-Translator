"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateToMorse = exports.morseCode = void 0;
var morseCode = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  " ": " /",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  "_": "..--.-",
  "$": "...-..-",
  "@": ".--.-.",
  '"': ".-..-."
};
exports.morseCode = morseCode;

var translateToMorse = function translateToMorse(string) {
  var str = string.toString();
  var englishArr = str.toUpperCase().split("");
  var firstLetter = true;
  var morseArr = englishArr.map(function (character) {
    if (firstLetter || character == " ") {
      firstLetter = false;
      return morseCode[character];
    } else {
      return " " + morseCode[character];
    }
  });
  var morse = morseArr.join("");
  return morse;
};

exports.translateToMorse = translateToMorse;