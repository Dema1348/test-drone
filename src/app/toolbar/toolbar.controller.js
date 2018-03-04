(function() {
    'use strict';

    angular
        .module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($scope, $rootScope, $q, $state, $timeout, $mdSidenav, $translate, $mdToast, $log, $mdDialog, msNavigationService, authService, Device, LoopBackAuth, managerDeviceService,AlertService,ChartService,HelperService, MQTTUtils) {
        var vm = this;

        // Data
        $rootScope.global = {
            search: ''
        };

        vm.bodyEl = angular.element('body');
        vm.languages = {
            en: {
                'title': 'English',
                'translation': 'TOOLBAR.ENGLISH',
                'code': 'en',
                'flag': 'us'
            },
            es: {
                'title': 'Spanish',
                'translation': 'TOOLBAR.SPANISH',
                'code': 'es',
                'flag': 'es'
            }
        };

        // Methods
        vm.toggleSidenav= toggleSidenav;
        vm.logout = logout;
        vm.changeLanguage = changeLanguage;
        vm.addNode = addNode;
        vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
        vm.toggleMsNavigationFolded = toggleMsNavigationFolded;
        vm.search = search;
        vm.searchResultClick = searchResultClick;



        //////////

        init();

        /**
         * Initialize
         */
        function init() {
            authService.getCurrentUser().then(function(response) {
                 vm.customer=response;
            });
            vm.selectedLanguage = vm.languages[$translate.preferredLanguage()];
        }


        $rootScope.$on('updateProfile', function(event, newProfile) {
          $log.debug(newProfile);
          vm.customer=newProfile;
        });


        function toggleSidenav(sidenavId) {
            $mdSidenav(sidenavId).toggle();
        }


        /**
         * Add node to User
         */
        function addNode(ev) {
            $mdDialog.show({
                controller: addNodeController,
                controllerAs: 'vm',
                templateUrl: 'app/toolbar/addNode.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false
            }).then(function(device) {
                MQTTUtils.onStartWatchDevice(device);
                HelperService.changeIconMarker(device);
                  device.historyChart= ChartService.createHistory();
                  device.gagueDO = ChartService.createGague(0,20,"mg/l",[
                  {
                      min: 0,
                      max: 4.5,
                      color: '#c74048'
                  },
                  {
                      min: 4.5,
                      max: 6.0,
                      color: '#d58d34'
                  },
                  {
                      min: 6.0,
                      max: 20,
                      color: '#37af45'
                  }
                  ]);
                  
                  device.gagueWT = ChartService.createGague(-40,40,"°C",[
                  {
                      min: -40,
                      max: 40,
                      color: '#37af45'
                  }]); 
                  
                  managerDeviceService.getLastEvent(device).then(function(response) {
                    device.event=response;
                    AlertService.checkOldAlert(device);
                  }).catch(function(error) {
                    $log.debug("no cache");
                  });
                    showState(ev,device);
            });
        }


        function showState(ev,response) {
             $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Agregar Nodo')
                .textContent('El nodo '+ response.name+' se ha sido seguido con éxito.')
                .ariaLabel('Agregar de Nodo')
                .ok('Aceptar')
                .targetEvent(ev)
            ).then(function() {
                // $state.go("app.home");
            });
        }

        function addNodeController($rootScope,$scope,$log, Device, $mdDialog, managerDeviceService) {
            var vm = this;
            vm.hide = hide;
            vm.cancel = cancel;
            vm.add = add;


           

            function hide() {
                $mdDialog.hide();
            }

            function cancel() {
                $mdDialog.cancel();
            }


            function add() {
                $rootScope.loader =true;
                var node = vm.deviceForm;
                node.userId = LoopBackAuth.currentUserId;
                $log.debug("Node", node);
                $log.debug("------------");
                Device.create(node).$promise.then(function(response) {
                    managerDeviceService.newDeviceCache(response);
                    $mdDialog.hide(response);
                }).catch(function(response) {
                    if (response.status = 401) {
                        if (response.data) {
                            var dataError = response.data.error;
                            if (dataError.statusCode == 404)
                                $scope.deviceForm['deviceId'].$setValidity("not_found", false);


                        }


                    }
                }).finally(function() {
                    $rootScope.loader =false;
                });

            }
        }

        /*
         * Logout Function
         */
        function logout() {
            $rootScope.loader =true;
            authService.logout().then(function(response) {
                $state.go('app.auth_login');
            }).finally(function() {
                $rootScope.loader =false;
            });

        }

        /**
         * Change Language
         */
        function changeLanguage(lang) {
            vm.selectedLanguage = lang;
            $translate.use(lang.code);
        }

        /**
         * Toggle horizontal mobile menu
         */
        function toggleHorizontalMobileMenu() {
            vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
        }

        /**
         * Toggle msNavigation folded
         */
        function toggleMsNavigationFolded() {
            msNavigationService.toggleFolded();
        }

        /**
         * Search action
         *
         * @param query
         * @returns {Promise}
         */
        function search(query) {
            var navigation = [],
                flatNavigation = msNavigationService.getFlatNavigation(),
                deferred = $q.defer();

            // Iterate through the navigation array and
            // make sure it doesn't have any groups or
            // none ui-sref items
            for (var x = 0; x < flatNavigation.length; x++) {
                if (flatNavigation[x].uisref) {
                    navigation.push(flatNavigation[x]);
                }
            }

            // Todo acceso directo a nodos
            if (query) {
                navigation = navigation.filter(function(item) {
                    if (angular.lowercase(item.title).search(angular.lowercase(query)) > -1) {
                        return true;
                    }
                });
            }

            // Fake service delay
            $timeout(function() {
                deferred.resolve(navigation);
            }, 1000);

            return deferred.promise;
        }

        /**
         * Search result click action
         *
         * @param item
         */
        function searchResultClick(item) {
            // If item has a link
            if (item.uisref) {
                // If there are state params,
                // use them...
                if (item.stateParams) {
                    $state.go(item.state, item.stateParams);
                } else {
                    $state.go(item.state);
                }
            }
        }
    }

})();