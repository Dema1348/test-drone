(function() {
	'use strict';

	angular
		.module('app.pages.help')
		.controller('HelpUnitsController', HelpUnitsController);

	/** @ngInject */
	function HelpUnitsController($log,UNITS) {
		var vm = this;
		vm.sensors= UNITS;
		vm.query = {
	      limit: 5,
	      page: 1,
	      filter: ""
	    };



	}
})();