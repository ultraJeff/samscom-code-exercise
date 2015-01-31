define([
	"spa/templates"
	],
	function(templates){
		var LayoutMobile = Backbone.Marionette.LayoutView.extend({
		  template: function(){
			return window.JST["layout-mobile.html"];
		  },
		  regions: {
		    slide1: "#slide-1",
		    slide2: "#slide-2",
		    slide3: "#slide-3",
		    slide4: "#slide-4"
		  }
		});
		return LayoutMobile;
	});