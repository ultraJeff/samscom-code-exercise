define([
	"spa/templates"
	],
	function(templates) {
		var timer;
		var ViewHome = Backbone.Marionette.ItemView.extend({
			tagName : "section",
			className : "view-home-container",
			initialize: function() {
				this.app = this.options.app;
			},
			template: function() {
				return window.JST["view-home.html"];
			},
			onAttach: function() {
				$(this.el).addClass("animated fadeIn");
				setTimeout(function() {
					$(".animate-img").addClass("fire");
				}, 250);
			},
			onBeforeRender: function() {
				$('#menu').css({ opacity : 0 });
			},
			events: {
				"mouseenter #home-nav>div":"rotateArrowDown",
				"mouseleave #home-nav>div":"rotateArrowSide",
				"click #home-nav button":"goto"
			},
			rotateArrowDown: function(e) {
				timer = setTimeout(function() {
					var elem = this.$(e.target);
					elem.parent().find(".nav-arrow").addClass("hovered");
				}, 100);
			},
			rotateArrowSide: function(e) {
				clearTimeout(timer);
				$(".nav-arrow").removeClass("hovered");
			},
			goto: function(e) {
				var elem = $(e.currentTarget);
				switch(elem.data('href')) {
					case "notifications":
						this.app.showNotifications();
						break;
				}
			}
		});
		return ViewHome;
	});