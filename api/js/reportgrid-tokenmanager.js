(function(){
ReportGrid.tokenManager = function(target_div,$) {
   if (typeof $ == "undefined") {
       $ = jQuery;
   }

   // Section to define the html output for functions
   // NOTE: This should be rewritten to use $.tmpl and $.template as soon as
   // those features are moved from BETA to production in jQuery. This right
   // here is fast but not maintainable
   var token_row_template = function(args){return "\
<tr> \
   <td><a name=\""+ args.token.tokenId +"\">"+ args.token.tokenId +"</a></td> \
   <td><a href=\"#"+ args.token.accountTokenId +"\">"+
args.token.accountTokenId +"</a></td> \
   <td>"+ args.token.expires +"</td> \
   <td>"+ args.token.limits.depth +"</td> \
   <td>"+ args.token.limits.limit +"</td> \
   <td>"+ args.token.limits.order +"</td> \
   <td><a href=\"#"+ args.token.parentTokenId +"\">"+
args.token.parentTokenId +"</a></td> \
   <td>"+ args.token.path +"</td> \
   <td>"+ args.token.permissions.read +"</td> \
   <td>"+ args.token.permissions.share +"</td> \
   <td>"+ args.token.permissions.write +"</td> \
   <td><a href=\"#delete-"+ args.token.tokenId +"\" id=\"delete-"+
args.token.tokenId +"\">Delete</a></td> \
</tr>"};

   var token_table_template = "\
       <table id=\"token-table\">\
           <thead>\
               <tr>\
                   <th>TokenId:</th>\
                   <th>Account Token:</th>\
                   <th>Expires:</th>\
                   <th>Depth:</th>\
                   <th>Limit:</th>\
                   <th>Order:</th>\
                   <th>Parent:</th>\
                   <th>Path:</th>\
                   <th>Read:</th>\
                   <th>Share:</th>\
                   <th>Write:</th>\
                   \
                   <th>Actions:</th>\
               </tr>\
           </thead>\
           <tbody id=\"token-list\">\
           </tbody>\
       </table>";

   // Use HTML5 elements, they fallback if the browser doesn't understand
   var new_token_template = "\
       <div id=\"token-create\">\
           <h3>New token:</h3>\
           <form id=\"new-token-form\">\
               <dl>\
                   <dt><label for=\"token-path\">Path:</label></dt>\
                   <dd><input type=\"text\" id=\"token-path\"></dd>\
\
                   <h4>Permissions</h4>\
                   <dt><label for=\"token-read\">Read:</label></dt>\
                   <dd><input type=\"checkbox\" id=\"token-read\"></dd>\
\
                   <dt><label for=\"token-write\">Write:</label></dt>\
                   <dd><input type=\"checkbox\" id=\"token-write\"></dd>\
\
                   <dt><label for=\"token-share\">Share:</label></dt>\
                   <dd><input type=\"checkbox\" id=\"token-share\"></dd>\
\
                   <h4>Limits</h4>\
                   <dt><label for=\"token-order\">Order:</label></dt>\
                   <dd><input type=\"number\" id=\"token-order\"></dd>\
\
                   <dt><label for=\"token-limit\">Limit:</label></dt>\
                   <dd><input type=\"number\" id=\"token-limit\"></dd>\
\
                   <dt><label for=\"token-depth\">Depth:</label></dt>\
                   <dd><input type=\"number\" id=\"token-depth\"></dd>\
               </dl>\
               <input id=\"submit-new-token\" type=\"submit\"
value=\"Create new token\" />\
           </form>\
       </div>";

   // Error callback
   function error(e) {
       console.log(e);
   }

   // What happens at initialization
   function init() {
       $(target_div).html(token_table_template+new_token_template);

       // Clean the page up first thing
       $('#token-list').empty();

       // Pull in all the tokens and build everything up
       ReportGrid.tokens(function(tokens) {//Success
           tokens.map(display_token); // ECMA262 provides this (>IE6)
       });

       // Tie to the form
       $("form").submit(create_token);

   }
   $(init); // Call init when the page is ready

   function create_token() {
       new_token = {
           "path":$('#token-path').val(),
           "permissions":{
               "read":$('#token-read').val() == "on",
               "write":$('#token-write').val() == "on",
               "share":$('#token-share').val() == "on",
           },
           "limits":{
               "order":$('#token-order').val(),
               "limit":$('#token-limit').val(),
               "depth":$('#token-depth').val(),
           },
       };

       ReportGrid.newToken(new_token, init,error);
       return false; // Don't actually submit
   }

   function display_token(token) {
       ReportGrid.token(token, function(token) {
           // Now that we have the token, render it
           token_row = token_row_template({"token":token});
           $('#token-list').append($(token_row));
           $('#delete-'+token.tokenId).click(function() {
               delete_token(token);
           });
       });
   };


   function delete_token(token) {
       // Delete the token then callback to init to redraw on success
       ReportGrid.deleteToken(token.tokenId, init, error);
   }

}})()