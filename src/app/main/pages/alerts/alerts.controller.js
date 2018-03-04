(function() {
	'use strict';

	angular
		.module('app.pages.alerts')
		.controller('AlertsController', AlertsController);

	/** @ngInject */
	function AlertsController($log, Alerts) {
		var vm = this;

		// Data
		vm.alerts = Alerts;
		$log.debug(vm.alerts)



	}
})();