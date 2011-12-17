// Helpers
Date.prototype.format=function(format){var returnStr='';var replace=Date.replaceChars;for(var i=0;i<format.length;i++){var curChar=format.charAt(i);if(replace[curChar]){returnStr+=replace[curChar].call(this);}else{returnStr+=curChar;}}return returnStr;};Date.replaceChars={shortMonths:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],longMonths:['January','February','March','April','May','June','July','August','September','October','November','December'],shortDays:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],longDays:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d:function(){return(this.getDate()<10?'0':'')+this.getDate();},D:function(){return Date.replaceChars.shortDays[this.getDay()];},j:function(){return this.getDate();},l:function(){return Date.replaceChars.longDays[this.getDay()];},N:function(){return this.getDay()+1;},S:function(){return(this.getDate()%10==1&&this.getDate()!=11?'st':(this.getDate()%10==2&&this.getDate()!=12?'nd':(this.getDate()%10==3&&this.getDate()!=13?'rd':'th')));},w:function(){return this.getDay();},z:function(){return"Not Yet Supported";},W:function(){return"Not Yet Supported";},F:function(){return Date.replaceChars.longMonths[this.getMonth()];},m:function(){return(this.getMonth()<11?'0':'')+(this.getMonth()+1);},M:function(){return Date.replaceChars.shortMonths[this.getMonth()];},n:function(){return this.getMonth()+1;},t:function(){return"Not Yet Supported";},L:function(){return"Not Yet Supported";},o:function(){return"Not Supported";},Y:function(){return this.getFullYear();},y:function(){return(''+this.getFullYear()).substr(2);},a:function(){return this.getHours()<12?'am':'pm';},A:function(){return this.getHours()<12?'AM':'PM';},B:function(){return"Not Yet Supported";},g:function(){return this.getHours()%12||12;},G:function(){return this.getHours();},h:function(){return((this.getHours()%12||12)<10?'0':'')+(this.getHours()%12||12);},H:function(){return(this.getHours()<10?'0':'')+this.getHours();},i:function(){return(this.getMinutes()<10?'0':'')+this.getMinutes();},s:function(){return(this.getSeconds()<10?'0':'')+this.getSeconds();},e:function(){return"Not Yet Supported";},I:function(){return"Not Supported";},O:function(){return(this.getTimezoneOffset()<0?'-':'+')+(this.getTimezoneOffset()/60<10?'0':'')+(this.getTimezoneOffset()/60)+'00';},T:function(){return"Not Yet Supported";},Z:function(){return this.getTimezoneOffset()*60;},c:function(){return"Not Yet Supported";},r:function(){return this.toString();},U:function(){return this.getTime()/1000;}};
function chat_string_create_urls(input)
{
	return input
	.replace(/(ftp|http|https|file):\/\/[\S]+(\b|$)/gim,
'<a href="$&" class="my_link" target="_blank">$&</a>')
	.replace(/([^\/])(www[\S]+(\b|$))/gim,
'$1<a href="http://$2" class="my_link" target="_blank">$2</a>');
}
function get_relative_time(obj){
	var b=obj.split(" ");
	obj=b[1]+" "+b[2]+", "+b[5]+" "+b[3];
	var a=Date.parse(obj);
	var d=(arguments.length>1)?arguments[1]:new Date();
	var e=parseInt((d.getTime()-a)/1000);
	e=e+(d.getTimezoneOffset()*60);
	if(e<60){return"less than a minute ago"}else{if(e<120){return"about a minute ago"}else{if(e<(60*60)){return(parseInt(e/60)).toString()+" minutes ago"}else{if(e<(120*60)){return"about an hour ago"}else{if(e<(24*60*60)){return"about "+(parseInt(e/3600)).toString()+" hours ago"}else{if(e<(48*60*60)){return"1 day ago"}else{return(parseInt(e/86400)).toString()+" days ago"}}}}}}
}