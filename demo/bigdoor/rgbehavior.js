(function() {
function dump(o) { if(typeof(o) == 'object') { var buf = "{"; for(f in o) buf += f + ":" + dump(o[f]); return buf + "}"; } else return ""+o; }
$.cookie = function (key, value, options) {if (arguments.length > 1 && String(value) !== "[object Object]") {options = jQuery.extend({}, options);if (value === null || value === undefined) {options.expires = -1;}if (typeof options.expires === 'number') {var days = options.expires, t = options.expires = new Date();t.setDate(t.getDate() + days);} value = String(value);return (document.cookie = [encodeURIComponent(key), '=',options.raw ? value : encodeURIComponent(value),options.expires ? '; expires=' + options.expires.toUTCString() : '',options.path ? '; path=' + options.path : '',options.domain ? '; domain=' + options.domain : '',options.secure ? '; secure' : ''].join(''));}options = value || {};var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;};

var host = window.location.hostname.replace(/\./g, '_'),
	path = "/bdtest/bigdoor/" + host,
	cvisit = "rgbd-visits",
	previous_visits = $.cookie(cvisit) || 0,
	loggedin = false;
	
function event(name, properties) {
	var event = {},
		p = { loggedin : loggedin };
	event[name] = p;
	if(properties)
		for(field in properties)
			p[field] = properties[field];
	return { events : event };
}

function track(name, properties)
{
	ReportGrid.track(name, properties, console.log);
}

$(document).ready(function() { window.setTimeout(function() {

BDM.auth.status(function(status) {
loggedin = !!status;
// ENGAGEMENT
track(path, event("engagement", { previousVisits : previous_visits }));
// FIRST ENGAGEMENT
if(!previous_visits)
	track(path, event("first_engagement"));

$.cookie(cvisit, ++previous_visits, { expires: 365, path: '/' });

// ADD MOUSE OVER/CLICK EVENTS
$('.bd-bar').mouseenter(function() { track(path, event("over_bar")); });
$('.bd-branding-picture')
	.mouseenter(function() { track(path, event("over_bigdoor")); })
	.click(function() { track(path, event("click_bigdoor")); });
$('.bd-login-facebook')
	.mouseenter(function() { track(path, event("over_login")); })
	.click(function() { track(path, event("click_login")); });
$('.bd-checkin')
	.mouseenter(function() { track(path, event("over_checkin")); })
	.click(function() { track(path, event("click_checkin")); });
$('.bd-linkshare')
	.mouseenter(function() { track(path, event("over_linkshare")); })
	.click(function() { track(path, event("click_linkshare")); });	
$('.bd-deals')
	.mouseenter(function() { track(path, event("over_deals")); })
	.click(function() { track(path, event("click_deals")); });
$('.bd-badges')
	.mouseenter(function() { track(path, event("over_badges")); })
	.click(function() { track(path, event("click_badges")); });
$('.bd-help')
	.mouseenter(function() { track(path, event("over_help")); })
	.click(function() { track(path, event("click_help")); });

$('.bd-toggler')
	.mouseenter(function() { track(path, event(open ? "over_close" : "over_open")); })
	.toggle(
		function() { track(path, event("close_bar")); }, 
		function() { track(path, event("open_bar")); }
	);

// LOGIN/LOGOUT
var login = BDM.auth.login,
	logout = BDM.auth.logout;
BDM.auth.login = function(end_user_login, callback) {
	track(path, event("login"));
	login(end_user_login, callback);
};

BDM.auth.logout = function(callback) {
	track(path, event("logout"));
	logout(callback);
};

});

}, 3000)});

})();

// PROPERTIES
// FACEBOOK LOGGED IN
// FACEBOOK LOGGED OUT
// TIME ON PAGE
// TIME ON WIDGET