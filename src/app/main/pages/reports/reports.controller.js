(function() {
    'use strict';

    angular
        .module('app.pages.reports')
        .controller('ReportsController', ReportsController);

    /** @ngInject */
    function ReportsController($rootScope, $log, $filter, UNITS, Devices, managerDeviceService, moment, alasql) {
        var vm = this;
        vm.devices = Devices;
        vm.sensors = UNITS;
        vm.selectDevices = selectDevices;
        vm.getEvents = getEvents;
        vm.exportCvs = exportCvs;
        vm.total=50;



        init();


        function init() {
            vm.device = vm.devices[0];


            vm.query = {
                limit: 5,
                page: 1,
                filter: ""
            };

            vm.filter = {
                options: {
                    debounce: 500
                }
            };
            if( vm.device)
             initData();
           
        }



        function selectDevices(device) {
            vm.device = device;
            initData();
        }


        function initData() {
             vm.isLoading = true;
            getCount();
            getLastEvent();
            managerDeviceService.getReports(vm.device, vm.query.limit, (vm.query.page - 1) * vm.query.limit).then(function(response) {
                vm.reports = response;
            }).finally(function() {
                vm.isLoading = false;
            })
        }


      function getLastEvent() {
            managerDeviceService.getLastEvent(vm.device).then(function(response) {
                vm.device.event=response;
            }).catch(function(error) {
                $log.debug("sin cache"+error);
            });
        }


        function getCount() {
            managerDeviceService.count(vm.device).then(function(count) {
                vm.total = count;
            }).finally(function() {

            })
        }

        function getEvents() {
             vm.isLoading = true;
            managerDeviceService.getReports(vm.device, vm.query.limit, (vm.query.page - 1) * vm.query.limit).then(function(response) {
                vm.reports = response;
            }).finally(function() {
                vm.isLoading = false;
            })
        };


        function exportCvs() {
            $rootScope.loader = true;
            managerDeviceService.getReportsFull(vm.device).then(function(response) {
                var reportArray = _.map(response, function(sensors) {
                    var data = {};
                    data.Fecha = moment(sensors.timestamp).format();
                    for (var i = 0; i < sensors.data.length; i++) {
                        if (_.isNumber(parseInt(sensors.data[i].value))) {
                            sensors.data[i].value = sensors.data[i].value * 1;
                        }
                        data[$filter('parseUnits')(sensors.data[i].id, vm.sensors)] = sensors.data[i].value;
                    };
                    return data;
                })

                $log.debug(reportArray);
                alasql('SELECT * INTO XLSX("reporte-haibu-smart.xlsx",{headers:true}) FROM ?', [reportArray], function(error) {
                    $log.debug(error);
                })

            }).finally(function() {
                $rootScope.loader = false;
            })



        }


    }
})();