(function() {
    'use strict';

    angular
        .module('app.auth.register')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController($rootScope, $scope,$state, $timeout, authService, uiHelper, $log,$mdDialog) {
        var vm = this;
        vm.register = register;
        vm.isLoading = false;
        vm.registerForm = {};


        function register(ev) {
            $rootScope.loader =true;
            var user=angular.copy(vm.registerForm);
            delete user.passwordConfirm;
            vm.isLoading = true;
            authService.register(user).then(function(response) {
               showState(ev,response);
            }).catch(function(response) {
                $log.debug(response);
                if(response.status= 442){
                    if(response.data){
                        var dataError= response.data.error;
                         angular.forEach(dataError.details.codes, function(error , key) {
                            if($scope.registerForm[key])
                                $scope.registerForm[key].$setValidity(error[0], false);
                        });
                    }
                    
                }
            }).finally(function () {
                vm.isLoading=false;
                $rootScope.loader =false;
            });


        }

        function showState(ev, response) {
             $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Registro ')
                .textContent(response.firstName+' '+response.lastName+' te has registrado con éxito.')
                .ariaLabel('Registro')
                .ok('Aceptar')
                .targetEvent(ev)
            ).then(function() {
                $state.go("app.auth_login");
            });
        }

    }
})();