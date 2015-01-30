define([
	"spa/templates"
	],
	function(templates) {
		var ViewNotifications = Backbone.Marionette.ItemView.extend({
			tagName: "section",
			className : "device-slide-container-2",
			initialize: function() {
				this.app = this.options.app;
			},
			template: function() {
				return window.JST["view-notifications.html"];
			},
			events: {

			},
			onBeforeRender: function() {
				$(".droplet-nav button")
					.removeClass("active")
					.filter("[data-href='notifications']")
					.addClass("active");
			},
			onRender: function() {
				//IE is having trouble fading in the menu
				$("#menu").css({ opacity : 1 }).show();
			}
		});
		return ViewNotifications;
	});