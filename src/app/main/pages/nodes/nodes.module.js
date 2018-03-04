(function ()
{
    'use strict';

    angular
        .module('app.pages.nodes', [
             ])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            // .state('app.pages.nodes', {
            //     abstract: true,
            //     url     : '/nodes'
            // })
            .state('app.pages.nodes', {
                url    : '/list',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/pages/nodes/nodes-list/nodes-list.html',
                        controller : 'NodesListController as vm'
                    }
                }
            });
            // .state('app.nodes.create', {
            //     url    : '/create',
            //     views  : {
            //         'content@app': {
            //             templateUrl: 'app/main/nodes/nodes-create/nodes-create.html',
            //             controller : 'NodesCreateController as vm'
            //         }
            //     },
            //     resolve: {
            //         Devices: function(managerDeviceService) {
            //             return managerDeviceService.getDevices();
            //         },
            //         DevicesTypes: function(managerDeviceService) {
            //             return managerDeviceService.getDevicesTypes();
            //         }
            //     }
            // });

      


        msNavigationServiceProvider.saveItem('nodes', {
            title : 'Ver Nodos',
            icon  : 'icono-senal2-HaibuSmart',
            state: 'app.pages.nodes'

        });

        // msNavigationServiceProvider.saveItem('nodes.list', {
        //     title: 'Ver Nodos',
        //     state: 'app.pages.nodes.list'
        // });

        // msNavigationServiceProvider.saveItem('nodes.create', {
        //     title: 'Registrar Nodo',
        //     state: 'app.nodes.create'
        // });






    }
})();