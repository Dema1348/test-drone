(function() {
  'use strict';

  angular
    .module('fuse')
    .directive('serverValidation', serverValidation);

  function serverValidation() {
    return {
      restrict: "A",
      require: "ngModel",
      scope: {
        ngModel: "=",
        serverValidation: "=" // String or array of strings with name of errors
      },

      link: function(scope, elem, attr, ngModelCtrl) {
        function setValidity(errorName) {
          ngModelCtrl.$setValidity(errorName, true);
        }
        if (typeof(scope.serverValidation) == "string") {
          scope.arrServerValidation = [scope.serverValidation];
        } else {
          scope.arrServerValidation = scope.serverValidation;
        }
        var firstError = scope.arrServerValidation[0];
        scope.$watch('ngModel', function() {
          // workaround to don't update $setValidity, then changed value of ngModel
          // update $setValidity, only when server-error is true
          if (firstError && ngModelCtrl.$error[firstError])
            angular.forEach(scope.arrServerValidation, setValidity);
        });
      },
    }
  }
  

})();