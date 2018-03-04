(function() {
  'use strict';

  angular
    .module('app.services')
    .factory('managerDeviceService', managerDeviceService);

  function managerDeviceService(ApiUser, LoopBackAuth,ChartService, HelperService, Device, Event, Weather, $q, $log, _, Ruler) {
    var devicesCache;
    var devicesTypeCache;
    var rules;
    var alertsCache;

   
    var service = {
      getDevices: getDevices,
      getRules: getRules,
      addRule: addRule,
      getAlerts: getAlerts,
      addAlert: addAlert,
      deleteRule: deleteRule,
      newDeviceCache: newDeviceCache,
      register: register,
      update: update,
      unregister: unregister,
      getLastEvent: getLastEvent,
      refreshLastEvent: refreshLastEvent,
      getLocacion: getLocacion,
      updateLocation: updateLocation,
      reset: reset,
      getHistory: getHistory,
      count: count,
      getReports: getReports,
      getReportsFull: getReportsFull,
      getWeather: getWeather
    };

    return service;

    function setDevices(devices) {
      devicesCache = devices;
    }

    function setRules(rules) {
      rules = rules;
    }

    function newDeviceCache(device) {
      HelperService.changeIconMarker(device);
      devicesCache.push(device);
    }

    function deleteDeviceCache(device) {
      var i = _.findIndex(devicesCache, {
        deviceId: device.deviceId
      });
      if (i != -1)
        devicesCache.splice(i, 1);

    }

    function deleteRuleCache(rule) {
      var i = _.findIndex(rules, {
        id: rule.id
      });
      if (i != -1)
        rules.splice(i, 1);

    }

    function register(device) {
      return Device.register(device).$promise.then(function(response) {
        $log.debug('new register response', response);
        $log.debug('------------------');
        newDeviceCache(response);
        return response;
      });
    }


    function update(device) {
      return Device.update({deviceId:device.deviceId,typeId:device.typeId,deviceInfo:device.deviceInfo,name:device.name}).$promise.then(function(response) {
        $log.debug('update response', response);
        $log.debug('------------------');
        return response;
      });
    }



    function unregister(device) {
      return Device.unregister({deviceId:device.deviceId,typeId:device.typeId}).$promise.then(function(response) {
        $log.debug('unregister response', response);
        $log.debug('------------------');
        deleteDeviceCache(device);
        return response;
      });
    }



    function getLocacion(device) {
      if (!device.location) {
        return Device.location({deviceId:device.deviceId,typeId:device.typeId}).$promise.then(function(response) {
          device.location = response;
          $log.debug('Device location', response);
          $log.debug('------------------');
          return response;
        });
      }
      return $q.when(device.location);
    }


  function updateLocation(device) {
     
      return Device.updatelocation({deviceId:device.deviceId,typeId:device.typeId,location:device.location}).$promise.then(function(response) {
        $log.debug('Device new location', response);
        $log.debug('------------------');
        return response;
      });
    }

    function getDevices() {
      if (!devicesCache) {
        return ApiUser.devices({
          id: LoopBackAuth.currentUserId
        }).$promise.then(function(response) {
           var mapDevice = _.map(response, function(device) {
            HelperService.changeIconMarker(device);

            return device;
          })
          devicesCache = mapDevice;
          return devicesCache;
        });
      }

      return $q.when(devicesCache);


    }

    function getRules() {

      if (!rules) {
        return ApiUser.rules({
          id: LoopBackAuth.currentUserId
        }).$promise.then(function(response) {
          rules = response;
          return response;
        });
      }

      return $q.when(rules);

    }

    function addRule(rule) {
      rule.apiUserId = LoopBackAuth.currentUserId;
      return Ruler.replaceOrCreate(rule)
        .$promise.then(function(response) {
          var find = false;
          for (var i = 0; i < rules.length; i++) {
            if (rules[i].id === response.id) {
              rules[i] = response;
              find = true;
              break;
            }
          }
          if (!find)
            rules.push(response);
          return response;
        });
    }

    function getAlerts() {
      if (!alertsCache) {
        return ApiUser.alerts({
          id: LoopBackAuth.currentUserId
        }).$promise.then(function(response) {
          alertsCache = response;
          return response;
        });
      }

      return $q.when(alertsCache);
    }

    function addAlert(alert) {    
        alertsCache.unshift(alert);
    }



    function deleteRule(rule) {
      var rule = rule;
      return Ruler.deleteById({
        id: rule.id
      }).$promise.then(function(response) {
        deleteRuleCache(rule)
        return response;
      });
    }


    function getLastEvent(device) {
      if (!device.event) {
        return Device.cache({deviceId:device.deviceId,typeId:device.typeId}).$promise.then(function(response) {
          response.dataOriginal= angular.copy(response.data);
          response.data = HelperService.addWeight(response.data);
          HelperService.changeIconMarker(device);
          $log.debug('Device Cache', response);
          $log.debug('------------------');
          return response;
        })
      }
      return $q.when(device.event);

    }


    function refreshLastEvent(device) {
       return Device.cache({deviceId:device.deviceId,typeId:device.typeId}).$promise.then(function(response) {
          response.dataOriginal= angular.copy(response.data);
          response.data = HelperService.addWeight(response.data);
          HelperService.changeIconMarker(device);
          $log.debug('Device  refresh Cache', response);
          $log.debug('------------------');
          return response;
        })
    }



   


    function getHistory(device, limit, skip) {
      if (!device.history) {
        return Event.find({
          filter: {
            limit: limit || 100,
            skip: skip || 0,
            order: "timestamp DESC",
            where: {
              deviceId: device.deviceId
            },
            fields: {
              payload: true,
              timestamp: true
            }
          }
        }).$promise.then(function(response) {

          device.history = _.map(response, function(event) {
            return {
              data: HelperService.addWeight(event.payload),
              timestamp: event.timestamp
            };
          });
          $log.debug('History from device', device);
          $log.debug('------------------');
          return device;
        });
      }

      return $q.when(device);

    }

    function count(device) {
        return Device.events.count({
            id: device.deviceId
        }).$promise.then(function(response) {

          $log.debug('Count from device event', response.count);
          $log.debug('------------------');
          return response.count;
        });
    }

    function getReports(device, limit, skip) {

      return Device.events({id: device.deviceId,
        filter: {
          limit: limit || 100,
          skip: skip || 0,
          order: "timestamp DESC",
          fields: {
            payload: true,
            timestamp: true
          }
       } 
      }).$promise.then(function(response) {

        response = _.map(response, function(event) {
          return {
            data: HelperService.addWeight(event.payload),
            timestamp: event.timestamp
          };
        });
        $log.debug('Reports from device', device);
        $log.debug('------------------');
        return response;
      });



    }

    function getReportsFull(device) {

      return Device.events(
          {id: device.deviceId,
          filter: {
          order: "timestamp DESC",
          fields: {
            payload: true,
            timestamp: true
          }
        }
      }
      ).$promise.then(function(response) {

        response = _.map(response, function(event) {
          return {
            data: HelperService.addWeight(event.payload),
            timestamp: event.timestamp
          };
        });
        $log.debug('Reports full from device', device);
        $log.debug('------------------');
        return response;
      });



    }



    function getWeather(device) {
      if (device.location) {
        return Weather.today({
          latitude: device.location.latitude,
          longitude: device.location.longitude
        }).$promise.then(function(response) {
          $log.debug(response);
          return response;
        });
      }      

    }

    function reset() {
      devicesCache = null;
      devicesTypeCache = null;
      rules = null;
      alertsCache = null;
    }
  }
})();