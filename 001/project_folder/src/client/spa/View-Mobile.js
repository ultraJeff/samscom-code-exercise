define([
	"spa/templates"
	],
	function(templates) {
		var ViewMobile = Backbone.Marionette.ItemView.extend({
			tagName: "section",
			className : "device-slide-container-mobile",
			initialize: function() {
				this.app = this.options.app;
			},
			template: function() {
				return window.JST["view-mobile.html"];
			},
			events: {

			},
			onRender: function() {

			},
			onAttach: function() {
				$('#slide-carousel').swiperight(function() {
					$(this).carousel('prev');
				});
				$('#slide-carousel').swipeleft(function() {
					$(this).carousel('next');
				});
			}
		});
		return ViewMobile;
	});