var defaultUser = 'mrmartineau';
var i = 100;

//show loading graphic
function loading() {
	$('.wrappers').addClass('loading');
}

//hide loading graphic
function loaded() {
	$('.wrappers').removeClass('loading');
}

function loadUserAndRepo(username, type, id) {
	i++;
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
				'class': '',
				html: items.join('')
			}).appendTo(id).hide().fadeIn();
			loaded();
		}
	});
}

(function($) {

	//same as $(document).ready();
	$(function() {
			loadUserAndRepo(defaultUser, 'watched', '#watched');
			loadUserAndRepo(defaultUser, 'repos', '#your');

		//query string
		var qsArray = window.location.href.split('?');
		var qs = qsArray[qsArray.length-1];

		if(qs !== '' && qsArray.length > 1){
			$('.wrappers ol').remove();
			loading();
			$('#username_entry').val(qs);
			loadUserAndRepo(qs, 'watched', '#watched');
			loadUserAndRepo(qs, 'repos', '#your');
		}
		//when the url textbox is used
		$('form').submit(function(){
			$('.wrappers ol').remove();
			loading();
			loadUserAndRepo($('#username_entry').val(), 'watched', '#watched');
			loadUserAndRepo($('#username_entry').val(), 'repos', '#your');
			return false;
		});




	});//End Doc Ready

})(jQuery);