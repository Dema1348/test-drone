(function ()
{
    'use strict';

    angular
        .module('app.pages.reports', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.pages.reports', {
                url    : '/reports',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/pages/reports/reports.html',
                        controller : 'ReportsController as vm'
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/reports');

      

        msNavigationServiceProvider.saveItem('reports', {
            title    : 'Reportes',
            icon     : 'icono-reporte2-HaibuSmart',
            state    : 'app.pages.reports',
            translate: 'REPORTS.TITLE_NAV',
            weight   : 3
        });
    }
})();