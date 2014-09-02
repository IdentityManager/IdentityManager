/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttIdmRoles", ['ngRoute', 'ttIdm', 'ttIdmUI']);
    function config($routeProvider, PathBase) {
        $routeProvider
            .when("/roles/list/:filter?/:page?", {
                controller: 'ListRolesCtrl',
                resolve: { roles: "idmRoles" },
                templateUrl: PathBase + '/assets/Templates.roles.list.html'
            })
            .when("/roles/create", {
                controller: 'NewRoleCtrl',
                resolve: {
                    api: function (idmApi) {
                        return idmApi.get();
                    }
                },
                templateUrl: PathBase + '/assets/Templates.roles.new.html'
            })
            .when("/roles/edit/:subject", {
                controller: 'EditRoleCtrl',
                resolve: { roles: "idmRoles" },
                templateUrl: PathBase + '/assets/Templates.roles.edit.html'
            });
    }
    config.$inject = ["$routeProvider", "PathBase"];
    app.config(config);

    function ListRolesCtrl($scope, idmRoles, idmPager, $routeParams, $location) {
        var model = {
            message : null,
            roles : null,
            pager : null,
            waiting : true,
            filter : $routeParams.filter,
            page : $routeParams.page || 1
        };
        $scope.model = model;

        $scope.search = function (filter) {
            var url = "/roles/list";
            if (filter) {
                url += "/" + filter;
            }
            $location.url(url);
        };

        var itemsPerPage = 10;
        var startItem = (model.page - 1) * itemsPerPage;

        idmRoles.getRoles(model.filter, startItem, itemsPerPage).then(function (result) {
            $scope.model.waiting = false;
            $scope.model.roles = result.data.items;
            if (result.data.items && result.data.items.length) {
                $scope.model.pager = new idmPager(result.data, itemsPerPage);
            }
        }, function (error) {
            $scope.model.message = error;
            $scope.model.waiting = false;
        });
    }
    ListRolesCtrl.$inject = ["$scope", "idmRoles", "idmPager", "$routeParams", "$location"];
    app.controller("ListRolesCtrl", ListRolesCtrl);

    function NewRoleCtrl($scope, idmRoles, api, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;
        if (!api.links.createRole) {
            feedback.errors = "Create Not Supported";
            return;
        }
        else {
            var properties = api.links.createRole.meta
                .map(function (item) {
                    return {
                        meta : item,
                        data : item.dataType === 5 ? false : undefined
                    };
                });
            $scope.properties = properties;
            $scope.create = function (properties) {
                var props = properties.map(function (item) {
                    return {
                        type: item.meta.type,
                        value: item.data
                    };
                });
                idmRoles.createRole(props)
                    .then(function (result) {
                        $scope.last = result;
                        feedback.message = "Create Success";
                    }, feedback.errorHandler);
            };
        }
    }
    NewRoleCtrl.$inject = ["$scope", "idmRoles", "api", "ttFeedback"];
    app.controller("NewRoleCtrl", NewRoleCtrl);

    function EditRoleCtrl($scope, idmRoles, $routeParams, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;

        function loadRole() {
            return idmRoles.getRole($routeParams.subject)
                .then(function (result) {
                    $scope.role = result;
                    if (!result.data.properties) {
                        $scope.tab = 1;
                    }
                }, feedback.errorHandler);
        };
        loadRole();

        $scope.setProperty = function (property) {
            idmRoles.setProperty(property)
                .then(function () {
                    if (property.meta.dataType !== 1) {
                        feedback.message = property.meta.name + " Changed to: " + property.data;
                    }
                    else {
                        feedback.message = property.meta.name + " Changed";
                    }
                    loadRole();
                }, feedback.errorHandler);
        };

        $scope.deleteRole = function (role) {
            idmRoles.deleteRole(role)
                .then(function () {
                    feedback.message = "Role Deleted";
                    $scope.role = null;
                }, feedback.errorHandler);
        };
    }
    EditRoleCtrl.$inject = ["$scope", "idmRoles", "$routeParams", "ttFeedback"];
    app.controller("EditRoleCtrl", EditRoleCtrl);

})(angular);
