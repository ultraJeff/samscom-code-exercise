define([
	"spa/Layout",
	"spa/Menu",
	"spa/View-Home",
	"spa/View-Notifications",
	"spa/View-SPen",
	"spa/View-Display",
	"spa/View-Mobile"
	], 
	function(Layout, Menu, ViewHome, ViewNotifications, ViewSPen, ViewDisplay, ViewMobile) {
	var rm = new Backbone.Marionette.RegionManager();
	var region = rm.addRegions({
		mainRegion: "#galaxy-app"
	});
	var App = Backbone.Marionette.Application.extend({
		onStart: function() {
			this.layout = new Layout();
			region.mainRegion.show(this.layout);
			if ($(window).width() > 750) {
				this.layout.getRegion("content").show(new ViewHome({
					app: this
				}));
				this.layout.getRegion("menu").show(new Menu({
					app: this
				}));
			}
			else {
				this.layout.getRegion("content").show(new ViewMobile({
					app: this
				}));
			}
		},
		showHome: function() {
			this.layout.getRegion("content").show(new ViewHome({
				app: this
			}));
		},
		showNotifications: function() {
			this.layout.getRegion("content").show(new ViewNotifications({
				app: this
			}));
		},
		showSPen: function() {
			this.layout.getRegion("content").show(new ViewSPen({
				app: this
			}));
		},
		showDisplay: function() {
			this.layout.getRegion("content").show(new ViewDisplay({
				app: this
			}));
		}
	});
	return App;
});