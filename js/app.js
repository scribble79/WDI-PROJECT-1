$(document).ready(function(){

  $(window).on("keyup", checkKeyPressed);
   
  function checkKeyPressed(e) {
    if (e.keyCode === 65) {
        console.log("The 'a' key is pressed.");
    }
    else if (e.keyCode === 76) {
     console.log("The 'l' key is pressed.");
    }
  }
});


var cards = ["A", "2", "3", "4", "5"]

var ramdomIndex = Math.floor((Math.random()*5));

var currentCard = cards [ramdomIndex]

console.log(currentCard)
 

  


//Snap game
//2 player game
//Snap animation
//Inputs for player 1 and player 2 to input their names
//create a textarea tag for players to write their names in, this needs to assign the data input to player 1 and player 2

//Let's play
//computer deals the pack of cards, animation of cards flicking and sounds
//computer starts turning oevr the cards from either side revealing 

// keyup events
//math.random for 5 cards in an array
// var for last card and current card
// when key is fired if previous card and current card is = then that player wins
// var for player 1 and player 2 score
//use console to log everything 

// assign keys a and l to keyup events
