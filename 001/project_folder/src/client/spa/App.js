define([
	"spa/Layout",
	"spa/Menu",
	"spa/View-Home",
	"spa/View-Notifications",
	"spa/View-SPen",
	"spa/View-Display"
	], 
	function(Layout, Menu, ViewHome, ViewNotifications, ViewSPen, ViewDisplay){
	var App = Backbone.Marionette.Application.extend({
		init: function(){
			this.layout = new Layout();
			this.mainRegion.show(this.layout);
			this.layout.menu.show(new Menu({
				app: this
			}));
			this.layout.content.show(new ViewHome());
		},
		showHome: function(){
			this.layout.content.show(new ViewHome({
				app: this
			}));
		},
		showNotifications: function(){
			this.layout.content.show(new ViewNotifications({
				app: this
			}));
		},
		showSPen: function(){
			this.layout.content.show(new ViewSPen({
				app: this
			}));
		},
		showDisplay: function(){
			this.layout.content.show(new ViewDisplay({
				app: this
			}));
		},
		login: function(username, password, cbError, cbSuccess){
			var app = this,
				rnd = Math.random() * 1000,
				publicKey = username,
				privateKey = password,
				content = "publicKey=" + publicKey + "&rnd=" + rnd,
				shaObj =  new JsSHA(content, "ASCII");
			$.ajax({
				url: "/api/auth",
				type: "POST",
				dataType: "json",
				data: {
					publicKey: publicKey,
					rnd: rnd,
					signature: shaObj.getHMAC(privateKey, "ASCII", "HEX")

				},
				statusCode: {
					401: function (data){
						data = JSON.parse(data.responseText);
						cbError(data.error);
					}
				},
				success: function(data){
					if(data.error){
						cbError(data.error);
					}else{
						app.loggedIn = true;
						cbSuccess();
					}
				}
			});
		}
	});
	return App;
});