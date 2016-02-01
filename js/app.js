//variables for all the functions 
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

//scoreboard that will keep track on the score of the players
  function updateScoreBoard() {
    $('#score1').text(player1Score);
    $('#score2').text(player2Score);
  }

//create a reset button that will reset the scores to 0's
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

//allocating keys A and L as two players that allow a snap 
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

//Stop the game at 5 snaps, Mike helped with this function
  function clearTimers() {
    if(snapCount === 5) {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }
  }

//Randomly select the cards for the game. Allocate images to the card names in the array. Timer to rotate the cards every 2 seconds
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
 


