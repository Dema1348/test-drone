(function() {
    'use strict';

    angular
        .module('app.pages.rules', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {

        // State
        $stateProvider
            .state('app.pages.rules', {
                abstract: true,
                url: '/rules'
            })
            .state('app.pages.rules.create', {
                url: '/create',
                params: {
                    rule: null
                },
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/rules/rules-create/rules-create.html',
                        controller: 'RulesCreateController as vm'
                    }
                }
            }).state('app.pages.rules.list', {
                url: '/list',              
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/rules/rules-list/rules-list.html',
                        controller: 'RulesListController as vm'
                    }
                }
            });



        msNavigationServiceProvider.saveItem('rules', {
            title: 'Reglas',
            icon: 'icono-medir2-HaibuSmart',
            weight: 5
        });

        msNavigationServiceProvider.saveItem('rules.list', {
            title: 'Ver Reglas',
            state: 'app.pages.rules.list'
        });

        msNavigationServiceProvider.saveItem('rules.create', {
            title: 'Crear Regla',
            state: 'app.pages.rules.create'
        });



    }
})();