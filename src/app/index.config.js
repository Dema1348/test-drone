(function() {
    'use strict';

    angular
        .module('fuse')
        .config(config);

    /** @ngInject */
    function config($logProvider, uiGmapGoogleMapApiProvider, $translateProvider, LoopBackResourceProvider, BASEURL, API_KEY,$httpProvider,toastrConfig) {

        //URL where to access the LoopBack REST API server
        LoopBackResourceProvider.setUrlBase(BASEURL)
        
         $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
          return {
            responseError: function(rejection) {
              if (rejection.status == 401) {
                //Now clearing the loopback values from client browser for safe logout...
                LoopBackAuth.clearUser();
                LoopBackAuth.clearStorage();
                $location.nextAfterLogin = $location.path();
                $location.path('/');
              }
              return $q.reject(rejection);
            }
          };
        });

        


        $logProvider.debugEnabled(true);

        //Common app configurations here
        // uiGmapgoogle-maps configuration
        uiGmapGoogleMapApiProvider.configure({
            key: API_KEY,
            v: '3.exp',
            libraries: 'places,weather,geometry,visualization'
        });


        // angular-translate configuration
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/i18n/{lang}.json'
        });
        $translateProvider.preferredLanguage('es');
        $translateProvider.useSanitizeValueStrategy('sanitize');

        
        angular.extend(toastrConfig, {
        autoDismiss: false,
        containerId: 'toast-container',
        maxOpened: 10,   
        timeOut: 0,
        extendedTimeOut: 0,
        closeButton: true,
        tapToDismiss: false,
        newestOnTop: true,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        target: 'body'
      });


    }

})();