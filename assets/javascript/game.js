


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
   var chosenWord = phrases[Math.floor(Math.random() * phrases.length)];
   console.log("cw", chosenWord);
   console.log("cwp", chosenWord[1]);
   
// display one asterik per letter on the screen

var wins = 0;
var numberOfGuessesRemaining = 15;
// var letterGuessed = "";
var letterGuessedArr = [];
var userGuess = "";


//variables that reference html
var directionText = document.getElementById("Press any letter key to guess the word!");
var lettersGuessed = document.getElementById("letters-guessed");
var winsText = document.getElementById("wins-text");
var guessesRemaining = document.getElementById("guesses-remaining");
 

// select the element from the DOM
// using document 
var asteriskSpan = document.getElementById("asterisks");
var asterisksWord = "";
for (var i = 0; i < chosenWord.length; i++) {
    asterisksWord += "*";
}
asteriskSpan.innerText = asterisksWord
var astWordArr = asterisksWord.split('');
console.log("aw", asterisksWord[1]);

//make the wins an object and guesses left an object-- use this.wins +

  // if user inputs a letter it checks to see if it is correct and then it appears.
//take user input and check it against
document.onkeyup = function(event) {
   userGuess = event.key;
   console.log("user guess", userGuess);
    letterGuessedArr.push(userGuess);
    console.log("lga", letterGuessedArr);
    lettersGuessed.innerText += userGuess;
    verify();
}
    //if (letterGuessed = chosenWord[i]);{
        // print(letterGuessed);
        
        //take user input
        //check input to see if it correct
        //for (var i = 0; i < chosenWord.length; i++) 
        //if ()
        //asterisksWord.innerText = lettersGuessed
        function verify() {
        for (var j = 0; j < chosenWord.length; j++){
            console.log("sw4l", chosenWord);
            console.log("cw4p", chosenWord[j]);
            console.log("ug4l", userGuess);

            if(userGuess === chosenWord[j]){
               // alert("Yeah");
                asterisksWord.splice(j, 1, userGuess);
                 console.log("awG", asterisksWord);
            }
        }
    }
        
// else 
  // print(asterisksWord)




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