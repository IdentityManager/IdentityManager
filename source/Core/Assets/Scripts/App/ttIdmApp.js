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
            .when("/logout", {
                templateUrl: PathBase + '/assets/Templates.home.html'
            })
            .when("/callback/:response", {
                templateUrl: PathBase + '/assets/Templates.message.html',
                controller: 'CallbackCtrl'
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

    function LayoutCtrl($rootScope, PathBase, idmApi, $location, $window, idmTokenManager, idmErrorService, ShowLoginButton) {
        $rootScope.PathBase = PathBase;
        $rootScope.layout = {};

        function removed() {
            idmErrorService.clear();
            $rootScope.layout.username = null;
            $rootScope.layout.links = null;
            $rootScope.layout.showLogout = !idmTokenManager.expired;
            $rootScope.layout.showLogin = idmTokenManager.expired;
        }

        function load() {
            removed();

            if (!idmTokenManager.expired) {
                idmApi.get().then(function (api) {
                    $rootScope.layout.username = api.data.currentUser.username;
                    $rootScope.layout.links = api.links;
                }, function (err) {
                    idmErrorService.show(err);
                });
            }
        }

        idmTokenManager.addOnTokenObtained(load);
        idmTokenManager.addOnTokenRemoved(removed);
        load();

        if (idmTokenManager.expired &&
            $location.path() !== "/" &&
            $location.path().indexOf("/callback/") !== 0 && 
            $location.path() !== "/error" && 
            $location.path() !== "/logout") {
                $location.path("/");
        }

        idmTokenManager.addOnTokenExpired(function () {
            $location.path("/");
            idmErrorService.show("Your session has expired.");
        });

        $rootScope.login = function () {
            idmErrorService.clear();
            idmTokenManager.redirectForToken();
        }
        $rootScope.logout = function () {
            idmErrorService.clear();
            idmTokenManager.removeToken();
            $location.path("/logout");
            if (ShowLoginButton !== false) {
                $window.location = PathBase + "/logout";
            }
        }
    }
    LayoutCtrl.$inject = ["$rootScope", "PathBase", "idmApi", "$location", "$window", "idmTokenManager", "idmErrorService", "ShowLoginButton"];
    app.controller("LayoutCtrl", LayoutCtrl);

    function HomeCtrl(ShowLoginButton, idmTokenManager, $routeParams) {
        if (ShowLoginButton === false && idmTokenManager.expired) {
            idmTokenManager.redirectForToken();
        }
    }
    HomeCtrl.$inject = ["ShowLoginButton", "idmTokenManager", "$routeParams"];
    app.controller("HomeCtrl", HomeCtrl);

    function CallbackCtrl(idmTokenManager, $location, $rootScope, $routeParams, idmErrorService) {
        var hash = $routeParams.response;
        if (hash.charAt(0) === "&") {
            hash = hash.substr(1);
        }
        idmTokenManager.processTokenCallbackAsync(hash).then(function() {
            $location.url("/");
        }, function (error) {
            idmErrorService.error(error && error.message || error);
        });
    }
    CallbackCtrl.$inject = ["idmTokenManager", "$location", "$rootScope", "$routeParams", "idmErrorService"];
    app.controller("CallbackCtrl", CallbackCtrl);
})(angular);
