(function() {
	'use strict';


	angular
		.module('fuse')
		.filter('parseUnits', parseUnits)

	function parseUnits() {
		return function(input, units, onlySymbol) {
			if (!input)
				return input;

			for (var i = 0; i < units.length; i++) {
				if (units[i].id === input) {
					if (onlySymbol)
						return units[i].symbol;
					return units[i].name?units[i].name:units[i].id;
				}
			}
			if (onlySymbol)
				return '';

			return input;

		}
	}


})();