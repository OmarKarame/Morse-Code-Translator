"use strict";

var _translator = require("./translator");

describe('Testing translateToMorse, should turn a into .-', function () {
  it("a should translate to .-", function () {
    // Arrange
    var str; // Act

    str = 'a';
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe('.-');
  });
});
describe('Testing translateToMorse, should turn a into .- not .- / ', function () {
  it("a should not translate to .- / ", function () {
    // Arrange
    var str; // Act

    str = 'a';
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).not.toBe('.- / ');
  });
});
describe('Testing translateToMorse, should turn x into -..-', function () {
  it("x should translate to -..-", function () {
    // Arrange
    var str; // Act

    str = 'x';
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe('-..-');
  });
});
describe('Testing translateToMorse, should turn X into -..-', function () {
  it("X should translate to -..-", function () {
    // Arrange
    var str; // Act

    str = 'X';
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe('-..-');
  });
});
describe('Testing translateToMorse, should turn omar into --- -- .- .-.', function () {
  it("omar should translate to --- -- .- .-.", function () {
    // Arrange
    var str; // Act

    str = 'omar';
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe('--- -- .- .-.');
  });
});
describe('Testing translateToMorse, should turn karame into -.- .- .-. .- -- .', function () {
  it("karame should translate to -.- .- .-. .- -- .", function () {
    // Arrange
    var str; // Act

    str = 'karame';
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe('-.- .- .-. .- -- .');
  });
});
describe('Testing translateToMorse, should turn string 12 into .---- ..---', function () {
  it("12 should translate to .---- ..---", function () {
    // Arrange
    var str; // Act

    str = '12';
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe('.---- ..---');
  });
});
describe('Testing translateToMorse, should turn int 21 into ..--- .----', function () {
  it("21 should translate to ..--- .----", function () {
    // Arrange
    var _int; // Act


    _int = 21;
    var result = (0, _translator.translateToMorse)(_int); // Assert

    expect(result).toBe('..--- .----');
  });
});
describe('Testing translateToMorse, should print the contents of the array', function () {
  it("[0, 1, 3] should print ----- --..-- .---- --..-- ...--", function () {
    // Arrange
    var arr; // Act

    arr = [0, 1, 3];
    var result = (0, _translator.translateToMorse)(arr); // Assert

    expect(result).toBe('----- --..-- .---- --..-- ...--');
  });
});
describe('Testing translateToMorse, should turn omar karame is coding. into --- -- .- .-. / -.- .- .-. .- -- . / .. ... / -.-. --- -.. .. -. --. .-.-.-', function () {
  it("This is being translated to morse! should translate to - .... .. ... / .. ... / -... . .. -. --. / - .-. .- -. ... .-.. .- - . -.. / - --- / -- --- .-. ... . -.-.--", function () {
    // Arrange
    var str; // Act

    str = 'This is being translated to morse!';
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe('- .... .. ... / .. ... / -... . .. -. --. / - .-. .- -. ... .-.. .- - . -.. / - --- / -- --- .-. ... . -.-.--');
  });
});
describe('Testing translateToMorse, should turn Is Omar Karame coding? into .. ... / --- -- .- .-. / -.- .- .-. .- -- . / -.-. --- -.. .. -. --. ..--..', function () {
  it("Is Omar Karame coding? should translate to .. ... / --- -- .- .-. / -.- .- .-. .- -- . / -.-. --- -.. .. -. --. ..--..", function () {
    // Arrange
    var str; // Act

    str = 'is omar karame coding?';
    var result = (0, _translator.translateToMorse)(str); // Assert

    expect(result).toBe('.. ... / --- -- .- .-. / -.- .- .-. .- -- . / -.-. --- -.. .. -. --. ..--..');
  });
}); // test if the function displays the correct letter (test 2 letters) 1 2 3
// test if the numbers being passed into the array will break the function
// test if a true or false boolean statement will break the function or return the spelling of the words
// test if the function cannot identify what is being inputed by the user (not a string eg. array)
// test if the input is a blank string.
// test if the function displays the correct word (test 2 words of different lengths) 4 5 6 
// test if the function displays the correct sentence (test 3 sentences, one with a comma and full stop, one with an exclamation mark, one with a question mark) 7 8 9 
// test the punctuation (. , ? ' ! / ( ) & : ; = + - _ " $ @) 10 11 12
// test that the spaces are correct (no spaces after each code)
// regards capital letters as regular letters