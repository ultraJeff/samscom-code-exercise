define([
	"spa/templates"
	],
	function(templates) {
		var ViewHome = Backbone.Marionette.ItemView.extend({
			tagName : 'section',
			className : 'view-home-container',
			initialize: function() {
				this.app = this.options.app;
			},
			template: function() {
				return window.JST["view-home.html"];
			},
			events: {
				'mouseover #home-nav button':"rotateArrowDown",
				'mouseleave #home-nav button':"rotateArrowSide"
			},
			onRender: function() {
				console.log(this);
				$(this).slideDown();
			},
			rotateArrowDown: function(e) {
				var elem = this.$(e.target);
				elem.find('.nav-arrow').addClass('hovered');
			},
			rotateArrowSide: function(e) {
				var elem = this.$(e.target);
				elem.find('.nav-arrow').removeClass('hovered');
			}
		});
		return ViewHome;
	});