(function () {
  'use strict';

  angular
    .module('app.services')
    .factory('ToastService', ToastService);

  /** @ngInject */
  function ToastService($mdToast,toastr) {

    var service = {
      error: error,
      toastrError: toastrError,
      success: success,
      info : info
    };

    return service;

    function toastrError(text) {
      toastr.error(text, 'Error');

    }

    function success(text) {
      $mdToast.show(
        $mdToast.simple()
          .toastClass("toast-success")
          .action('Aceptar')
          .hideDelay(10000)
          .position('top right')
          .textContent(text)
      );
    }

    function info(text) {
       toastr.info(text, 'Información',{timeOut:2000});

    }

    function error(text) {
      $mdToast.show(
        $mdToast.simple()
          .toastClass("toast-error")
          .action('Aceptar')
          .hideDelay(10000)
          .position('top right')
          .textContent(text)
      );
    }
  }
}());