$(document).ready(function(){
  var cards = ["A", "2", "3", "4", "5", "6"];
  var currentCard1;
  var currentCard2;
  var snapped = false;
  var player1Score = 0;
  var player2Score = 0;
  var $box2 = $('#box2');
  var $box3 = $('#box3');
  var timer1;
  var timer2;
  var snapCount = 0;

  function updateScoreBoard() {
    $('#score1').text(player1Score);
    $('#score2').text(player2Score);
  }


  $("#reset").click(function() {
    console.log("reset");
    currentCard1 = null;
    currentCard2 = null;
    player1Score = 0;
    player2Score = 0;
    timer1;
    timer2;
    snapCount = 0;
    clearTimers();
    updateScoreBoard();
  });

  $(window).on("keyup", checkKeyPressed);
  function checkKeyPressed(e) {
    if(currentCard1 === currentCard2) {
      if (e.keyCode === 65 && !snapped) {
        snapped = true;
        player1Score += 1;
        snapCount += 1;
        updateScoreBoard();
        clearTimers();
      }
      else if (e.keyCode === 76 && !snapped) {
        snapped = true;
        player2Score += 1;
        snapCount += 1;
        updateScoreBoard();
        clearTimers();
      }
    }
  }

  $('textarea').first().keypress(function (e)
  {
      if (e.which === 13) console.log('player1 enter key pressed');
  }).nextAll().keypress(function (e)
  {
      if (e.which === 13) console.log('player2 enter key pressed');
  });

  function clearTimers() {
    if(snapCount === 5) {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }
  }

  timer1 = setInterval(function(){   
    var randomIndex1 = Math.floor((Math.random()*6));
    currentCard1 = cards[randomIndex1]
    snapped = false;
    $box2.css('background-image','url(images/' + currentCard1 + '.png)'); 
  }, 2000);

  setTimeout(function() {
    timer2 = setInterval(function(){  
      var randomIndex2 = Math.floor((Math.random()*6));
      currentCard2 = cards[randomIndex2];
      snapped = false;
      $box3.css('background-image','url(images/' + currentCard2 + '.png)');    
    }, 2000);
  }, 1000);
});
 


//setInterval to run a loop every 2's === 2000 until a snap occurs, the loop will keep going until someone has won the best of 3

//win logic to register a winner and to play to 3 and mark the wins up on a scoreboard, and assign the A and L keys to player 1 and player 2  
    

// var snap = cards[randomIndex1] === cards[randomIndex2]


//keys a and l used on the keyboard to allow 2 players to play the game

  // if (currentCard1 === currentCard2)
  //   {
  // return snap;
  // }


// function winner(point) {
//    if (e.keyCode === 65 && currentCard1 === currentCard2)
//      console.log("win")
//    else (e.keyCode === 76 && currentCard1 === currentCard2)
//      console.log("win")
//  }


   //function snapHappened() {
    //if 
  //}

  
  

 

  //eventlisteners that register the a and l key being clicked to register a snap
  

 //function dealCards() {
   // cards = setInterval(currentCard1 && currentCard2,500)
  //}

 //for(var i=snap; i=cards1[randomIndex1] === cards2[randomIndex2]; i++) {
   //console.log("snap");
 //}

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



