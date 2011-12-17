var defaultUser = 'mrmartineau';

//show loading graphic
function loading() {
	$('.wrappers').addClass('loading');
}

//hide loading graphic
function loaded() {
	$('.wrappers').removeClass('loading');
}

function loadUser(username) {
	//
	loading();
	//
	//	Watched repos
	//
	$.ajax({
		url: "https://api.github.com/users/" + username +"/watched?page=1&per_page=100&callback=?",
		context: '#watched',
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
			}).appendTo('#watched');
			loaded();
		}
	});

	//
	//	Your repos
	//
	$.ajax({
		url: "https://api.github.com/users/" + username +"/repos?page=1&per_page=100&callback=?",
		context: '#your',
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
			}).appendTo('#your');
			loaded();
		}
	});
}

$('.wrappers').each(function(){
	loading();
});

(function($) {

	//same as $(document).ready();
	$(function() {
		loadUser(defaultUser);

		//query string
		var qsArray = window.location.href.split('?');
		var qs = qsArray[qsArray.length-1];

		if(qs != '' && qsArray.length > 1){
			$('.wrappers ol').remove();
			loading();
			$('#username_entry').val(qs);
			loadUser(qs);
		}
		//when the url textbox is used
		$('form').submit(function(){
			$('.wrappers ol').remove();
			loading();
			loadUser($('#username_entry').val());
			return false;
		});




	});//End Doc Ready

})(jQuery);