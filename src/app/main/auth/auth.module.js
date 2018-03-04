(function ()
{
    'use strict';

    angular
        .module('app.auth', [
            'app.auth.login',
            'app.auth.reset',
            'app.auth.register'

        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {

    }
})();