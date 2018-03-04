(function() {
  'use strict';

  angular
    .module('app.services')
    .factory('ChartService', ChartService);

  function ChartService($log) {
  	var gagueTemplate={
        value:0,
        precision:2,
        ranges:[]
  	}


  	var historyTemplate =   {
                options: {
                    chart: {
                        type                   : 'lineChart',
                        noData                 : 'Esperando información...',
                        margin                 : {
                            top   : 32,
                            right : 32,
                            bottom: 32,
                            left  : 32
                        },
                         showValues: true,
                       
                        useInteractiveGuideline: true,
                        duration               : 2,
                        clipEdge               : true,
                        clipVoronoi            : false,
                        interpolate            : 'cardinal',
                        showLegend             : true,
                        x                      : function (d)
                        {
                            return d.x;
                        },
                        y                      : function (d)
                        {
                            return d.y;
                        },
                        xAxis                 : {
                            ticks:5,
                            showMaxMin:true,
                            staggerLabels:true,
                            tickFormat: function (d)
                            {
                                var date = new Date(d);
                                return d3.time.format('%d/%m/%Y %H:%M')(date);
                            }
                        },
                        yAxis                  :{
                            tickFormat: function(d) {
                                return d3.format(".1f")(d);
                            }
                        },
                        interactiveLayer       : {
                            tooltip: {
                                gravity: 's',
                                classes: 'gravity-s'
                            }
                        }
                    }
                },
                data   : [{
                    "key": "Oxigeno",
                    "color":'#0075C9',
                    "values": [

                    ]
                },
                {
                    "key": "Temperatura",
                     "color":'#F9CCC7',
                    "values": [

                    ]
                }]
    }

    var twoHoursBefore = new Date();
    twoHoursBefore.setHours(twoHoursBefore.getHours() - 2);



    function generateFakeData() {
        var now = new Date();
        

        var array=[

            { "fecha" :  new Date( now.getTime() - 1000 * 1000*14 ), "value" : -140.73 },
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*13 ), "value" : -120.54 },
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*12 ), "value" : -99.64 },
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*11 ), "value" : -40.56 },
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*10 ), "value" : -10.23 },
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*9 ) , "value" : 34.32 },
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*8 ) , "value" : 54.45},
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*7 ) , "value" : 60.86 },
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*6 ) , "value" : 53.42},
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*5 ) , "value" : 44.14},
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*4 ) , "value" : 24.08 },
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*3 ) , "value" : 50.96},
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*2 ) , "value" : 100.19 },
            { "fecha" :  new Date( now.getTime() - 1000 * 1000*1 ) , "value" : 240.05 }
        ]
        return array;
    };


    function generateFakeData2() {
        var now = new Date();
        var data = [{
                    "key": "ACC X",
                    "values": []
                },{
                    "key": "ACC Y",
                    "values": []
                },{
                    "key": "ACC Z",
                    "values": []
                }];
        for (var i = 0; i < 10; i++) {
            data[0].values.push({ "fecha" :  new Date( now.getTime() - 1000 * 1000*(14-i) ), "value" : Math.floor((Math.random() * 200) + 1)})
            data[1].values.push({ "fecha" :  new Date( now.getTime() - 1000 * 1000*(14-i) ), "value" : Math.floor((Math.random() * -1000) -500 )})
            data[2].values.push({ "fecha" :  new Date( now.getTime() - 1000 * 1000*(14-i) ), "value" : Math.floor((Math.random() * 1000) + 800)})
        };

       
        return data;
    };

    var lineChartTemplate=   {
                options: {
                    chart: {
                        type                   : 'historicalBarChart',
                        noData                 : 'Esperando información...',
                        color                  : ['#0075C9'],
                        
                        margin                 : {
                            top   : 32,
                            right : 32,
                            bottom: 32,
                            left  : 32
                        },
                         showValues: true,
                        isArea                 : true,
                        useInteractiveGuideline: true,
                        duration               : 500,
                        clipEdge               : true,
                        clipVoronoi            : false,
                        interpolate            : 'cardinal',
                        showLegend             : false,
                        yDomain                : [-300, 300],
                        x                      : function (d)
                        {
                            return d.fecha;
                        },
                        y                      : function (d)
                        {
                            return d.value;
                        },
                        xAxis                 : {
                            ticks:4,
                            staggerLabels:true,
                            tickFormat: function (d)
                            {
                                var date = new Date( d);
                                return d3.time.format('%d/%m/%Y %H:%M')(date);
                            }
                        },
                        yAxis                  :{
                            ticks:10
                        },
                        interactiveLayer       : {
                            tooltip: {
                                gravity: 's',
                                classes: 'gravity-s'
                            }
                        }
                    }
                },
                data   : [{
                    "key": "cm",
                    "values": generateFakeData()
                }]
            }

    var lineChartACC=   {
                options: {
                    chart: {
                        type                   : 'lineChart',
                        noData                 : 'Esperando información...',                        
                        margin                 : {
                            top   : 32,
                            right : 32,
                            bottom: 32,
                            left  : 32
                        },
                         showValues: true,
                        isArea                 : false,
                        useInteractiveGuideline: true,
                        duration               : 500,
                        x                      : function (d)
                        {
                            return d.fecha;
                        },
                        y                      : function (d)
                        {
                            return d.value;
                        },
                        xAxis                 : {
                            ticks:4,
                            staggerLabels:true,
                            tickFormat: function (d)
                            {
                                var date = new Date( d);
                                return d3.time.format('%d/%m/%Y %H:%M')(date);
                            }
                        },
                        yAxis                  :{
                            ticks:4
                        },
                        interactiveLayer       : {
                            tooltip: {
                                gravity: 's',
                                classes: 'gravity-s'
                            }
                        }
                    }
                },
                data   : generateFakeData2()
            }

    var service = {
      createGague: createGague,
      createHistory:createHistory,
      createLineChart:createLineChart,
      createLineChartACC:createLineChartACC
    };

    return service;

    function createGague(lowerLimit,upperLimit,unit,ranges) {
    	var gague= angular.copy(gagueTemplate);
    	gague.lowerLimit=lowerLimit;
    	gague.upperLimit=upperLimit;
    	gague.unit=unit;
    	gague.ranges=ranges;	
    	return  gague;
    }


    function createHistory() {
    	var history= angular.copy(historyTemplate);
    	return history;
    }

    function createLineChart() {
    	var lineChart = angular.copy(lineChartTemplate);
    	return lineChart;
    }

    function createLineChartACC() {
        var lineChart = angular.copy(lineChartACC);
        return lineChart;
    }


   }

})();