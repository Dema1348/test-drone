(function () {
    'use strict';

    angular
        .module('fuse')
        .factory('uiHelper', uiHelper);

    function uiHelper( $mdToast) {
        var service = {
            showToast: showToast
        };
        return service;

        function showToast(text, time, position) {
            $mdToast.show(
		      $mdToast.simple()
		        .textContent(text)
		        .position( position||'top right')
		        .hideDelay(time||3000)
		    );
        }

       
    }
})();