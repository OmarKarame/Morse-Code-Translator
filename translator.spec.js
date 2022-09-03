import { translateToMorse } from "./translator";

describe('Testing translateToMorse, should turn a into .-', () => {
    it("a should translate to .-", () => {
        // Arrange
        let str;
        // Act
        str = 'a';
        let result = translateToMorse(str);
        // Assert
        expect(result).toBe('.-');
    })
})

describe('Testing translateToMorse, should turn a into .- not .- / ', () => {
    it("a should not translate to .- / ", () => {
        // Arrange
        let str;
        // Act
        str = 'a';
        let result = translateToMorse(str);
        // Assert
        expect(result).shouldNot('.- / ');
    })
})

describe('Testing translateToMorse, should turn x into -..-', () => {
    it("x should translate to -..-", () => {
        // Arrange
        let str;
        // Act
        str = 'x';
        let result = translateToMorse(str);
        // Assert
        expect(result).toBe('-..-');
    })
})

describe('Testing translateToMorse, should turn X into -..-', () => {
    it("X should translate to -..-", () => {
        // Arrange
        let str;
        // Act
        str = 'X';
        let result = translateToMorse(str);
        // Assert
        expect(result).toBe('-..-');
    })
})

describe('Testing translateToMorse, should turn omar into --- -- .- .-.', () => {
    it("omar should translate to --- -- .- .-.", () => {
        // Arrange
        let str;
        // Act
        str = 'omar';
        let result = translateToMorse(str);
        // Assert
        expect(result).toBe('--- -- .- .-.');
    })
})

describe('Testing translateToMorse, should turn karame into -.- .- .-. .- -- .', () => {
    it("karame should translate to -.- .- .-. .- -- .", () => {
        // Arrange
        let str;
        // Act
        str = 'karame';
        let result = translateToMorse(str);
        // Assert
        expect(result).toBe('-.- .- .-. .- -- .');
    })
})

describe('Testing translateToMorse, should turn string 12 into .---- ..---', () => {
    it("12 should translate to .---- ..---", () => {
        // Arrange
        let str;
        // Act
        str = '12';
        let result = translateToMorse(str);
        // Assert
        expect(result).toBe('.---- ..---');
    })
})

describe('Testing translateToMorse, should turn int 21 into ..--- .----', () => {
    it("21 should translate to ..--- .----", () => {
        // Arrange
        let int;
        // Act
        int = 21;
        let result = translateToMorse(int);
        // Assert
        expect(result).toBe('..--- .----');
    })
})

describe('Testing translateToMorse, should print an error message if an array was inputed', () => {
    it("[0, 1, 3] should print Please enter strings and ints please.", () => {
        // Arrange
        let arr;
        // Act
        arr = [0, 1, 3];
        let result = translateToMorse(arr);
        // Assert
        expect(result).toBe('Please enter strings and ints please.');
    })
})

describe('Testing translateToMorse, should turn omar karame is coding. into --- -- .- .-. / -.- .- .-. .- -- . / .. ... / -.-. --- -.. .. -. --. .-.-.-', () => {
    it("omar karame is coding. should translate to --- -- .- .-. / -.- .- .-. .- -- . / .. ... / -.-. --- -.. .. -. --. .-.-.-", () => {
        // Arrange
        let str;
        // Act
        str = 'omar karame is coding.';
        let result = translateToMorse(str);
        // Assert
        expect(result).toBe('--- -- .- .-. / -.- .- .-. .- -- . / .. ... / -.-. --- -.. .. -. --. .-.-.-');
    })
})

describe('Testing translateToMorse, should turn Is Omar Karame coding? into .. ... / --- -- .- .-. / -.- .- .-. .- -- . / -.-. --- -.. .. -. --. ..--..', () => {
    it("Is Omar Karame coding? should translate to .. ... / --- -- .- .-. / -.- .- .-. .- -- . / -.-. --- -.. .. -. --. ..--..", () => {
        // Arrange
        let str;
        // Act
        str = 'Is Omar Karame coding?';
        let result = translateToMorse(str);
        // Assert
        expect(result).toBe('--- -- .- .-. / -.- .- .-. .- -- . / .. ... / -.-. --- -.. .. -. --. .-.-.-');
    })
})





// test if the function displays the correct letter (test 2 letters) 1 2 3
// test if the numbers being passed into the array will break the function
// test if a true or false boolean statement will break the function or return the spelling of the words
// test if the function cannot identify what is being inputed by the user (not a string eg. array)
// test if the input is a blank string.
// test if the function displays the correct word (test 2 words of different lengths) 4 5 6 
// test if the function displays the correct sentence (test 3 sentences, one with a comma and full stop, one with an exclamation mark, one with a question mark) 7 8 9 
// test the punctuation (. , ? ' ! / ( ) & : ; = + - _ " $ @) 10 11 12
// test that the spaces are correct (no spaces after each code)
// regards capital letters as regular letters