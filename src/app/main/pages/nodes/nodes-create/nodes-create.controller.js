(function() {
	'use strict';

	angular
		.module('app.pages.nodes')
		.controller('NodesCreateController', NodesCreateController);

	/** @ngInject */
	function NodesCreateController($log,$state,$mdDialog, Device, LoopBackAuth, uiGmapGoogleMapApi, HelperService, managerDeviceService, _) {
		var vm = this;
		vm.sendForm = sendForm;
		vm.registerForm = {};
		vm.mapStyle = HelperService.mapStyle();
		vm.options = {
			icon: '/assets/images/icons/salmon.png'
		};


		uiGmapGoogleMapApi.then(function(maps) {

			var options = {
				enableHighAccuracy: true
			};
			navigator.geolocation.getCurrentPosition(function(pos) {
				vm.map.center = {
					latitude: pos.coords.latitude,
					longitude: pos.coords.longitude
				}
			}, function(error) {
				$log.debug('Unable to get location: ' + error.message);
			}, options);


			vm.map = {
				options: {
					disableDefaultUI: false,
					styles: vm.mapStyle
				},
				center: {
					latitude: -33.422431,
					longitude: -70.614143
				},
				zoom: 10

			};

		});



	

		function sendForm(ev) {
			var device = angular.copy(vm.registerForm);
			device.location = vm.map.center;
			if (_.isEmpty(device.authToken))
				delete device.authToken;
			$log.debug("New node register", device);
			$log.debug("-------------------------");
			managerDeviceService.register(device).then(function(response) {
				$log.debug("New node register response", response);
				$log.debug("-------------------------");
				showState(ev,response)
			}).catch(function(error) {
				$log.debug(error);
				//Todo cach error
			})
		}
		function showState(ev, response) {
			 $mdDialog.show(
		      $mdDialog.alert()
		        .parent(angular.element(document.querySelector('document.body')))
		        .clickOutsideToClose(false)
		        .title('Registro de Nodo')
		        .textContent('Tu nodo se ha registrado con éxito, tu cable de autentificación es: '+response.authToken)
		        .ariaLabel('Registro de Nodo')
		        .ok('Aceptar')
		        .targetEvent(ev)
		    ).then(function() {
		    	$state.go("app.pages.home");
		    });
		}



	}
})();