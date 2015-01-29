define([
	"spa/Layout",
	"spa/Menu",
	"spa/View-Home",
	"spa/View-Notifications",
	"spa/View-SPen",
	"spa/View-Display"
	], 
	function(Layout, Menu, ViewHome, ViewNotifications, ViewSPen, ViewDisplay){
	var rm = new Backbone.Marionette.RegionManager();
	var region = rm.addRegions({
		mainRegion: "#galaxy-app"
	});
	var App = Backbone.Marionette.Application.extend({
		onStart: function(){
			this.layout = new Layout();
			region.mainRegion.show(this.layout);
			this.layout.content.show(new ViewHome({
				app: this
			}));
			this.layout.menu.show(new Menu({
				app: this
			}));
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
		}
	});
	return App;
});