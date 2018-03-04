(function() {
	'use strict';


	angular
		.module('fuse')
		.filter('colorState', colorState)

	function colorState(moment,_) {

		return function(input, hasAlert) {
			var RESET_TIME = 3600;
			var now = moment();
			var eventTime = moment(input);
			if (_.isNull(input))
				return 'gris';

			
			if(now.diff(eventTime, 'seconds') < RESET_TIME){
				return hasAlert?'rojo':'verde';
			}else{
				return 'gris';
			}

		}
	}


})();