(function ()
{
    'use strict';

    angular
        .module('app.pages.alerts', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.pages.alerts', {
                url    : '/alerts',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/pages/alerts/alerts.html',
                        controller : 'AlertsController as vm'
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/alerts');

      

        msNavigationServiceProvider.saveItem('alerts', {
            title    : 'Alertas',
            icon     : 'icono-advertencia2-HaibuSmart',
            state    : 'app.pages.alerts',
            translate: 'ALERTS.TITLE_NAV',
            weight   : 5
        });
    }
})();