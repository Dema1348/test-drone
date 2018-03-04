(function() {
    'use strict';

    angular
        .module('app.auth.reset')
        .controller('ResetController', ResetController);

    /** @ngInject */
    function ResetController($rootScope, $scope, $stateParams, $state, $timeout, authService, $log, $mdDialog) {
        var vm = this;
        vm.reset = reset;

        //////////

        init();

        /**
         * Initialize
         */
        function init() {

        }



        function reset(ev) {
            $rootScope.loader = true;
            authService.setPassword($stateParams.access_token,vm.resetForm.password).then(function(response) {
                $log.debug(response);
                showState(ev, response);
            }).catch(function(response) {
                 if (response.status = 401) {
                        if (response.data) {
                            var dataError = response.data.error;
                            if (dataError.code = "AUTHORIZATION_REQUIRED") {
                                $scope.resetForm['password'].$setValidity("AUTHORIZATION_REQUIRED", false);
                                
                            }



                        }


                }

            }).finally(function() {
                $rootScope.loader = false;
            });


        }



        function showState(ev, response) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Reiniciar contraseña')
                .textContent('Se ha actualizado la contraseña con éxito')
                .ariaLabel('Reiniciar contraseña')
                .ok('Aceptar')
                .targetEvent(ev)
            ).then(function() {
                $state.go('app.auth_login');
            });
        }



    }
})();