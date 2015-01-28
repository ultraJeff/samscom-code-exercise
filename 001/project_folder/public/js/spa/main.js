define(["spa/App"], function(App){
	var app = new App();

	app.addRegions({
		"mainRegion": "#application"
	});

	app.start();

	return app;
});