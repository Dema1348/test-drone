(function() {
    'use strict';

    angular
        .module('app.pages.rules')
        .controller('RulesCreateController', RulesCreateController);

    /** @ngInject */
    function RulesCreateController($q,$rootScope, $scope, $state, $stateParams, $timeout, $log, $mdDialog, Devices,managerDeviceService) {
        var vm = this;
        vm.devices = Devices;
        vm.operations=['>','>=','<','<=','==','!='];
        vm.comparisons=[{id:"static",text:'Valor estatico'},{id:"property",text:'Propiedad'}];
              
        //Metod
        vm.deleteRule=deleteRule;
        vm.changeDevice=changeDevice;
        vm.saveRule=saveRule;
        //////////

        init();

        /**
         * Initialize
         */
        function init() {
            vm.rule={};
            vm.condition={};
            if($stateParams.rule){
                vm.isEdit=true;
                var rule= angular.copy($stateParams.rule);
                vm.rule.name=rule.name;
                vm.rule.id=rule.id;
                vm.rule.description=rule.description;
                vm.rule.device = _.find(vm.devices, function(device) {
                    return device.deviceId === rule.deviceId
                });
                if(vm.rule.device)
                    changeDevice();
                var condition= rule.condition.split(" ");
                vm.condition.property=condition[0];
                vm.condition.operation=condition[1];
                var comparison=angular.copy(condition[2]);
                if(_.isNumber(parseInt(condition[2])) && !_.isNaN(parseInt(condition[2])) ){
                   vm.condition.comparison="static";
                    vm.condition.propertyComparison=parseInt(comparison);
                    $log.debug("is Number");
                }else{
                    vm.condition.comparison="property";
                    vm.condition.propertyComparison=comparison;

                }
                $log.debug(vm.condition);
            }
            
        }




        function changeDevice() {
            vm.condition={};
            $rootScope.loader = true;
            managerDeviceService.getLastEvent(vm.rule.device).finally(function() {
                $rootScope.loader = false;

            });
            
        }

        function saveRule(ev) {
            var rule = angular.copy(vm.rule);
            rule.condition=vm.condition.property+" "+vm.condition.operation+" "+vm.condition.propertyComparison;
            rule.deviceId=rule.device.deviceId;
            delete rule.device;
            rule.disabled=false;
            $rootScope.loader = true;
            $log.debug(rule);
            managerDeviceService.addRule(rule).then(function(response){
                showState(ev,response);
            }).finally(function() {
                $rootScope.loader = false;
            })

        }

        function deleteRule(ev) {
            $rootScope.loader = true;
            managerDeviceService.deleteRule(vm.rule).then(function(response){
                showStateDelete(ev,response);
            }).finally(function() {
                $rootScope.loader = false;
            })

        }

        function showState(ev,response) {
             $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Agregar Regla')
                .textContent(!vm.isEdit?'Se ha creado la regla '+ response.condition+' con éxito.':'Se ha actualizado la regla '+ response.condition+' con éxito.')
                .ariaLabel('Agregar de Nodo')
                .ok('Aceptar')
                .targetEvent(ev)
            ).then(function() {
                $state.go("app.pages.rules.list");
            });
        }


        function showStateDelete(ev,response) {
             $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Eliminar Regla')
                .textContent('Se ha eliminado con éxito la regla.')
                .ariaLabel('Agregar de Nodo')
                .ok('Aceptar')
                .targetEvent(ev)
            ).then(function() {
                $state.go("app.pages.rules.list");
            });
        }
      


    }


})();