/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comwebinar/sapui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
