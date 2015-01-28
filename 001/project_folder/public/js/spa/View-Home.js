define([
	"spa/templates"
	],
	function(templates) {
		var ViewHome = Backbone.Marionette.ItemView.extend({
			initialize: function() {
				this.app = this.options.app;
			},
			template: function() {
				return window.JST["view-home.html"];
			},
			events: {

			},
			onRender: function() {

			}
		});
		return ViewHome;
	});