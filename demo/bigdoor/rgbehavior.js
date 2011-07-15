(function() {
function dump(o) { if(typeof(o) == 'object') { var buf = []; for(f in o) buf.push(f + ":" + dump(o[f])); return "{" + buf.join(",") + "}"; } else return ""+o; }
$.cookie = function (key, value, options) {if (arguments.length > 1 && String(value) !== "[object Object]") {options = jQuery.extend({}, options);if (value === null || value === undefined) {options.expires = -1;}if (typeof options.expires === 'number') {var days = options.expires, t = options.expires = new Date();t.setDate(t.getDate() + days);} value = String(value);return (document.cookie = [encodeURIComponent(key), '=',options.raw ? value : encodeURIComponent(value),options.expires ? '; expires=' + options.expires.toUTCString() : '',options.path ? '; path=' + options.path : '',options.domain ? '; domain=' + options.domain : '',options.secure ? '; secure' : ''].join(''));}options = value || {};var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;};

var host = window.location.hostname.replace(/\./g, '_'),
	path = "/bdtest/bigdoor/" + host,
	cvisit = "rgbd-visits",
	previous_visits = $.cookie(cvisit) || 0,
	loggedin = false,
	dcount = 0.5;

function track(path, event, properties)
{
	var e = {},
		durationrange = dcount <= 2 ? "" + dcount : (((dcount/2)+1)+"-"+dcount),
		p = { 
			loggedin : loggedin,
			duration : durationrange,
			previousVisits : previous_visits
		};
	e[event] = p;
	if(properties)
		for(field in properties)
			p[field] = properties[field];
	BDM.profile.badges(function(badges) {
	BDM.profile.balances(function(balances) {
		e.balance = (balances[0] && balances[0].current_balance) || 0;
		badges.forEach(function(badge) {
			e[badge.pub_title.toLowerCase().replace(/ /g, '_')] = true;
		});
		ReportGrid.track(path, { events : e }, function(r) { console.log("track:"+path+" " + dump(e)); });
	});
	});
}

function elapsed()
{
	dcount *= 2;
	track(path, "onpage");
	setTimeout(elapsed, dcount * 1000);
}

BDM.auth.status(function(status) {
loggedin = status && typeof(status.end_user_login)!="undefined";

// ENGAGEMENT
track(path, "engagement");
// FIRST ENGAGEMENT
if(!previous_visits)
	track(path, "first_engagement");

// TIME ON PAGE
elapsed();

$.cookie(cvisit, ++previous_visits, { expires: 365, path: '/' });

// ADD MOUSE OVER/CLICK EVENTS
$('.bd-bar').mouseenter(function() { track(path, "over_bar"); });
$('.bd-branding-picture')
	.mouseenter(function() { track(path, "over_bigdoor"); })
	.click(function() { track(path, "click_bigdoor"); });
$('.bd-login-facebook')
	.mouseenter(function() { track(path, "over_login"); })
	.click(function() { track(path, "click_login"); });
$('.bd-checkin')
	.mouseenter(function() { track(path, "over_checkin"); })
	.click(function() { track(path, "click_checkin"); });
$('.bd-linkshare')
	.mouseenter(function() { track(path, "over_linkshare"); })
	.click(function() { track(path, "click_linkshare"); });	
$('.bd-deals')
	.mouseenter(function() { track(path, "over_deals"); })
	.click(function() { track(path, "click_deals"); });
$('.bd-badges')
	.mouseenter(function() { track(path, "over_badges"); })
	.click(function() { track(path, "click_badges"); });
$('.bd-help')
	.mouseenter(function() { track(path, "over_help"); })
	.click(function() { track(path, "click_help"); });

var open = true;
$('.bd-toggler')
	.mouseenter(function() { track(path, open ? "over_close" : "over_open"); })
	.click(function() { track(path, open ? "close_bar" : "open_bar"); open = !open; });

// LOGIN/LOGOUT
var login = BDM.auth.login,
	logout = BDM.auth.logout,
	lastlogout = (new Date().getTime());
BDM.auth.login = function(end_user_login, callback) {
console.log(lastlogout + " VS " + (new Date().getTime()));
	if(!loggedin && ((lastlogout + 1000) < (new Date().getTime()))) { 
	// the guard is required because BDM.auth.login seems to be called several times for each login attempt and there is a login call after each logout call
		track(path, "login");
		loggedin = true;
	}
	login(end_user_login, callback);
};

BDM.auth.logout = function(callback) {
	logout(callback);
	if(loggedin) {
		track(path, "logout");
		loggedin = false;
		lastlogout = (new Date().getTime());
	}
};

});

})();

// PROPERTIES