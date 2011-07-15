// ==UserScript==
// @name           ReportGrid for BigDoor
// @namespace      http://www.reportgrid.com/c/bigdoor/behavior
// @include        http://*.bigdoor.com/*
// @description    Tracks User Behavior
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==

(function() {
function dump(o) { if(typeof(o) == 'object') { var buf = "{"; for(f in o) buf += f + ":" + dump(o[f]); return buf + "}"; } else return ""+o; }
jQuery.cookie = function (key, value, options) {if (arguments.length > 1 && String(value) !== "[object Object]") {options = jQuery.extend({}, options);if (value === null || value === undefined) {options.expires = -1;}if (typeof options.expires === 'number') {var days = options.expires, t = options.expires = new Date();t.setDate(t.getDate() + days);} value = String(value);return (document.cookie = [encodeURIComponent(key), '=',options.raw ? value : encodeURIComponent(value),options.expires ? '; expires=' + options.expires.toUTCString() : '',options.path ? '; path=' + options.path : '',options.domain ? '; domain=' + options.domain : '',options.secure ? '; secure' : ''].join(''));}options = value || {};var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;};


var ReportGrid = window.ReportGrid || { track : function(path, o) { console.log("track: " + path + " " + dump(o)); } },
	host = window.location.hostname,
	path = "/t/bigdoor/" + host,
	cvisit = "rgbd-visits",
	previous_visits = $.cookie(cvisit) || 0;
	
function event(name, properties) {
	var event = {},
		p = {};
	event[name] = p;
	if(properties)
		for(field in properties)
			p[field] = properties[field];
	return { events : event };
}

$(document).ready(function() { window.setTimeout(function() {
// ENGAGEMENT
ReportGrid.track(path, event("engagement", { previousVisits : previous_visits }));
// FIRST ENGAGEMENT
if(!previous_visits)
	ReportGrid.track(path, event("first_engagement", { }));

$.cookie(cvisit, ++previous_visits, { expires: 365, path: '/' });


	$('.bd-checkin-title').mouseover(function() {
		console.log("over button");
	});
	$('.bd-bar').mouseover(function() {
		console.log("over bar");
	});
}, 3000)});
})();

// .bd-bar

// .bd-branding-picture
// .bd-login-facebook
// .bd-checkin
// .bd-linkshare
// .bd-deals
// .bd-badges

// .bd-help
// .bd-toggler