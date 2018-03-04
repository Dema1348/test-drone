(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('MQTTUtils', MQTTUtils);

    function MQTTUtils($rootScope, $timeout, $log,$q, HelperService, AlertService,_, MQTT, ORG, USERNAME, PASSWORD, WSBROKER, WSPORT) {
        var utils;
        var cliente;
        var reconnectTimeout = 1000;
        var UUID = createUuid();
        var watches = [];
        var State = {
            CONNECTED: "CONNECTED",
            DISCONNECTED: "DISCONNECTED"
        };
        var state = State.DISCONNECTED;

        utils = {
            connectClient: connectClient,
            addWatch: addWatch,
            onStartWatchDevices: onStartWatchDevices,
            onStartWatchDevice: onStartWatchDevice,
            onStopAllWatches: onStopAllWatches,
            send: send
        };

        return utils;

        function connectClient() {

            var mqttServer = WSBROKER;
            var mqttPort = WSPORT;
            var mqttCliente = "a:" + ORG + ":" + UUID;

            var options = {
                onSuccess: onConnect,
                cleanSession: true,
                useSSL: true,
                userName: USERNAME,
                password: PASSWORD,

                onFailure: function(message) {
                    $log.debug("Fail: ", message);
                    state = State.DISCONNECTED;
                    $timeout(connectClient, reconnectTimeout);
                }
            };
            cliente = new MQTT.Client(mqttServer, mqttPort, mqttCliente);
            cliente.onConnectionLost = onConnectionLost;
            cliente.onMessageArrived = onMessageArrived;
            cliente.connect(options);



        }



        function send(msg, qos) {
            var mqttMsg = new MQTT.Message(JSON.stringify(msg));
            mqttMsg.destinationName = destinationName;
            mqttMsg.qos = qos || 2;
            $log.debug('Send to ' + mqttMsg.destinationName + ", payload: " + JSON.stringify(msg));
            cliente.send(mqttMsg);


        }



        function onConnectionLost(responseObject) {
            state = State.DISCONNECTED;
            $timeout(function() {
                $log.debug("MQTT Client: Reconnecting...");
                connectClient();
            }, 100)
            if (responseObject.errorCode !== 0) {
                $log.debug("onConnectionLost:" + responseObject.errorMessage);
            }
        }



        function onConnect() {
            state = State.CONNECTED;
            $log.debug('Client onConnected');
            handlePendingSubscribes();

        }

        function onStartWatchDevices(devices) {
            for (var i = 0; i < devices.length; i++) {
                var topic = 'iot-2/type/' + devices[i].typeId + '/id/' + devices[i].deviceId + '/evt/6/fmt/json';
                if (!watches[topic] || watches[topic].length == 0) {
                    addWatch(topic);

                    if (state == State.CONNECTED) {
                        $log.debug("subscribe to " + topic);
                        cliente.subscribe(topic);
                    }
                }
            };
        }

        function onStartWatchDevice(device) {
            var topic = 'iot-2/type/' + device.typeId + '/id/' + device.deviceId + '/evt/6/fmt/json';
            if (!watches[topic] || watches[topic].length == 0) {
                addWatch(topic);

                if (state == State.CONNECTED) {
                    $log.debug("subscribe to " + topic);
                    cliente.subscribe(topic);
                }
            }
        }

        function handlePendingSubscribes() {
            var topics = watches;
            for (var i = 0; i < topics.length; i++) {
                var topic = topics[i];
                $log.debug("handle  subscribe to " + topic);
                cliente.subscribe(topic);
            }
        }

        function addWatch(topic) {
            if (watches.indexOf(topic) == -1) {
                watches.push(topic);
            }
        }


        function onStopAllWatches() {
            for (var i = 0; i < watches.length; i++) {
                var topic = watches[i];
                $log.debug("unsubscribing from " + topic);
                if (cliente && state == State.CONNECTED)
                    cliente.unsubscribe(topic);
            }
            watches = [];

        }

        function createUuid() {
            function S4() {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            }
            return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
        }


        function onMessageArrived(message) {
            $log.debug(message);
            if (message && message.payloadString !== "") {
                var topic = message.destinationName;
                var typeId = topic.split("/")[2];
                var deviceId = topic.split("/")[4];
                var evtType = topic.split("/")[6];
                var payload = JSON.parse(message.payloadString).d;
                var timestamp = (new Date()).getTime();
                var dataOriginal = angular.copy(payload);
                var data = HelperService.addWeight(payload);
                var deviceEvent = {
                    deviceId: deviceId,
                    deviceType: typeId,
                    eventType: evtType,
                    data: data,
                    dataOriginal: dataOriginal,
                    timestamp: timestamp
                }

                $log.debug("onMessageArrived:", deviceEvent);
                 update(deviceEvent);
                 AlertService.checkAlert(deviceEvent);
            }
        }


        


        function update(data) {
            $rootScope.$broadcast('update', data);
        }

       
       
     

        




    }

})();