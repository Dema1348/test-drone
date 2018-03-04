(function() {
  'use strict';

  angular
    .module('app.services')
    .factory('AlertService', AlertService);

  function AlertService($log, $q, managerDeviceService,ToastService) {
  	
    var service = {
      checkAlert: checkAlert,
      checkOldAlert:checkOldAlert
    };

    return service;

    function checkAlert(data) {
            $q.all([managerDeviceService.getRules(),managerDeviceService.getDevices()]).then(function(response) {
                var rulers= response[0];
                var devices= response[1];
                var device = _.find(devices, function(device) {
                    return device.deviceId === data.deviceId
                })
                if(!device)
                	return;
                var condition=[];
                for (var i = 0; i < rulers.length; i++) {
                    condition = angular.copy(rulers[i].condition).split(" ");
                    $log.debug("condition",condition);

                    if (device.deviceId ==  rulers[i].deviceId) {
                        if (_.isNumber(parseInt(condition[2])) && !_.isNaN(parseInt(condition[2]))) {
                            if (eval(data.dataOriginal[condition[0]] + condition[1] + condition[2])) {
                                $log.debug("ALERT --> " + data.dataOriginal[condition[0]] + condition[1] + condition[2])
                                
                                var alert={
                                    title:"Nodo "+device.name,
                                    event:"Regla cumplida en nodo "+device.name+" "+condition[0]+ " "+ data.dataOriginal[condition[0]] +" "+ condition[1] +" "+ condition[2],
                                    deviceId: device.deviceId,
                                    timestamp: data.timestamp
                                }
                                //add danger color flag
                                for (var x = 0; x < data.data.length; x++) {
                                    if(data.data[x].id == condition[0]){
                                        data.data[x].alert=true;
                                    }else{
                                    	 data.data[x].alert=false;
                                    }
                                };
                                managerDeviceService.addAlert(alert);
                                ToastService.toastrError(alert.event);


                            }
                        } else {

                             if (eval(data.dataOriginal[condition[0]] + condition[1] + data.dataOriginal[condition[2]])) {
                                  $log.debug("ALERT --> " + data.dataOriginal[condition[0]] + condition[1] + condition[2]+ data.dataOriginal[condition[2]])
 
                                    var alert={
                                       title:"Nodo "+device.name,
                                        event:"Regla cumplida en nodo "+device.name+" "+condition[0]+ " "+ data.dataOriginal[condition[0]] +" "+ condition[1] +" "+ condition[2]+ " "+ data.dataOriginal[condition[2]],
                                        deviceId: device.deviceId,
                                        timestamp: data.timestamp
                                    }
                                for (var z = 0; z < data.data.length; z++) {
                                    if(data.data[z].id == condition[0] || data.data[z].id == condition[2]){
                                        data.data[z].alert=true;
                                    }
                                    else{
                                    	 data.data[z].alert=false;
                                    }
                                };
                                managerDeviceService.addAlert(alert);
                                ToastService.toastrError(alert.event);
                            }
                        }

                     
                    }
                };


            })
           
    }

    function checkOldAlert(device) {
          $q.all([managerDeviceService.getRules()]).then(function(response) {
                var rulers= response[0];
                var condition=[];
                $log.debug("Check Old Alert");
                for (var i = 0; i < rulers.length; i++) {
                    condition = angular.copy(rulers[i].condition).split(" ");
                    $log.debug("Condition",condition);

                    if (device.deviceId ==  rulers[i].deviceId) {

                        if (_.isNumber(parseInt(condition[2])) && !_.isNaN(parseInt(condition[2]))) {

                            if (eval(device.event.dataOriginal[condition[0]] + condition[1] + condition[2])) {
                                $log.debug("ALERT --> " + device.event.dataOriginal[condition[0]] + condition[1] + condition[2])
                              
                                //add danger olor flag
                                for (var x = 0; x < device.event.data.length; x++) {
                                    if(device.event.data[x].id == condition[0]){
                                        device.event.data[x].alert=true;
                                    }else{
                                        device.event.data[x].alert=false;

                                    }
                                };
                              

                            }
                        } else {

                             if (eval(device.event.dataOriginal[condition[0]] + condition[1] + device.event.dataOriginal[condition[2]])) {
                                  $log.debug("ALERT --> " + device.event.dataOriginal[condition[0]] + condition[1] + condition[2]+ device.event.dataOriginal[condition[2]])
 
                                   
                                for (var z = 0; z < device.event.data.length; z++) {
                                    if(device.event.data[z].id == condition[0] || device.event.data[z].id == condition[2]){
                                        device.event.data[z].alert=true;
                                    }else{
                                       device.event.data[z].alert=false;	
                                    }
                                };
                                 
                            }
                        }

                    }
                };

                

            })
    }



   }

})();