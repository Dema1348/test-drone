(function ()
{
    'use strict';

    angular
        .module('fuse')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state,$location,amMoment,authService,MQTTUtils)
    {


        //Change locate moment 
        amMoment.changeLocale('es');

        //Activete MQTT client
        MQTTUtils.connectClient();

        // Activate loading indicator
        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function ()
        {
            $rootScope.loadingProgress = true;
        });

        // De-activate loading indicator
        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function ()
        {
            $timeout(function ()
            {
                $rootScope.loadingProgress = false;
            });
        });

        // Store state in the root scope for easy access
        $rootScope.state = $state;

        // Cleanup
        $rootScope.$on('$destroy', function ()
        {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        });


        var restrictedPage = $.inArray($location.path(), ['/','/register','/reset']) === -1;
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            if (restrictedPage && !authService.isAuthenticated()) {
                $location.path('/');
            } 
            if ($location.path()=='/' && authService.isAuthenticated()) {
                $location.path('/home');
            }            
        });
    }
})();