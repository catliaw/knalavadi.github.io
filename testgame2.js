$(document).ready(function(){



      function twoCardsFaceUp(){
        return $(".upcard").length == 2;
      }
      
      function cardsMatch(){
        return $(".upcard:eq(0)").text() == $(".upcard:eq(1)").text();
      };
      
      function markCardsAsMatched(){
        $(".upcard").each(function(){
          $(this).addClass("matched").removeClass("upcard").off("click");
        });
        console.log("matched!");
      };
      
      // function updateScore(player){
      //   var el = $(player).find(".noPairs");
      //   var p = Number(el.text());
      //   el.text(p+1);
      // }
      
      function allCardsMatched(){
        return ($(".matched").length == 16)
      };
      
      function flipCardsBackOver(){
        setTimeout(function(){
          $(".upcard").each(function(){
            $(this).addClass("downcard").removeClass("upcard");
          });
        }, 1000);
      }
      
      function shuffle(cards){
        // Uses Fisher&#8211;Yates shuffle
        // See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
        var i = cards.length, j, tempi, tempj;
        if ( i == 0 ) return false;
        while ( --i ) {
          j = Math.floor( Math.random() * ( i + 1 ) );
          tempi = cards[i];
          tempj = cards[j];
          cards[i] = tempj;
          cards[j] = tempi;
        }
        return cards;
      }
      
      // function highlightCurrentPlayer(player){
      //   $("#playerInfo p").each(function(){
      //     if ($(this).hasClass("active")){
      //       $(this).removeClass("active");
      //     }
      //   });
      //   $(player).find("p").first().addClass("active");
      // }
      
      function incrementTurns(player){
        var el = $(player).find(".noTurns");
        var t = Number(el.text());
        el.text(t+1);
      }
      
      // function updateCurrentPlayer(player){
      //   currentPlayer = (currentPlayer.match(/1/))? "#player2" : "#player1"
      // }
      
      // function winner(){
      //   var playerOnePoints = Number($("#player1").find(".noPairs").text());
      //   var playerTwoPoints = Number($("#player2").find(".noPairs").text());
      //   if (playerOnePoints > playerTwoPoints){
      //     return "Player one won!";
      //   } else if (playerOnePoints < playerTwoPoints){
      //     return "Player two won!";
      //   } else {
      //     return "An honourable draw!";
      //   }
      // }
      
      // Shuffle cards
      var cards = $(".card");
      cards.remove();
      cards = shuffle(cards);
      cards.appendTo($("#Playfield"));
      
      // Main Loop
      $('.card').on("click", function(){
        if ($(".upcard").length == 2){
          return false;
        }
  
        $(this).removeClass("downcard").addClass("upcard");
        
        if (twoCardsFaceUp()){
          incrementTurns(currentPlayer);
          if (cardsMatch()){
            markCardsAsMatched()
            if (allCardsMatched()){
              $('#winText').text('You Won!');
              clock.stop();
              console.log('all cards matched!');
            }
          }else{
            flipCardsBackOver();
            updateCurrentPlayer(currentPlayer);
            setTimeout(function(){highlightCurrentPlayer(currentPlayer)}, 1000);
          }
        }
      });
      
      $("#reset").click(function(){
        location.reload();
      });
      
      $(".card").each(function(){
        var num = $(this).data("face");
        $(this).text(num);
      });
      
      var clock = $('.your-clock').FlipClock(0, {
          clockFace: 'MinuteCounter',
          autoStart: false  
      });

      $('#Playfield').one("click", function(){
        clock.start();
      });

      var currentPlayer = "#player1";
      highlightCurrentPlayer(currentPlayer);



      });