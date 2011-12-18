var defaultUser = 'mrmartineau';

//show loading graphic
function loading() {
	$('.wrappers').addClass('loading');
}

//hide loading graphic
function loaded() {
	$('.wrappers').removeClass('loading');
}

function loadUserAndRepo(username, type, id) {
	loading();
	//
	// repos
	//
	$.ajax({
		url: "https://api.github.com/users/" + username +"/" + type +"?page=1&per_page=100&callback=?",
		context: id,
		dataType: "jsonp",
		success: function(data){
			var items = [];
			$.each(data.data, function(i,item){
				items.push('<li>'+
				'<a href="' + item.html_url +'" title="' + item.name +'" class="item_name">' + item.name +'</a>'+
				'<a href="' + item.owner.url +'" title="' + item.owner.login +'" class="item_owner">' + item.owner.login +'</a>'+
				'<div class="item_description">' + item.description +'</div>'+
				'<div class="item_language">' + item.language +'</div>'+
				'</li>');
			});
			$('<ol/>', {
				'class': 'ui_list',
				html: items.join('')
			}).appendTo(id).hide().fadeIn();
			loaded();
		}
	});
}

function loadGists(username, type, id) {
	loading();
	//
	// repos
	//
	$.ajax({
		url: "https://api.github.com/"+ type +"?page=1&per_page=100&callback=?",
		context: id,
		dataType: "jsonp",
		success: function(data){
			var items = [];
			$.each(data.data, function(i,item){
				items.push('<li>'+
				'<a href="' + item.html_url +'" title="gist: ' + item.id +'" class="item_name">gist: ' + item.id +'</a>'+
				'<a href="' + item.user.url +'" title="' + item.user.login +'" class="item_owner">' + item.user.login +'</a>'+
				'<div class="item_description">' + item.description +'</div>'+
				'</li>');
			});
			$('<ol/>', {
				'class': 'ui_list',
				html: items.join('')
			}).appendTo(id).hide().fadeIn();
			loaded();
		}
	});
}

(function($) {

	//same as $(document).ready();
	$(function() {
		// Load default user
		loadUserAndRepo(defaultUser, 'watched', '#watched');
		loadUserAndRepo(defaultUser, 'repos', '#your');
		loadGists(defaultUser, 'gists/starred', '#starred_gists');
		loadGists(defaultUser, 'users/mrmartineau/gists', '#your_gists');

		//query string
		var qsArray = window.location.href.split('?');
		var qs = qsArray[qsArray.length-1];

		if(qs !== '' && qsArray.length > 1){
			$('.wrappers ol').remove();
			loading();
			$('#username_entry').val(qs);
			loadUserAndRepo(qs, 'watched', '#watched');
			loadUserAndRepo(qs, 'repos', '#your');
			loadGists(qs, 'gists/starred', '#starred_gists');
			loadGists(qs, 'gists/public', '#your_gists');
		}
		//when the url textbox is used
		$('form').submit(function(){
			$('.wrappers ol').remove();
			loading();
			loadUserAndRepo($('#username_entry').val(), 'watched', '#watched');
			loadUserAndRepo($('#username_entry').val(), 'repos', '#your');
			loadGists($('#username_entry').val(), 'gists/starred', '#starred_gists');
			loadGists($('#username_entry').val(), 'gists/public', '#your_gists');
			return false;
		});

		// TABS from Skeleton (with my own ARIA sauce added)
		var tabs = $('ul.tabs');

		tabs.each(function (i) {
			//Get all tabs
			var tab = $(this).find('> li > a');
			tab.each(function (i) {
				var tabid = $(this).attr('href'),
					newTabid = tabid.slice(1);
				if (tabid.charAt(0) === '#') {
					$('#' + newTabid).each(function (i) {
						$(this).attr('aria-labelledby', newTabid + '_tab');
					});

					$(this).attr({
						role: 'tab',
						id: newTabid + '_tab'
					}).attr('aria-describedby', newTabid);
				}

			}).click(function (e) {
				var contentLocation = $(this).attr('href');
				if (contentLocation.charAt(0) === "#") {
					e.preventDefault();
					tab.removeClass('active');
					$(this).addClass('active');
					$(contentLocation).show()
						.attr('role', 'aria-selected')
						.addClass('active')
						.siblings()
						.attr('role', 'aria-hidden')
						.hide()
						.removeClass('active');
				}
			});
		}); //END TABS




	});//End Doc Ready

})(jQuery);