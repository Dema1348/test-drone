(function ()
{
    'use strict';

    angular
        .module('app.auth.reset', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.auth_reset', {
            url      : '/reset?access_token',
            views    : {
                'main@'                       : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.auth_reset': {
                    templateUrl: 'app/main/auth/reset/reset.html',
                    controller : 'ResetController as vm'
                }
            },
             onEnter: function ($stateParams, $state, $timeout) {
                  if (!$stateParams.access_token) {
                    $timeout(function() {
                        $state.go('app.auth_login')
                    },500)
                        
                  }
            },
            bodyClass: 'reset'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/auth/reset');


    }

})();