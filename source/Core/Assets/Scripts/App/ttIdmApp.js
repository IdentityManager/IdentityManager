/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttIdmApp", ['ngRoute', 'ttIdm', 'ttIdmUI', 'ttIdmUsers', 'ttIdmRoles']);
    function config(PathBase, $routeProvider) {
        $routeProvider
            .when("/", {
                controller: 'HomeCtrl',
                templateUrl: PathBase + '/assets/Templates.home.html'
            })
            .when("/callback/:response", {
                templateUrl: PathBase + '/assets/Templates.message.html',
                controller: 'CallbackCtrl'
            })
            .when("/logout", {
                template: "<h2>Logging out...</h2>",
                controller: "LogoutCtrl"
            })
            .when("/error", {
                templateUrl: PathBase + '/assets/Templates.message.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
    config.$inject = ["PathBase", "$routeProvider"];
    app.config(config);

    function LayoutCtrl($rootScope, $scope, idmApi, $location, idmTokenManager) {
        $scope.layout = {};

        function removed() {
            $scope.layout.username = null;
            $scope.layout.links = null;
            $scope.layout.showLogout = idmTokenManager.isLogoutAllowed;
            $scope.layout.showLogin = idmTokenManager.isTokenNeeded;
        }

        function load() {
            removed();

            idmApi.get().then(function (api) {
                $scope.layout.username = api.data.currentUser.username;
                $scope.layout.links = api.links;
            });
        }

        idmTokenManager.addOnTokenObtained(load);
        idmTokenManager.addOnTokenRemoved(removed);
        load();

        if (idmTokenManager.isTokenNeeded &&
            $location.path() !== "/" &&
            $location.path().indexOf("/callback/") !== 0 && 
            $location.path() !== "/error" &&
            $location.path() !== "/logout") {
                $location.path("/");
        }

        idmTokenManager.addOnTokenExpired(function () {
            $location.url("/error");
            $rootScope.errors = ["Your session has expired."];
        });

        $scope.login = function () {
            idmTokenManager.redirectForToken();
        }
    }
    LayoutCtrl.$inject = ["$rootScope", "$scope", "idmApi", "$location", "idmTokenManager"];
    app.controller("LayoutCtrl", LayoutCtrl);

    function HomeCtrl() {
    }
    HomeCtrl.$inject = [];
    app.controller("HomeCtrl", HomeCtrl);

    function CallbackCtrl(idmTokenManager, $location, $rootScope, $routeParams) {
        idmTokenManager.processTokenCallbackAsync($routeParams.response).then(function() {
            $location.url("/");
        }, function (error) {
            $rootScope.errors = [error];
        });
    }
    CallbackCtrl.$inject = ["idmTokenManager", "$location", "$rootScope", "$routeParams"];
    app.controller("CallbackCtrl", CallbackCtrl);

    function LogoutCtrl(idmTokenManager, $location) {
        idmTokenManager.removeToken();
        $location.url("/");
    }
    LogoutCtrl.$inject = ["idmTokenManager", "$location"];
    app.controller("LogoutCtrl", LogoutCtrl);

})(angular);
