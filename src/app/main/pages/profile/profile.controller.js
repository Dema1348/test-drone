(function() {
    'use strict';

    angular
        .module('app.pages.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController($rootScope,$scope, $mdDialog,$log, authService) {
        var vm = this;
         vm.profileForm = {}
         vm.passForm = {}
         vm.updatePassword=updatePassword;
         vm.updateProfile=updateProfile
         init();


        function init() {
            authService.getCurrentUser().then(function(response){
                vm.profileForm=angular.copy(response);
            })
            
        }


        function updatePassword(ev) {
        	$rootScope.loader = true;
            authService.changePassword(vm.passForm.oldPassword,vm.passForm.newPassword).then(function(response) {
                showState(ev, response);
            }).catch(function(response) {
                 if (response.status = 400) {
                        if (response.data) {
                            var dataError = response.data.error;
                            if (dataError.code = "INVALID_PASSWORD") {
                                $scope.passForm['oldPassword'].$setValidity("INVALID_PASSWORD", false);
                                
                            }



                        }


                }

            }).finally(function() {
                $rootScope.loader = false;
            });
        }


        function updateProfile(ev) {
        	$rootScope.loader = true;
            authService.updateProfile(vm.profileForm).then(function(response) {
                $rootScope.$broadcast('updateProfile', response);
                showStateProfile(ev, response);
            }).catch(function(response) {
                $log.debug(response);
            }).finally(function() {
                $rootScope.loader = false;
            });
        }

        function showStateProfile(ev, response) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Actualizar perfil')
                .textContent('Se ha actualizado su perfil con éxito')
                .ariaLabel('Actualizar perfil')
                .ok('Aceptar')
                .targetEvent(ev)
            );
        }


        function showState(ev, response) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Actualizar contraseña')
                .textContent('Se ha actualizado la contraseña con éxito')
                .ariaLabel('Actualizar contraseña')
                .ok('Aceptar')
                .targetEvent(ev)
            );
        }






        


    }
})();