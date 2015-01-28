define([
	"spa/templates"
	],
	function(templates) {
		var ViewSPen = Backbone.Marionette.ItemView.extend({
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