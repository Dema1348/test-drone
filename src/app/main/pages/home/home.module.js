(function() {
    'use strict';

    angular
        .module('app.pages.home', ['chart.js','nvd3'])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
        // State
        $stateProvider
            .state('app.pages.home', {
                url: '/home',
                params:{device:null},
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/home/home.html',
                        controller: 'HomeController as vm'
                    }
                },
                bodyClass: 'home'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/home');


      

        msNavigationServiceProvider.saveItem('home', {
            title: 'Inicio',
            icon: 'icono-casa2-HaibuSmart',
            state: 'app.pages.home',
            translate: 'HOME.TITLE_NAV',
            weight: 1
        });
    }
})();