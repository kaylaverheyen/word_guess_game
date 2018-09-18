//make an array of random words
var phrases = [
    "Ramen",
    "Spaghetti",
    "Cheeseburger",
    "Fried Chicken",
    "Sub Sandwich",
    "Egg Roll",
    "Sushi",
    "French Fries",
    "Steak",
];
// chose a random word 
    var chosenWord = phrases[1];
   // math.random => 1.32342342
   // math.floor(..) => 1
    Math.random() * max 
// display one asterik per letter on the screen
// for a specific word

//set variable for guesses ie 15 guess
//start count loop for number of guesses --??
var wins = 0;
var numberOfGuessesRemaining = 15;
var lettersGuessed = "";

//variables that reference html
var directionText = document.getElementById("Press any letter key to guess!");
var lettersGuessed = document.getElementById("Letters-Guessed");
var winsText = document.getElementById("wins-text");
var guessesRemaining = document.getElementById("guesses-remaining");
 

// select the element from the DOM
// using document 
var asteriskSpan = document.getElementById("asterisks");
var asterisksWord = "";
for (var i = 0; i < chosenWord.length; i++) {
    asterisksWord += "*";
asteriskSpan.innerText = asterisksWord
}
// ----var found = chosenWord.find() ????


//take user input and check it against
document.onkeyup = function(event) {
    var lettersGuessed = event.key;
}
 
    // if user inputs a letter it checks to see if it is correct and then it appears. 
        // -if false the letter appears and an asterisk appears user index of for letters contained
        // 
// the specific word

// Loop:

//take user input
//check input to see if it correct
//for (var i = 0; i < chosenWord.length; i++) 
    //if ()
    //asterisksWord.innerText = lettersGuessed


// if yes, fill a letter 
////if no, fail
//then state guesses
// no guesses left they lost-- reset use OBJECT 

//document.activeElement


//if they press the correct letter-- it appears, look for letter function (indexOf!!!!)
//loop over the string, replace asteriks with letter, if not correct then put letter on to 

///RESET
//win or lose
//numbewr of guesses 
//need to 