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

	function bindToken()
	{
		token.setCurrent($(this).text());
		return false;
	}

	function fillTokenInfo(el, t, displayPath)
	{
		var el = $(el);
		el.html("loading ...");
		rg.token(t, function(info) {
			if(!info)
			{
				el.html("NO DATA LOADED");
				return;
			}

			function renderValue(key, value)
			{
				if((['tags', 'lossless', 'rollup', 'explore', 'read', 'share', 'write']).indexOf(key) >= 0)
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
				permissions.push(key+': <span class="value">'+renderValue(key, info.limits[key])+'</span>');
			}
			html += '<li>' + permissions.join(', </li><li> ') + '</li>';
			html += '</ul></div>';

			el.html(html);

		});
	}

	$(document).ready(function(){
		// wire the list of tokens
		$(token).bind('changed', function() {
			var list = $('#tokenslist').html("");
			$("#tokenspagination").html("");
			rg.tokens(function(it) {
				function display(index)
				{
					list.html("");
					var max = Math.min((index + 1) * ENTRIES_PER_PAGE, it.length);
					for(var i = index * ENTRIES_PER_PAGE; i < max; i++)
					{
						var t = it[i],
							li = $('<li><div class="token">'+(i+1)+': <a href="#">'+t+'</a></div><div class="info"></div></li>');
						list.append(li);
						li.find('.token a').bind('click', bindToken);
						fillTokenInfo(li.find('.info'), t, true);
					}
				}

				if(it.length > ENTRIES_PER_PAGE)
					$("#tokenspagination").pagination(it.length, {
						callback : display,
						items_per_page : ENTRIES_PER_PAGE,
						load_first_page:true
					});

//				display(0);
			});
		});

		$(token).bind('changed', function() {
			fillTokenInfo('#tokeninfo', token.getCurrent());
		})

		// setup base ui
		token.setCurrent($('#prodtoken').text(prodToken).click(bindToken).text(), true);

		$('#devtoken').text(devToken).click(bindToken);
	})
})()