(function() {
    'use strict';

    angular
        .module('app.pages.nodes')
        .controller('NodesListController', NodesListController);

    /** @ngInject */
    function NodesListController($q, $rootScope, $scope, $state, $timeout, $log, $mdDialog, Devices, UNITS, managerDeviceService, _, HelperService, AlertService, MQTTUtils) {
        var vm = this;
        vm.devices = Devices;
        vm.sensors = UNITS;

        //Metod
        vm.dialogDevice = dialogDevice;
        vm.refreshLastEvent = refreshLastEvent;
        vm.config = config;
        vm.unregister = unregister;
        vm.detalle=detalle;


        //////////

        init();

        /**
         * Initialize
         */
        function init() {
            angular.forEach(vm.devices,function(device) {
                device.loadEvent=true;
                managerDeviceService.getLastEvent(device).then(function(response) {
                    device.event=response;
                    AlertService.checkOldAlert(device);
                }).catch(function(error) {
                    $log.debug("sin cache"+error);
                }).finally(function() {
                     device.loadEvent=false;
                });
            })
                  
        }

        $scope.$on('update', function(event, eventDevice) {
            var device = _.find(vm.devices, function(device) {
                return device.deviceId === eventDevice.deviceId
            })

            $timeout(function() {
                if (device) {
                    device.event = eventDevice;
                    console.log(device.event);
                    HelperService.changeIconMarker(device, vm.sensors);

                }
                $log.debug(device);
            });


        });


        $scope.$on('$destroy', function() {

        });


      

        function detalle(ev,device) {
            $state.go('app.pages.home',{device:device});
        }


        function dialogDevice(ev, device) {
            $mdDialog.show({
                controller: DialogController,
                controllerAs: 'vm',
                templateUrl: 'app/main/pages/nodes/nodes-list/nodes-create.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                SelectDevice: device,
                Devices: vm.devices,
                clickOutsideToClose: true,
                fullscreen: true
            }).then(function(result) {
                if(result.update){
                    showUpadateDeviceState(ev, result.response);
                }else{
                    var device= result.device;
                    MQTTUtils.onStartWatchDevice(device);
                    refreshLastEvent(ev, device);
                    showAddDeviceState(ev, device);
                }
             
            });
        }



        function showAddDeviceState(ev, response) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Registrar Nodo')
                .htmlContent('Tu nodo ha sido registrado con éxito, tu cable de autentificación es <span class="text-bold">' + response.authToken + '</span>.<br>Para configurar tu nodo correctamente, debes ocupar la id  <span class="text-bold">' + response.deviceId + '</span> y el tipo de nodo es <span class="text-bold">' + response.typeId + '</span>.')
                .ariaLabel('Registrar Nodo')
                .ok('Aceptar')
                .targetEvent(ev)
            ).then(function() {

            });
        }

          function showUpadateDeviceState(ev, response) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Editar Nodo')
                .htmlContent('Tu nodo ha sido actualizado con éxito.')
                .ariaLabel('Editar Nodo')
                .ok('Aceptar')
                .targetEvent(ev)
            ).then(function() {

            });
        }

        function refreshLastEvent(ev, device) {
            device.loadEvent = true;
            managerDeviceService.refreshLastEvent(device).then(function(response) {
                device.event=response;
                AlertService.checkOldAlert(device);
            }).catch(function(error) {
                $log.debug("Sin cache",error);
            }).finally(function() {
                device.loadEvent = false;
            });
        }

      
        function unregister(ev, device) {
            var confirm = $mdDialog.confirm()
                    .title('¿Está seguro de eliminar el nodo?')
                    .htmlContent('El nodo <b>' +device.name +' </b>' + ' sera eliminado.')
                    .ariaLabel('borrar nodo')
                    .targetEvent(ev)
                    .ok('ACEPTAR')
                    .cancel('CANCELAR');

                $mdDialog.show(confirm).then(function ()
                {
                    $rootScope.loader = true;
                    managerDeviceService.unregister(device).then(function(response) {
                        unregisterState(ev, response);
                    }).finally(function() {
                        $rootScope.loader = false;
                    });

                });
            

           
        }


        function config(ev, device) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Configurar el nodo')
                .htmlContent('El nodo se debe configurar con los siguientes parametros, id del nodo <span class="text-bold">' + device.deviceId + '</span> y con el tipo <span class="text-bold">' + device.typeId + '</span>.')
                .ariaLabel('Compartir nodo')
                .ok('Aceptar')
                .targetEvent(ev)
            )
        }


        function showState(ev, response) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Dejar de seguir')
                .textContent('Se ha dejado de seguir el nodo con éxito.')
                .ariaLabel('Dejar de seguir')
                .ok('Aceptar')
                .targetEvent(ev)
            )
        }

        function unregisterState(ev, response) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('document.body')))
                .clickOutsideToClose(false)
                .title('Eliminar nodo')
                .textContent('Se ha eliminado el nodo con éxito.')
                .ariaLabel('Dejar de seguir')
                .ok('Aceptar')
                .targetEvent(ev)
            )
        }


        function DialogController($mdDialog, SelectDevice, Devices, $log, Device, LoopBackAuth, uiGmapGoogleMapApi, HelperService, managerDeviceService, _) {
            var vm = this;
            vm.device = angular.copy(SelectDevice);
            vm.devices = Devices;
            vm.hide = hide;
            vm.cancel = cancel;
            vm.register = register;
            vm.update = update;

            vm.mapStyle = HelperService.mapStyle();

            vm.marker = {
                options: {
                    draggable: true,
                    icon: '/assets/images/icons/salmon.png'
                }
            }


            if (!vm.device) {
                vm.title = 'Registrar Nodo';
                vm.newDevice = true;
                vm.device={
                    location:''
                }
                vm.device.location = {
                    latitude: -33.422431,
                    longitude: -70.614143
                }


            } else {
                vm.title = "Editar Nodo";

            }

            function hide() {
                $mdDialog.hide();
            }


            function cancel() {
                $mdDialog.cancel();
            }



            uiGmapGoogleMapApi.then(function(maps) {
                var center={};
                center=vm.device.location;

                vm.searchbox = {
                    template: 'searchbox.tpl.html',

                    options: {
                        autocomplete: true,
                        scrollwheel: true,
                        componentRestrictions: {
                            country: 'cl'
                        }
                    },
                    events: {
                        places_changed: function(searchBox) {
                            var places = searchBox.getPlaces();
                            if (places.length == 0) {
                                return;
                            } else {
                                vm.device.location = {
                                    latitude: places[0].geometry.location.lat(),
                                    longitude: places[0].geometry.location.lng()
                                }
                                vm.map.center = {
                                    latitude: places[0].geometry.location.lat(),
                                    longitude: places[0].geometry.location.lng()
                                }
                            }

                        }
                    }

                }

                vm.map = {
                    options: {
                        disableDefaultUI: false,
                        styles: vm.mapStyle,
                        disableDoubleClickZoom: true
                    },
                     center: {
                        latitude: center.latitude || -41.486373,
                        longitude: center.longitude || -72.937377
                    },
                    zoom: 10,
                    events: {
                        dblclick: function(mapModel, eventName, originalEventArgs) {
                            var e = originalEventArgs[0];
                            var latitude = e.latLng.lat();
                            var longitude = e.latLng.lng();
                            vm.device.location = {
                                latitude: latitude,
                                longitude: longitude
                            };
                            $scope.$apply();

                        }
                    }

                };

            });



            function register(ev) {
                $rootScope.loader = true;
                var device = angular.copy(vm.device);
                if (_.isEmpty(device.authToken))
                    delete device.authToken;
                $log.debug("New node register", device);
                $log.debug("-------------------------");
                managerDeviceService.register(device).then(function(response) {
                    $mdDialog.hide({device:response,update:false});
                }).catch(function(error) {
                    $log.debug(error);
                    //Todo cach error
                }).finally(function() {
                    $rootScope.loader = false;
                })
            }

            function update(ev) {
                $rootScope.loader = true;
                var device = angular.copy(vm.device);
                $log.debug("Update node",device);
                $log.debug("-------------------------");
                $q.all([managerDeviceService.updateLocation(device),managerDeviceService.update(device)]).then(function(response){
                    for ( var i = 0; i < vm.devices.length; i++ )
                        {
                            if ( vm.devices[i].id === device.id )
                            {
                                vm.devices[i] = angular.copy(vm.device);
                                break;
                            }
                        }

                    $mdDialog.hide({response:response,update:true});
                }).catch(function(error) {
                    $log.debug(error);
                    //Todo cach error
                }).finally(function() {
                    $rootScope.loader = false;
                })
            }



        }



    }


})();