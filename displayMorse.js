import {translateToMorse} from "./translator.js";

const translate = document.querySelector('#btn');
const morseDisplay = document.querySelector('#morse');
const englishDisplay = document.querySelector('#english');

let translation = () => {
    let string = document.querySelector('#word-input').value;

    morseDisplay.innerHTML = translateToMorse(string);

    englishDisplay.innerHTML = ``;
    englishDisplay.innerHTML += `${string}`    
}

translate.addEventListener("click", translation)