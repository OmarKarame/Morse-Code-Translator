export const morseCode = {
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
 }



export const translateToMorse = (string) => {
    let str = string.toString()
    let englishArr = str.toUpperCase().split("");
    let firstLetter = true;
    let morseArr = englishArr.map(character => {
        if (character == " "){
            return morseCode[character] + "";
        }
        else if(firstLetter){
            firstLetter = false;
            return morseCode[character];
        }
        // else if(character === englishArr[englishArr.length - 1]){
        //     return morseCode[character];
        // }
        else{
            return  " " + morseCode[character];
        }
        })
        let morse = morseArr.join("");
        return morse; 
}




// split the string into a character per element in an array.
// use the for each array iteration to determine what each character is
// each character will be checked against a switch case and the correct translation should be added to a new array
// If the character is a space then there will be two spaces between the previous symbols and the next ones
// If the character is a spcace but the previous character was a space the function should move to the next character without adding anything to the new array
// Same thing with all the symbols
// The final array must be joined as a whole string and displayed on the console
// make sure after every newly added character, there is a space and forward slash before it (ie. add " / " + ".--." to array)