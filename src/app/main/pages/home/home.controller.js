(function() {
    'use strict';

    angular
        .module('app.pages.home')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($rootScope, $scope, $q, $interval, $log, $timeout, $mdDialog, $mdSidenav, authService, uiGmapGoogleMapApi, Devices, Device, UNITS, _, HelperService, ChartService, managerDeviceService, $stateParams, ToastService, MareasService) {
        var vm = this;
        var nowTicker;
        // Data
        vm.devices = Devices;
        vm.device={};
        vm.sensors = UNITS;
        vm.maps;




        // Methods
        
        //////////

        init();



        /**
         * Initialize
         */
        function init() {
            vm.mapStyle = HelperService.mapStyle();
            authService.getCurrentUser().then(function(response){
                vm.user=response;
            })
            vm.carousel = {
                images: [
                  {src: 'assets/images/fotos/foto-demo.jpg'},
                  {src: 'assets/images/fotos/foto-demo2.jpg'},
                ],
                templateUrl: "app/main/pages/home/slide-template.html",
                currentIndex : 0,
                autoSlide:false
            };
          

            

           
                     
            vm.time = {
                now: {
                    second: '',
                    minute: '',
                    hour: '',
                    day: '',
                    month: '',
                    year: ''
                },
                fulltime: {},
                ticker: function() {
                    var now = moment();
                    vm.time.fulltime = now;
                    vm.time.now = {
                        second: now.format('ss'),
                        minute: now.format('mm'),
                        hour: now.format('HH'),
                        day: now.format('D'),
                        weekDay: now.format('dddd'),
                        month: now.format('MMMM'),
                        year: now.format('YYYY')
                    };
                }
            };
            nowTicker = $interval(vm.time.ticker, 1000);
            vm.time.ticker();
            //Default
            vm.historyChart= ChartService.createHistory();
            
            
            


            if(vm.devices.length){
                 for (var i = 0; i < vm.devices.length; i++) {

                        if(!vm.devices[i].lineChart ){
                            vm.devices[i].lineChart=  ChartService.createLineChart();
                        }

                        if(!vm.devices[i].lineChartACC ){
                            vm.devices[i].lineChartACC=  ChartService.createLineChartACC();
                        }
                        if(!vm.devices[i].gagueBAT){
                           vm.devices[i].gagueBAT = ChartService.createGague(0,100,"%",[
                            {
                                min: 0,
                                max: 20,
                                color: '#c74048'
                            },{
                                min: 20,
                                max: 50,
                                color: '#d58d34'
                            },{
                                min: 50,
                                max: 100,
                                color: '#37af45'
                            }]); 
                        }

                        if(!vm.devices[i].gagueCHR){
                           vm.devices[i].gagueCHR = ChartService.createGague(0,440,"mA",[
                             {
                                min: 0,
                                max: 440,
                                color: '#37af45'
                            }]); 
                        }

                        if(!vm.devices[i].gaguePM10){
                           vm.devices[i].gaguePM10 = ChartService.createGague(0,100,"μm/m3",[
                             {
                                min: 0,
                                max: 10,
                                color: '#37af45'
                            },{
                                min: 10,
                                max: 20,
                                color: '#d58d34'
                            },{
                                min: 20,
                                max: 100,
                                color: '#c74048'
                            }]); 
                        }

                        if(!vm.devices[i].gaguePM10){
                           vm.devices[i].gaguePM10 = ChartService.createGague(0,100,"μm/m3",[
                             {
                                min: 0,
                                max: 10,
                                color: '#37af45'
                            },{
                                min: 10,
                                max: 20,
                                color: '#d58d34'
                            },{
                                min: 20,
                                max: 100,
                                color: '#c74048'
                            }]); 
                        }

                         if(!vm.devices[i].gaguePM2_5){
                           vm.devices[i].gaguePM2_5 = ChartService.createGague(0,100,"μm/m3",[
                             {
                                min: 0,
                                max: 10,
                                color: '#37af45'
                            },{
                                min: 10,
                                max: 20,
                                color: '#d58d34'
                            },{
                                min: 20,
                                max: 100,
                                color: '#c74048'
                            }]); 
                        }

                        if(!vm.devices[i].gagueNOISE){
                           vm.devices[i].gagueNOISE = ChartService.createGague(0,100,"dBa",[
                             {
                                min: 0,
                                max: 10,
                                color: '#37af45'
                            },{
                                min: 10,
                                max: 20,
                                color: '#d58d34'
                            },{
                                min: 20,
                                max: 100,
                                color: '#c74048'
                            }]); 
                        }

                        
                        
                        
            

                };

                if($stateParams.device){
                    vm.device=$stateParams.device;
                }else{
                    vm.device=vm.devices[0];
                }

                $log.debug("Select device ", vm.device)
                getLastEvent(vm.device);
                getWeather();
            }

              
        }



        $scope.$on('$viewContentLoaded', function() {
            $rootScope.loader = false;
        })

        $scope.$on('$destroy', function() {
            $interval.cancel(nowTicker);
        });

        //New Data
        $scope.$on('update', function(event, eventDevice) {
            var device = _.find(vm.devices, function(device) {
                return device.deviceId === eventDevice.deviceId
            })

            $timeout(function() {
                if (device) {
                    device.event = eventDevice;
                    updateValues(device);
                }
                $log.debug(device);
            });
        });

        function updateValues(device) {
            var NIVEL_RIO=0;
            var US_DEFAULT=700; 
            var newValueBAT=device.event.dataOriginal.BAT?1*device.event.dataOriginal.BAT:null;
            var newValueCHR=device.event.dataOriginal.CHR?1*device.event.dataOriginal.CHR:null;
            var newValueUS=device.event.dataOriginal.US?1*device.event.dataOriginal.US:null;
            var newValueACCX=device.event.dataOriginal.ACCX?1*device.event.dataOriginal.ACCX:null;
            var newValueACCY=device.event.dataOriginal.ACCY?1*device.event.dataOriginal.ACCY:null;
            var newValueACCZ=device.event.dataOriginal.ACCZ?1*device.event.dataOriginal.ACCZ:null;
          
            var timestamp = (new Date(device.event.timestamp)).getTime();


             if(newValueBAT){
                 device.gagueBAT.diff=   newValueBAT -   device.gagueBAT['value'] ;
                 device.gagueBAT['value'] = newValueBAT ;
                 device.gagueBAT.timestamp = timestamp;
            }


            if(newValueACCX && newValueACCY && newValueACCZ){
                 device.lineChartACC.data[0].values.push({fecha: timestamp, value: newValueACCX});
                 device.lineChartACC.data[1].values.push({fecha: timestamp, value: newValueACCY});
                 device.lineChartACC.data[2].values.push({fecha: timestamp, value: newValueACCZ});
            }


            if(newValueCHR){
                 device.gagueCHR.diff=   newValueCHR -   device.gagueCHR['value'] ;
                 device.gagueCHR['value'] = newValueCHR ;
                 device.gagueCHR.timestamp = timestamp;
            }
            
            if(newValueUS){
                var US_GENERATE = NIVEL_RIO + (US_DEFAULT - newValueUS);
                device.lineChart.data[0].values.push({fecha: timestamp, value: US_GENERATE});

            }

                  
        }

        function getLastEvent(device) {
            $rootScope.loader = true;

            managerDeviceService.getLastEvent(device).then(function(response) {
                device.event=response;
                updateValues(device);
            }).finally(function() {
                   $rootScope.loader = false;
            }).catch(function(error) {
                $log.debug("sin cache"+error);
            });
        }
       

        function getAddress() {
            $log.debug("Get address");
            if (vm.device.address)
                return;

            var geocoder = new vm.maps.Geocoder();
            var location = new google.maps.LatLng(vm.device.location.latitude, vm.device.location.longitude); // turn coordinates into an object          

            geocoder.geocode({
                'latLng': location
            }, function(results, status) {
                $log.debug(results);
                if (status == google.maps.GeocoderStatus.OK) {
                    vm.device.address = results[0].formatted_address;
                }
            });
        }

        function getWeather() {
            managerDeviceService.getWeather(vm.device).then(function(response) {
                $rootScope.weather=response;
            })
        }

      

        uiGmapGoogleMapApi.then(function(maps) {
            var center={};
            vm.maps = maps;

            if (vm.device &&  vm.device.location) 
                center = vm.device.location;
            vm.map = {
                options: {
                    disableDefaultUI: false,
                    styles: vm.mapStyle
                },
                center: {
                    latitude: center.latitude || -41.486373,
                    longitude: center.longitude || -72.937377
                },
                zoom: 9,
                fit: true,
                cluster: {
                    minimumClusterSize: 4,
                    zoomOnClick: true,
                    styles: [{
                        width: 32,
                        height: 32,
                        textColor: 'white',
                        textSize: 14
                    }],
                    averageCenter: true,
                    clusterClass: 'cluster-icon'
                },
                markersEvents: {
                    click: function(marker, eventName, model, args) {
                         if(vm.device.deviceId != model.deviceId){
                             $log.debug('Click marker', model);
                             $log.debug('------------------');
                             vm.device = model;
                             ToastService.info("Nodo "+vm.device.name+" seleccionado");
                             getLastEvent(vm.device);
                         }
                        
                       
                        

                    }
                }

            };



        });

      



    }
})();