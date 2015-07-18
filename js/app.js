$(function() {
	$("abbr.timeago").timeago();
	$('#tweet-controls, .tweet-actions, .stats').hide();

	//show tweet actions on mouse over and hide on mouse out
	$('.tweet').on('mouseover', function() {
		$('.tweet-actions', this).show('fast');
	})

	$('.tweet').on('mouseleave', function() {
		$('.tweet-actions', this).hide('fast');
	})

	//show controls and get bigger when input is clicked on
	$('#main-compose').on('click', function() {
		$('#tweet-controls').show("fast");
		$('#main-compose').css("height", "5em");
	})

	$('#dashboard').on('focusout', function() {
		if (!$('#main-compose').val()) {
			$('#tweet-controls').hide("fast");
			$('#main-compose').css("height", "2.5em");
		}
	})

	//show stats on click
	$('.tweet').on('click', function() {
		$('.stats', this).toggle('fast')
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

	//insert tweet in main feed when button is clicked
	$('#tweet-submit').on('click', function(e) {
		e.preventDefault();
		var d = new Date();
		var isoDate = d.toISOString();
		var message = $('#main-compose').val();
		$('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Bob </strong><span class="username">@bob</span><p class="tweet-text">' + message + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span>Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">0</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">0</p><p>FAVORITES</p></div><div class="users-interact"><div></div></div><abbr class="timeago" title="' + isoDate + '">' + $.timeago(new Date()) + '</abbr></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @bob"/></textarea></div></div></div>');
		$('#tweet-controls').hide("fast");
		$('#main-compose').css("height", "2.5em");
		$('#main-compose').val('')
	});
})