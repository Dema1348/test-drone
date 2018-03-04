(function ()
{
    'use strict';

    angular
        .module('app.pages.profile', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider
            .state('app.pages.profile', {
                url    : '/profile',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/pages/profile/profile.html',
                        controller : 'ProfileController as vm'
                    }
                }
            });

       

      

      
    }
})();