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
            .when("/error", {
                templateUrl: PathBase + '/assets/Templates.message.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
    config.$inject = ["PathBase", "$routeProvider"];
    app.config(config);

    function LayoutCtrl($scope, idmApi, $location) {
        $scope.model = {};

        idmApi.then(function () {
            $scope.model.username = idmApi.data.currentUser.username;
            $scope.model.links = idmApi.links;
        }, function (error) {
            $scope.model.errors = [error];
            $location.path("/error");
        });
    }
    LayoutCtrl.$inject = ["$scope", "idmApi", "$location"];
    app.controller("LayoutCtrl", LayoutCtrl);

    function HomeCtrl($scope) {
        $scope.model = {};
    }
    HomeCtrl.$inject = ["$scope"];
    app.controller("HomeCtrl", HomeCtrl);

})(angular);
