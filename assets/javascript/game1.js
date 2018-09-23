
//alphabet array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//make an array of random words
var phrases = [
    "Ramen",
    "Spaghetti",
    "Cheeseburger",
    "Chicken",
    "Sandwich",
    "Pizza",
    "Sushi",
    "Fries",
    "Steak",
];
//global variables
var wins = 0;
var guessLimit = 12;

// chose a random word
   function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomWord() {
    var index = getRandomIndex(0, phrases.length);
    return phrases[index];
}
function asteriskWord(randomWord, correct) {
    var newString = "";
    for (let i = 0; i < randomWord.length; i++) {
        if (correct.includes(randomWord[i])) {
            newString += randomWord[i];
        } else {
            newString += "*";
        }
    }
    return newString;
}
function reset() {
    var word = getRandomWord()
    return {
        guesses: 0,
        currentWord: word,
        newWord: asteriskWord(word, []),
        correctLetters: [],
        incorrectLetters: []
    };
}
//variables that reference html and display stats
function displayStats(gameMode, wins) {
document.getElementById("Press any letter key to guess the word!").innerText = directionText;
document.getElementById("letters-guessed").innerText = lettersGuessed;
document.getElementById("wins-text").innerText = wins;
document.getElementById("guessesRemaining").innerText = guessLimit - gameMode.guesses;
document.getElementById("incorrect").innerText = gameMode.incorrectLetters;
document.getElementById("hidden").innerText = gameMode.newWord;
//document.getElementById("asterisks").innerText = gameMode.newWord;
//document.getElementById("losses").innerText = losses;
}
function hasWon(gameMode) {
    return !gameMode.newWord.includes("*");
}

function hasLost(gameMode) {
    return gameMode.guesses === guessLimit;
}

window.onload = function () {
    var wins = 0;
    
    var gameMode = reset();

    displayStats(gameMode, wins);

    document.onkeyup = function (event) {
        var key = event.key;
        var isInWord = gameMode.currentWord.includes(key);
        if (!alphabet.includes(key))
            return;
        if (isInWord) {
            if (!gameMode.correctLetters.includes(key)) {

                gameMode.correctLetters.push(key);
                var newHidden = asteriskWord(gameMode.currentWord, gameMode.correctLetters);
                gameMode.newWord = newHidden;
            }
        } else {
            if (!gameMode.incorrectLetters.includes(key)) {
                gameMode.incorrectLetters.push(key);
                gameMode.guesses += 1;
            }
        }
        if (hasWon(gameMode)) {
            wins++;
            alert("YOU WON!!");
            gameMode = reset();
        } 
        displayStats(gameMode, wins);
    }
}

   






