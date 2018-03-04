(function () {
  'use strict';

  angular
    .module('app.services')
    .factory('MareasService', MareasService);

  /** @ngInject */
  function MareasService($http,_ , moment) {
  	//var url='http://www.shoa.cl/mareas/mareas_p.php';
	// var headers = {
	// 			'Access-Control-Allow-Origin' : '*',
	// 			'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
	// 			'Content-Type': 'application/x-www-form-urlencoded',
	// 			'Accept': 'application/json'
	// 		};
	var LIMIT_DAY=1;
	


	var service = {
      getMarea: getMarea,
      getPuertos: getPuertos
    };

    return service;


    function getMarea() {
   	 
   	var now= moment(); 

   	return $http.get('app/data/mareas/puertomontt.json').then(function(response) {
   	 	var mareas =[];
   	 	angular.forEach(response.data.mareas,function(marea) {
   	 		if(moment(marea.Campo1).diff(now, 'days') >=0  && moment(marea.Campo1).diff(now, 'days')<=LIMIT_DAY){
   	 			var date = moment(marea.Campo1);
   	 			if(marea.Campo2){
   	 				var parseTime= getTime(marea.Campo2);
   	 				var fullDate= date.add(parseTime.hour, 'hour').add(parseTime.minute, 'minute');
   	 				var data=marea.Campo3.split(' ');
   	 				mareas.push({fecha:fullDate.toDate().getTime(), value: data[0],symbol:data[1]});
   	 			}
   	 			if(marea.Campo4){
   	 				var parseTime= getTime(marea.Campo4);
   	 				var fullDate= date.add(parseTime.hour, 'hour').add(parseTime.minute, 'minute');
   	 				var data=marea.Campo5.split(' ');
   	 				mareas.push({fecha:fullDate.toDate().getTime(), value: data[0],symbol:data[1]});
   	 			}

   	 			if(marea.Campo6){
   	 				var parseTime= getTime(marea.Campo6);
   	 				var fullDate= date.add(parseTime.hour, 'hour').add(parseTime.minute, 'minute');
   	 				var data=marea.Campo7.split(' ');
   	 				mareas.push({fecha:fullDate.toDate().getTime(), value: data[0],symbol:data[1]});
   	 			}


   	 			if(marea.Campo8){
   	 				var parseTime= getTime(marea.Campo8);
   	 				var fullDate= date.add(parseTime.hour, 'hour').add(parseTime.minute, 'minute');
   	 				var data=marea.Campo9.split(' ');
   	 				mareas.push({fecha:fullDate.toDate().getTime(), value: data[0],symbol:data[1]});
   	 			}
   	 			
   	 			//var parseValue= {fecha:fullDate ,mediciones:[{hora:marea.Campo2,medicion:marea.Campo3},{hora:marea.Campo4,medicion:marea.Campo5},{hora:marea.Campo6,medicion:marea.Campo7},{hora:marea.Campo8,medicion:marea.Campo9}]}
   	 			//mareas.push(parseValue);
   	 		}

   	 	})

      
      
   	 
   	 	return  _.filter(mareas,function(marea) {
          if(now < moment(marea.fecha))
            return marea;
      });

   	 });

    }

    function getTime(time) {
    	var timeSplit= time.split(':')
    	var hour= timeSplit[0];
    	if(hour>12){
    		hour-=12;
    	}
    	var minute =timeSplit[1];
    	return {hour:hour,minute:minute};
    }

    function getPuertos() {
    	return puertosJson;
    }
    
  }
}());