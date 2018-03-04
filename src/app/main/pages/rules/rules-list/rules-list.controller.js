(function() {
    'use strict';

    angular
        .module('app.pages.rules')
        .controller('RulesListController', RulesListController);

    /** @ngInject */
    function RulesListController($q,$rootScope, $scope, $state, $timeout, $log, $mdDialog, Devices, managerDeviceService) {
        var vm = this;
        var deferred = $q.defer();
        vm.devices = Devices;
       
       
        //Metod
        vm.goCreate= goCreate;
        vm.editRule=editRule;
        //////////

        init();

        /**
         * Initialize
         */
        function init() {
            vm.rules = [];
            vm.query = {
                limit: 5,
                page: 1,
                filter: ""
            };

            vm.filter = {
                options: {
                    debounce: 500
                }
            }

            vm.options = {
                rowSelection: false,
                multiSelect: false,
                autoSelect: false,
                decapitate: false,
                largeEditDialog: false,
                boundaryLinks: false,
                limitSelect: true,
                pageSelect: true
            };


            vm.promise = deferred.promise;
            initData();
        }

        function initData() {
            managerDeviceService.getRules().then(function(response) {
                $log.debug(response);
                vm.rules=response;
            }).finally(function() {
                 deferred.resolve();
            })
        }


        function goCreate() {
            $state.go('app.pages.rules.create');
        }

        function editRule(ev, rule) {
            $state.go('app.pages.rules.create',{rule:rule});

        }
        


      






    }


})();