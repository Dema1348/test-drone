(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [
            // Common 3rd Party Dependencies
            'uiGmapgoogle-maps',
            'lbServices',
            'angularMoment',
            'LocalStorageModule',
            'md.data.table',
            'toastr',
            'ngRadialGauge',
            'jkAngularCarousel',

            // Core
            'app.core',

            //Auth
            'app.auth',

            // Theme Haibu Smart
            'app.theme',

            //Services
            'app.services',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Pages
            'app.pages'

           
        ]);
})();