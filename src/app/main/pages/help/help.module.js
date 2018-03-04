(function ()
{
    'use strict';

    angular
        .module('app.pages.help', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {   


        // State
        $stateProvider
            .state('app.pages_help', {
                abstract: true,
                url     : '/help'
            })
            .state('app.pages_help.units', {
                url    : '/units',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/pages/help/help-units/help-units.html',
                        controller : 'HelpUnitsController as vm'
                    }
                }
            }).state('app.pages_help.config', {
                url    : '/config',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/pages/help/help-config/help-config.html',
                        controller : 'HelpConfigController as vm'
                    }
                }
            });
           



      


        msNavigationServiceProvider.saveItem('help', {
            title : 'Ayuda',
            icon  : 'icono-informacion2-HaibuSmart',
            weight   : 6
        });

        msNavigationServiceProvider.saveItem('help.units', {
            title: 'Sensores',
            state: 'app.pages_help.units'
        });


        msNavigationServiceProvider.saveItem('help.config', {
            title: 'Configuración',
            state: 'app.pages_help.config'
        });
        
    }
})();