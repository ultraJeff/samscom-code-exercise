define([
	"spa/templates"
	],
	function(templates){
		var Menu = Backbone.Marionette.ItemView.extend({
			initialize: function(){
				this.app = this.options.app;
			},
			template: function(){
				return window.JST["menu.html"];
			},
			events:{
				"click nav button": "goto",
				"mouseover nav button": "showPopup",
				"mouseout nav button": "hidePopup"
			},
			onRender: function(){
				console.log("Menu has rendered");
				this.menuOpts = this.$el.find("nav li button");
			},
			goto: function(e){
				var elem = this.$(e.target),
					option = elem.data("href");
				e.preventDefault();
				this.menuOpts.removeClass("active");
				elem.addClass("active");
				switch(option){
					case "home":
						this.app.showHome();
						break;
					case "notifications":
						this.app.showNotifications();
						break;
					case "s-pen":
						this.app.showSPen();
						break;
					case "display":
						this.app.showDisplay();
						break;
				}
			},
			showPopup: function(e){
				var elem = this.$(e.target);
				elem.siblings('p').css('opacity', 1);
			},
			hidePopup: function(e) {
				var elem = this.$(e.target);
				elem.siblings('p').css('opacity', 0);
			}
		});
		return Menu;
	});