export const translateToMorse = (str) => {
    
}

// split the string into a character per element in an array.
// use the for each array iteration to determine what each character is
// each character will be checked against a switch case and the correct translation should be added to a new array
// If the character is a space then there will be two spaces between the previous symbols and the next ones
// If the character is a spcace but the previous character was a space the function should move to the next character without adding anything to the new array
// Same thing with all the symbols
// The final array must be joined as a whole string and displayed on the console
// make sure after every newly added character, there is a space and forward slash before it (ie. add " / " + ".--." to array)