$(document).ready(function(){
	var count = 0;
	$('textarea').keyupfunction(){
		count = $(this).val().length;
		$(char-count).text(count);
		
	}
})