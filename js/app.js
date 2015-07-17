$(function() {
	$('#tweet-controls').hide();


	//show controls and get bigger when input is clicked on
	$('#tweet-content').on('click', function() {
		$('#tweet-controls').show("fast");
		$('#main-compose').css("height", "5em");
	})

	//reverse above code
	$('#tweet-content').on('focusout', function() {
		$('#tweet-controls').hide("fast");
		$('#main-compose').css("height", "2.5em");
	})

	//change char counter and submit button based on characters used
	$('body').on('keyup', '.tweet-compose', function() {
		var numChars = $('.tweet-compose').val().length;
		$('#char-count').text(140-numChars);
		if (numChars >= 130) {
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', 'black');
		}
		//disable and enable button
		if (numChars >= 141) {
			$('#tweet-submit').attr('disabled', 'disabled');
		} else {
			$('#tweet-submit').removeAttr('disabled');
		}
	})
})