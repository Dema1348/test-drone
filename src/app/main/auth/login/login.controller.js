(function() {
    'use strict';

    angular
        .module('app.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($rootScope, $scope, managerDeviceService, localStorageService, $state, $timeout, authService, uiHelper, $log, MQTTUtils, $mdDialog) {
        var vm = this;
        vm.login = login;
        vm.isLoading = false;
        vm.rememberMe = false;
        vm.loginForm = {}
        vm.forgotPassword = forgotPassword;


        //////////

        init();

        /**
         * Initialize
         */
        function init() {
            localStorageService.clearAll();
            MQTTUtils.onStopAllWatches();
            managerDeviceService.reset();
        }



        function login() {
            $rootScope.loader = true;
            authService.login(vm.loginForm, vm.rememberMe).then(function(response) {
                    
                    $timeout(function() {
                        $state.go("app.pages.home");
                    }, 250);
                })
                .catch(function(response) {
                    $log.debug(response);
                    if (response.status = 401) {
                        if (response.data) {
                            var dataError = response.data.error;
                            if (dataError.code = "LOGIN_FAILED") {
                                $scope.loginForm['password'].$setValidity(dataError.code, false);
                                $timeout(function() {
                                    $scope.loginForm['password'].$setValidity(dataError.code, true);
                                }, 2000);
                            }



                        }


                    }
                    $rootScope.loader = false;
                })


        }


        function forgotPassword(ev) {
            $mdDialog.show({
                controller: forgotPasswordController,
                controllerAs: 'vm',
                templateUrl: 'app/main/auth/login/forgot-password.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false
            }).then(function(response) {
                showState(ev, response);
            });
        }


        function showState(ev, response) {
             $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Envio de correo')
                .textContent('Se ha enviado con éxito un correo a '+response.email)
                .ariaLabel('Registro')
                .ok('Aceptar')
                .targetEvent(ev)
            );
        }

        function forgotPasswordController($scope, $rootScope, $log, authService) {
            var vm = this;
            vm.hide = hide;
            vm.cancel = cancel;
            vm.keypress = keypress;
            vm.reset = reset;

            function hide() {
                $mdDialog.hide();
            }


            function cancel() {
                $mdDialog.cancel();
            }

            function keypress(ev) {
                if (event.which === 13 && !$scope.forgotForm.$invalid) {
                    reset();
                }
            }

            function reset() {
                $rootScope.loader = true;
                authService.resetPassword(vm.email).then(function(response) {
                     $mdDialog.hide(response);
                }).catch(function(response) {
                    $log.debug(response);
                    if (response.status = 404) {
                        if (response.data) {
                            var dataError = response.data.error;
                            if (dataError.code = "EMAIL_NOT_FOUND") {
                                $scope.forgotForm['email'].$setValidity("EMAIL_NOT_FOUND", false);
                                
                            }



                        }


                    }
                }).finally(function() {
                    $rootScope.loader = false;
                })
            }


        }

    }
})();