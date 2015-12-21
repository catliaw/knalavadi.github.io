$(document).ready(function(){

  //DEFINE FUNCTIONS

  //Function that returns if 2x of class "upcard" in the HTML code
  function twoCardsFaceUp(){
    return $(".upcard").length == 2;
  }
  
  //Function that returns if the 2 class "upcard" cards match (number on the card which is in text)
  function cardsMatch(){
    return $(".upcard:eq(0)").text() == $(".upcard:eq(1)").text();
  };
  
  //Function that gives matching cards a class of "matched", removes class "upcard", and turns of "click" eventcaller
  function markCardsAsMatched(){
    $(".upcard").each(function(){
      $(this).addClass("matched").removeClass("upcard").off("click");
    });
    console.log("matched!");
  };
  
  //Function that returns if all cards have class matched (16 cards, so 16 class "matched" in HTML code)
  function allCardsMatched(){
    return ($(".matched").length == 16)
  };
  
  //Function that flips card over by adding the class "downcard" and removing the class "upcard"
  function flipCardsBackOver(){
    setTimeout(function(){
      $(".upcard").each(function(){
        $(this).addClass("downcard").removeClass("upcard");
      });
    }, 1000);
  }

  function shuffle(cards){
    // Uses Fisher-Yates shuffle
    // See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
    var i = cards.length, j, tempi, tempj;
    if ( i == 0 ) return false; //If the number of cards (with "cards" class... defined below) = 0 
    while ( --i ) { // Decrementing i by 1 per loop
      j = Math.floor( Math.random() * ( i + 1 ) );
      tempi = cards[i];
      tempj = cards[j];
      cards[i] = tempj;
      cards[j] = tempi; //shuffle 2 times?
    }
    return cards;
  }
  //END FUNCTION DEFINITONS
  
  //START JS MANIPULATIONS

  // Shuffle cards
  var cards = $(".card"); //variable cards = elements in HTML with "cards" class
  cards.remove(); //remove elements with "card" class from HTML
  cards = shuffle(cards); //put elements with "card" class in shuffle function
  cards.appendTo($("#Playfield")); //Add the shuffled "card" classes to "Playfield" id (<div>)
  
  // Main Loop
  $('.card').on("click", function(){
    //Limits clicks allowed to 2, will not run loop if more than 2 classes of "upcard"
    if ($(".upcard").length == 2){
      return false;
    }
    //If less than 2 cards already have "upcard" class, then remove "downcard" class and add "upcard" class
    $(this).removeClass("downcard").addClass("upcard");
    
    //If 2 cards have class of "upcard"
    if (twoCardsFaceUp()){
      //If these 2 cards have matching text (and therefor matching background images)
      if (cardsMatch()){
        //then mark cards as matched (add "matched" class, remove "upcard" class, turn off click funtionality)
        markCardsAsMatched()
        //then if all cards are matched (16x "upcard" class present in HTML)
        if (allCardsMatched()){
          //Set "You won" text
          $('#winText').text('You Won!');
          //Stop the flipclock
          clock.stop();
          console.log('all cards matched!');
        }
      }else{
        //else (not matching), flip cards back over (add "downcard" class and remove "upcard" class)
        flipCardsBackOver();
      }
    }
  });
  
  //Refreshes the page when click on link with "reset" id
  $("#reset").click(function(){
    location.reload();
  });
  
  //Extracts the data stored in class "data-face" and prints the value in the corresponding <div> as text
  $(".card").each(function(){
    var num = $(this).data("face");
    $(this).text(num);
  });
  
  //Setting flipclock to start at 0, minute counter interface, and not autostart.
  var clock = $('.your-clock').FlipClock(0, {
      clockFace: 'MinuteCounter',
      autoStart: false  
  });

  //Setting the flipclock to start when any area within #Playfield <div> is clicked
  $('#Playfield').one("click", function(){
    clock.start();
  });


});