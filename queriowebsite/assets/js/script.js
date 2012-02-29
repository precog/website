$(function(){

	var note = $('#note'),
		ts = new Date("2012/02/29 09:00:00 PST"),
		newYear = true;

	if((new Date()) > ts){
		ts = (new Date()).getTime() + 10*24*60	*60*1000;
		newYear = false;
	}

	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){

			var message = "";

			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

			note.html(message);
		}
	});

});