(function() {
function dump(o) { if(typeof(o) == 'object') { var buf = []; for(f in o) buf.push(f + ":" + dump(o[f])); return "{" + buf.join(",") + "}"; } else return ""+o; }
$.cookie = function (key, value, options) {if (arguments.length > 1 && String(value) !== "[object Object]") {options = jQuery.extend({}, options);if (value === null || value === undefined) {options.expires = -1;}if (typeof options.expires === 'number') {var days = options.expires, t = options.expires = new Date();t.setDate(t.getDate() + days);} value = String(value);return (document.cookie = [encodeURIComponent(key), '=',options.raw ? value : encodeURIComponent(value),options.expires ? '; expires=' + options.expires.toUTCString() : '',options.path ? '; path=' + options.path : '',options.domain ? '; domain=' + options.domain : '',options.secure ? '; secure' : ''].join(''));}options = value || {};var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;};
var BrowserDetect = {init: function () {this.browser = this.searchString(this.dataBrowser) || "An unknown browser";this.version = this.searchVersion(navigator.userAgent)|| this.searchVersion(navigator.appVersion)|| "an unknown version";this.OS = this.searchString(this.dataOS) || "an unknown OS";},searchString: function (data) {for (var i=0;i<data.length;i++)	{var dataString = data[i].string;var dataProp = data[i].prop;this.versionSearchString = data[i].versionSearch || data[i].identity;if (dataString) {if (dataString.indexOf(data[i].subString) != -1)return data[i].identity;}else if (dataProp)return data[i].identity;}},searchVersion: function (dataString) {var index = dataString.indexOf(this.versionSearchString);if (index == -1) return;return parseFloat(dataString.substring(index+this.versionSearchString.length+1));},dataBrowser: [{string: navigator.userAgent,subString: "Chrome",identity: "Chrome"},{ 	string: navigator.userAgent,subString: "OmniWeb",versionSearch: "OmniWeb/",identity: "OmniWeb"},{string: navigator.vendor,subString: "Apple",identity: "Safari",versionSearch: "Version"},{prop: window.opera,identity: "Opera"},{string: navigator.vendor,subString: "iCab",identity: "iCab"},{string: navigator.vendor,subString: "KDE",identity: "Konqueror"},{string: navigator.userAgent,subString: "Firefox",identity: "Firefox"},{string: navigator.vendor,subString: "Camino",identity: "Camino"},{string: navigator.userAgent,subString: "Netscape",identity: "Netscape"},{string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"},{string: navigator.userAgent,subString: "Gecko",identity: "Mozilla",versionSearch: "rv"},{string: navigator.userAgent,subString: "Mozilla",identity: "Netscape",versionSearch: "Mozilla"}],dataOS : [{string: navigator.platform,subString: "Win",identity: "Windows"},{string: navigator.platform,subString: "Mac",identity: "Mac"},{string: navigator.userAgent,subString: "iPhone",identity: "iPhone/iPod"},{string: navigator.platform,subString: "Linux",identity: "Linux"}]};BrowserDetect.init();

var host = window.location.hostname.replace(/\./g, '_'),
	path = "/bdtest/bigdoor2/" + host,
	cvisit = "rgbd-visits",
	previous_visits = $.cookie(cvisit) || 0,
	loggedin = false,
	dcount = 0.5,
	open = true;

function track(path, event)
{
	var e = {},
		durationrange = dcount <= 2 ? "" + dcount : (((dcount/2)+1)+"-"+dcount),
		p = e[event] = { 
			loggedin : loggedin,
			duration : durationrange,
			previousVisits : previous_visits,
			os : BrowserDetect.OS,
			browser : BrowserDetect.browser,
			browser_version : BrowserDetect.version
		};
	BDM.profile.badges(function(badges) {
	BDM.profile.balances(function(balances) {
		p.balance = (balances[0] && balances[0].current_balance) || 0;
		badges.forEach(function(badge) {
			p["badge_" + badge.pub_title.toLowerCase().replace(/ /g, '_')] = true;
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

function wireEvents()
{
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
	$('.bd-toggler')
		.mouseenter(function() { track(path, open ? "over_close" : "over_open"); })
		.click(function() { track(path, open ? "close_bar" : "open_bar"); open = !open; });
}
// LOGIN/LOGOUT
var login = BDM.auth.login,
	logout = BDM.auth.logout,
	lastlogout = (new Date().getTime());
BDM.auth.login = function(end_user_login, callback) {
//	console.log("BDM.auth.login");
	if(!loggedin && ((lastlogout + 1000) < (new Date().getTime()))) { 
	// the guard is required because BDM.auth.login seems to be called several times for each login attempt and there is a login call after each logout call
//		console.log("LOGGED IN");
		track(path, "login");
		loggedin = true;
		setTimeout(wireEvents, 3000);
	}
	login(end_user_login, callback);
};

BDM.auth.logout = function(callback) {
//	console.log("BDM.auth.logout");
	if(loggedin) {
//		console.log("LOGGED OUT");
		track(path, "logout");
		loggedin = false;
		lastlogout = (new Date().getTime());
		setTimeout(wireEvents, 3000);
	}
	logout(callback);
};
wireEvents();

});

})();

// PROPERTIES