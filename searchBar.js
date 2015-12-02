$(document).ready(function(){
		var count = 0;
		$('textarea').keyup(function(){
			count = $(this).val().length;
			$('char-count').text(count);

			if(count <140){
				$('.response').text("tweetable")
			}
			
			if(count >140 && count <160){
				$('.response').text("textable");
			}	
			if(count > 160){
				$('.response').text("send an email");
			}

		})
	$('#tweetButton').click(function(){
		$.get('http://numbersapi.com/random/trivia', function(data){
		console.log('random tweet:', data);
		$('#randomTweet').text(data);
		});
	});

});

// http://eviltrailmix.com/tweet/
				
		
	
// });
// $(document).ready(main)