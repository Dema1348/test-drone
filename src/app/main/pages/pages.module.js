(function ()
{
    'use strict';

    angular
        .module('app.pages', [
        	'app.pages.home'
            ,'app.pages.profile'
        	,'app.pages.help'
        	,'app.pages.alerts'
        	,'app.pages.reports'
        	,'app.pages.rules'
        	,'app.pages.nodes'


        ])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
    	
    	 $stateProvider
            .state('app.pages', {
            	abstract: true,
                url: '/dasboard',
                resolve: {
                    Devices: function(managerDeviceService, MQTTUtils) {
                        return managerDeviceService.getDevices().then(function(response) {
                                MQTTUtils.onStartWatchDevices(response);
                            return response;
                        });
                    }
                    ,
                    Rules: function(managerDeviceService) {
                        return managerDeviceService.getRules();
                    },
                    Alerts: function(managerDeviceService,_) {
                        return managerDeviceService.getAlerts().then(function(response) {
                            for (var i = 0; i < response.length; i++) {
                                response[i].timestamp= (new Date(response[i].timestamp)).getTime();
                            };

                            return response;
                        });
                    }
                }
            });
    }
})();