(function() {
  'use strict';

  angular
    .module('app.services')
    .factory('HelperService', HelperService);

  function HelperService($log, Device, $q, _, $filter, moment, $timeout, UNITS) {
    var service = {
      changeIconMarker: changeIconMarker,
      mapStyle: mapStyle,
      addWeight: addWeight,
      DOFormula:DOFormula
    };
    return service;



    function changeIconMarker(device, sensors) {

      var path = "/assets/images/icons/";
      var now = moment();
      device.icon = path + "salmon.png";
      device.options = {
        labelClass: "smart-icon dark",
        labelAnchor: '30 50',
        labelContent: device.name
      };

    }

    function DOFormula(data) {
            var tc=1*data.WT;
            var muestra= 1*data.DO;
            var sal = 32.1;
            var tk=0.01*(tc+273.5)
            var A = -173.4292+(249.6339/tk)+(143.3483*(Math.log(tk)))+(-21.8492*tk)+(sal*(-0.033096+(0.014259+(-0.0017*tk))*tk))
            return ( (Math.exp(A)/0.7)* muestra)/100;
    }



    function mapStyle() {
      return [{
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f7f1df"
        }]
      }, {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
          "color": "#d0e3b4"
        }]
      }, {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi.medical",
        "elementType": "geometry",
        "stylers": [{
          "color": "#fbd3da"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#bde6ab"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffe15f"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#efd151"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "black"
        }]
      }, {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#cfb2db"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#a2daf2"
        }]
      }];

    }


    function addWeight(event) {
      var prioritys = UNITS;

      return _.sortBy(_.map(event, function(value, key) {


        return {
          id: key,
          value: value,
          weight: _.findWhere(prioritys, {
            id: key
          }) ? _.findWhere(prioritys, {
            id: key
          }).weight || 0 : 0
        };
      }), 'weight').reverse();
    }



  }
})();