(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('authService', authService);

    function authService(ApiUser, $rootScope, $q) {
        var currentUser;
        var service = {
            login: login,
            logout: logout,
            register: register,
            isAuthenticated: isAuthenticated,
            getCurrentUser: getCurrentUser,
            resetPassword: resetPassword,
            setPassword:setPassword,
            changePassword:changePassword,
            updateProfile:updateProfile
        };
        return service;

        function login(credentials, rememberMe) {
            return ApiUser
                .login({
                    rememberMe: rememberMe
                }, credentials)
                .$promise;
        }

        function logout() {
            currentUser=null;
            return ApiUser
                .logout().$promise;
        }

        function register(newUser) {
            return ApiUser.create(newUser).$promise;
        }

        function isAuthenticated() {
            return ApiUser.isAuthenticated();
        }

        function getCurrentUser() {
            if (!currentUser) {
                return  ApiUser.getCurrent().$promise.then(function(response) {
                    currentUser=response;
                    return response;
                });              
            }

            return $q.when(currentUser);
        }

        function resetPassword(email) {
            return ApiUser.resetPassword({email:email}).$promise;
        }

        function setPassword(access_token,password) {
            return ApiUser.setPassword({access_token:access_token},{newPassword:password}).$promise;
        }

        function changePassword(oldPassword,newPassword) {
            return ApiUser.changePassword({oldPassword:oldPassword,newPassword:newPassword}).$promise;
        }

        function updateProfile(newProfile) {
            return ApiUser.prototype$patchAttributes(newProfile).$promise.then(function(response) {
                currentUser=response;
                return response;
            })
        }
    }
})();