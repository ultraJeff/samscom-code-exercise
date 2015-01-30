define([
	"spa/templates"
	],
	function(templates) {
		var ViewSPen = Backbone.Marionette.ItemView.extend({
			tagName: "section",
			className : "device-slide-container-3",
			initialize: function() {
				this.app = this.options.app;
			},
			template: function() {
				return window.JST["view-sPen.html"];
			},
			events: {

			},
			onRender: function() {

			}
		});
		return ViewSPen;
	});