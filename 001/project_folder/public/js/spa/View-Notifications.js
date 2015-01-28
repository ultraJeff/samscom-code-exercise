define([
	"spa/templates"
	],
	function(templates) {
		var ViewNotifications = Backbone.Marionette.ItemView.extend({
			initialize: function() {
				this.app = this.options.app;
			},
			template: function() {
				return window.JST["view-notifications.html"];
			},
			events: {

			},
			onRender: function() {

			}
		});
		return ViewNotifications;
	});