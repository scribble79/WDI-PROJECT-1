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


var cards = ["A", "2", "3", "4", "5", "6"]


//setInterval from line 19 to line 35 to run a loop every 2's === 2000 until a snap occurs, the loop will keep going until someone has won the best of 3

 function dealCards() {
    cards = setInterval()
  }

  var randomIndex1 = Math.floor((Math.random()*6));

  var currentCard1 = cards[randomIndex1]

  console.log(currentCard1)


  var randomIndex2 = Math.floor((Math.random()*6));

  var currentCard2 = cards[randomIndex2]

  console.log(currentCard2)



var snap = cards[randomIndex1] === cards[randomIndex2]


//for(var i=snap; i=cards1[randomIndex1] === cards2[randomIndex2]; i++) {
  //console.log("snap");
//}


  if (currentCard1 === currentCard2){
    console.log("snap")
  }

 

  


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
//deal a pack of cards and start a game
//start turning the cards over 
//register which player hit key a or l first 
//write a loop to make the cards to keep turning until two cards match
//when 2 cards match get a snap
//winner logic to get winner



