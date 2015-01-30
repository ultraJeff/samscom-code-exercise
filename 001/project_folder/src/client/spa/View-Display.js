define([
	"spa/templates"
	],
	function(templates) {
		var ViewDisplay = Backbone.Marionette.ItemView.extend({
			tagName: "section",
			className : "device-slide-container-4",
			initialize: function() {
				this.app = this.options.app;
			},
			template: function() {
				return window.JST["view-display.html"];
			},
			events: {

			},
			onRender: function() {

			}
		});
		return ViewDisplay;
	});