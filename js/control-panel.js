(function(){
	var ENTRIES_PER_PAGE = 10,
		prodToken = "A3BC1539-E8A9-4207-BB41-3036EC2C6E6D",
		devToken  = "A3BC1539-E8A9-4207-BB41-3036EC2C6E6D",
		rg = ReportGrid;

	
	var token = (function() {
		var me = this;

		this.getCurrent = function() { return rg.$.Config.tokenId };
		this.setCurrent = function(t, force) {
			if(!force && (!t || t == rg.$.Config.tokenId)) return;
			rg.$.Config.tokenId = t;
			$('#curtoken').text(me.getCurrent());
			$(me).trigger('changed', t);
		};
		return this;
	})();

	var tokeninfo = (function() {
		var map = {};
		
		this.load = function(t, callback)
		{
			if(map[t])
			{
				callback(map[t]);
				return;
			}
			rg.token(t, function(r) {
				if(r)
					map[t] = r;
				callback(r);
			});
		}
		return this;
	})();

	var bindToken = function()
	{
		token.setCurrent($(this).text());
		return false;
	}

	var fillTokenInfo = function(el, t, displayPath)
	{
		var el = $(el);
		el.html("loading ...");
		tokeninfo.load(t, function(info) {
			if(!info)
			{
				el.html("NO DATA LOADED");
				return;
			}

			function renderValue(key, value)
			{
				if((['tags', 'lossless', 'rollup' /*, 'explore', 'read', 'share', 'write'*/]).indexOf(key) >= 0)
					return value ? true : false;
				else
					return value;
			}

			var html = "";

			if(displayPath)
			{
				html += '<div class="path">path: <span class="value">'+info.path+'</span></div>';
			}

			var expiration = new Date(info.expires);
			html += '<div class="expiration">expires: ' + (isNaN(expiration.getTime()) ? 'never' : expiration.toString()) + '</div>';
			
			html += '<div class="limits">limits:<ul>';
			var limits = [];
			for(var key in info.limits)
			{
				limits.push(key+': <span class="value">'+renderValue(key, info.limits[key])+'</span>');
			}
			html += '<li>' + limits.join(', </li><li>') + '</li>';
			html += '</ul></div>';

			html += '<div class="permissions">permissions:<ul>';
			var permissions = [];
			for(var key in info.permissions)
			{
				permissions.push(key+': <span class="value">'+renderValue(key, info.permissions[key])+'</span>');
			}
			html += '<li>' + permissions.join(', </li><li> ') + '</li>';
			html += '</ul></div>';

			el.html(html);

		});
	}

	var displayTokenList = function(index)
	{
		function clear()
		{
			$("#tokenspagination").html("");
			$('#tokenslist').html("");

		}
		var index = index || 0,
			list = $('#tokenslist');
		clear();
		rg.tokens(function(it) {
			function display(index)
			{
				list.html("");
				var max = Math.min((index + 1) * ENTRIES_PER_PAGE, it.length);
				for(var i = index * ENTRIES_PER_PAGE; i < max; i++)
				{
					var t = it[i],
						li = $('<li><div class="token">'+(i+1)+': <a href="#" class="token">'+t+'</a> <a href="#" class="delete">delete</a></div><div class="info"></div></li>');
					list.append(li);
					li.find('.token a.token').bind('click', bindToken);
					li.find('.token a.delete').bind('click', { token : t, page : index }, function(e){
						var t = e.data.token;
						if(!confirm("Are you sure you want to delete the token " + t + "?"))
							return;

						clear();
						rg.deleteToken(t, function() { displayTokenList(e.data.page); })
					});
					fillTokenInfo(li.find('.info'), t, true);
				}
			}

			var page_index = Math.max(0, Math.min(index, Math.floor((it.length-1) / ENTRIES_PER_PAGE)));
			if(it.length > ENTRIES_PER_PAGE)
			{
				$("#tokenspagination").pagination(it.length, {
					callback : display,
					items_per_page : ENTRIES_PER_PAGE,
					current_page : page_index
				});
			}
			display(page_index);
		});
	}

	var initTokenCreation = function(t)
	{
		$('#createtokenpanel').html("");
		tokeninfo.load(t, function(info)
		{
			if(!info || !info.permissions.share)
				return;
			var el = $('#createtokenpanel').append('<a href="#">create sub-token</a>');
			console.log("ADDED CREATE TOKEN BUTTON");
			el.click(function() {
				var maxWidth  = $(document).width();
				var maxHeight = $(document).height();

				$('#tokenoverlay').clearQueue().show().css({opacity: 0}).animate({opacity: 0.75})

				$('#tokenmenu').clearQueue().show();
			})
		});
	}

	var setupTokenCreation = function() {
		$('#tokenoverlay').click(function() {
			$(this).css({opacity: 0.75}).animate({opacity: 0}, function() { $(this).hide(); });

			$('#tokenmenu').hide();
		});

		$('#tokenpopupbutton').click(function(e) {
			e.preventDefault();

			var email    = $('#tokenform input[name="email"]');
			var password = $('#tokenform input[name="password"]');

			API.Http.post(RootAccountsAPI + "get", {
			email:      email.val(),
			password:   password.val()
			}, {
			success: function(response) {
				var content = $('#middlepanel');

				var tokenId = response.id.token;

				USTORE.setSessionValue('email',    email.val());
				USTORE.setSessionValue('password', password.val());
				USTORE.setSessionValue('tokenId',  tokenId);

				window.location = "./control-panel.html";
			},

			failure: function(code, text) {
				alert(text);
			}
		});

		return false;
		});
	}

	$(document).ready(function()
	{
		setupTokenCreation();
		// wire the list of tokens
		$(token).bind('changed', function() { displayTokenList(0); });
		$(token).bind('changed', function() { fillTokenInfo('#tokeninfo', token.getCurrent()); })
		$(token).bind('changed', function() { initTokenCreation(token.getCurrent()); })

		// setup base ui
		token.setCurrent($('#prodtoken').text(prodToken).click(bindToken).text(), true);

		$('#devtoken').text(devToken).click(bindToken);
	})
})()