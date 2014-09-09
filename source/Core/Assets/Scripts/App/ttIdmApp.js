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
            .when("/callback", {
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

    function LayoutCtrl($rootScope, $scope, idmApi, $location, idmToken) {
        $scope.layout = {};

        function load() {
            $scope.layout.showLogout = idmToken.hasToken();

            idmApi.get().then(function (api) {
                $scope.layout.username = api.data.currentUser.username;
                $scope.layout.links = api.links;
            });
        }
        idmToken.addOnTokenObtained(load);
        load();

        idmToken.addOnTokenRemoved(function () {
            $scope.layout.links = null;
            $scope.layout.showLogout = false;
        });

        if (idmToken.isTokenNeeded()) {
            $scope.layout.showLogin = true;

            if ($location.path() !== "/" &&
                $location.path() !== "/callback" && 
                $location.path() !== "/error" &&
                $location.path() !== "/logout") {
                $location.path("/");
            }
        }

        idmToken.addOnTokenRemoved(function () {
            $scope.layout.showLogin = true;
        });

        idmToken.addOnTokenObtained(function () {
            $scope.layout.showLogin = false;
        });

        $scope.login = function () {
            idmToken.redirectForToken("callback");
        }
    }
    LayoutCtrl.$inject = ["$rootScope", "$scope", "idmApi", "$location", "idmToken"];
    app.controller("LayoutCtrl", LayoutCtrl);

    function HomeCtrl() {
    }
    HomeCtrl.$inject = [];
    app.controller("HomeCtrl", HomeCtrl);

    function CallbackCtrl(idmToken, $location, $rootScope) {
        idmToken.processTokenCallback(function () {
            $location.url("/");
        }, function (error) {
            $rootScope.errors = [error];
        });
    }
    CallbackCtrl.$inject = ["idmToken", "$location", "$rootScope"];
    app.controller("CallbackCtrl", CallbackCtrl);

    function LogoutCtrl(idmToken, $location) {
        idmToken.removeToken();
        $location.url("/");
    }
    LogoutCtrl.$inject = ["idmToken", "$location"];
    app.controller("LogoutCtrl", LogoutCtrl);

    function tokenMonitor(idmToken, $timeout) {

        function callback() {
            idmToken.tryRenewToken();
        }

        var intervalPromise = null;
        function cancel() {
            if (intervalPromise) {
                $timeout.cancel(intervalPromise);
            }
        }

        function setup(duration) {
            cancel();
            intervalPromise = $timeout(callback, duration * 1000);
        }

        function configure() {
            var token = idmToken.getToken();
            if (token) {
                var duration = token.expires_in;
                if (duration > 40) {
                    setup(duration - 30);
                }
                else {
                    callback();
                }
            }
        }
        configure();

        idmToken.addOnTokenRemoved(cancel);
        idmToken.addOnTokenObtained(configure);
    }
    tokenMonitor.$inject = ["idmToken", "$timeout"];
    app.run(tokenMonitor);

    function autoLogout(idmToken, $timeout, $location, $rootScope) {
        function callback() {
            var token = idmToken.getToken();
            if (!token || token.expired) {
                idmToken.removeToken();
                $location.url("/error");
                $rootScope.errors = ["Your session has expired."];
            }
        }

        var intervalPromise = null;
        function cancel() {
            if (intervalPromise) {
                $timeout.cancel(intervalPromise);
            }
        }

        function setup(duration) {
            intervalPromise = $timeout(callback, duration * 1000);
        }

        function configure() {
            cancel();
            var token = idmToken.getToken();
            if (token) {
                setup(token.expires_in);
            }
        }
        configure();

        idmToken.addOnTokenObtained(configure);
    }
    autoLogout.$inject = ["idmToken", "$timeout", "$location", "$rootScope"];
    app.run(autoLogout);

})(angular);
