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
                controller:"LogoutCtrl"
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

        idmToken.addOnTokenExpired(function () {
            $scope.layout.links = null;
            $scope.layout.showLogout = false;
        });

        function load() {
            $scope.layout.showLogout = idmToken.hasToken();

            idmApi.get().then(function (api) {
                $scope.layout.username = api.data.currentUser.username;
                $scope.layout.links = api.links;
            });
        }
        idmToken.addOnTokenObtained(load);
        load();
    }
    LayoutCtrl.$inject = ["$rootScope", "$scope", "idmApi", "$location", "idmToken"];
    app.controller("LayoutCtrl", LayoutCtrl);

    function HomeCtrl($scope, idmToken) {
        if (idmToken.isTokenNeeded()) {
            $scope.showLogin = true;
        }

        $scope.login = function () {
            idmToken.redirectForToken("callback");
        }
    }
    HomeCtrl.$inject = ["$scope", "idmToken"];
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

})(angular);
