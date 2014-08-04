/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    function Feedback() {
        var self = this;
        var _errors;
        var _message;

        self.clear = function () {
            _errors = null;
            _message = null;
        };

        Object.defineProperty(this, "message", {
            get: function () {
                return _message;
            },
            set: function (value) {
                self.clear();
                _message = value;
            }
        });
        Object.defineProperty(this, "errors", {
            get: function () {
                return _errors;
            },
            set: function (value) {
                self.clear();
                if (value instanceof Array) {
                    _errors = value;
                }
                else {
                    _errors = [value];
                }
            }
        });

        self.messageHandler = function (message) {
            self.message = message;
        };
        self.errorHandler = function (errors) {
            self.errors = errors;
        };
        self.createMessageHandler = function (msg) {
            return function () {
                self.message = msg;
            };
        };
        self.createErrorHandler = function (msg) {
            return function (errors) {
                self.errors = errors || msg;
            };
        };
    }

    var app = angular.module("ttIdmUI", ['ngRoute', 'ttIdm']);
    function config($routeProvider, PathBase) {
        $routeProvider
            .when("/", {
                controller: 'HomeCtrl',
                resolve: { api: "idmApi" },
                templateUrl: PathBase + '/assets/Templates.home.html'
            })
            .when("/list/:filter?/:page?", {
                controller: 'ListUsersCtrl',
                resolve: { api: "idmApi" },
                templateUrl: PathBase + '/assets/Templates.users.list.html'
            })
            .when("/create", {
                controller: 'NewUserCtrl',
                resolve: { api: "idmApi" },
                templateUrl: PathBase + '/assets/Templates.users.new.html'
            })
            .when("/edit/:subject", {
                controller: 'EditUserCtrl',
                resolve: { api: "idmApi" },
                templateUrl: PathBase + '/assets/Templates.users.edit.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
    config.$inject = ["$routeProvider", "PathBase"];
    app.config(config);

    function ttPrompt(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.modal.html',
            replace: true,
            transclude: true,
            scope: {
                id: '@',
                action: '@'
            },
            link: function (scope, elem, attrs, ctrl) {
                elem.id = scope.id.trim();
                elem.find(".btn-primary.confirm").on("click", function () {
                    elem.trigger("confirm");
                });
            }
        }
    }
    ttPrompt.$inject = ["PathBase"];
    app.directive("ttPrompt", ttPrompt);

    function ttConfirmClick() {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var prevent = true;
                var cb = null;
                elem.on("click", function (e) {
                    if (prevent) {
                        e.preventDefault();
                        $(attrs.ttConfirmClick).modal('show');
                        if (!cb) {
                            cb = function () {
                                $(this).off("confirm");
                                prevent = false;
                                elem.trigger("click");
                            };
                            $(attrs.ttConfirmClick).on("confirm", cb);
                        }
                    }
                });
            }
        }
    }
    ttConfirmClick.$inject = [];
    app.directive("ttConfirmClick", ttConfirmClick);

    function idmMessage(PathBase) {
        return {
            restrict: 'E',
            scope: {
                model: "=message"
            },
            templateUrl: PathBase + '/assets/Templates.message.html',
            link: function (scope, elem, attrs) {

            }
        };
    }
    idmMessage.$inject = ["PathBase"];
    app.directive("idmMessage", idmMessage);

    function LayoutCtrl($scope, idmApi) {
        $scope.model = {};

        idmApi.then(function () {
            $scope.model.username = idmApi.data.currentUser.username;
            $scope.model.links = idmApi.links;
        });
    }
    LayoutCtrl.$inject = ["$scope", "idmApi"];
    app.controller("LayoutCtrl", LayoutCtrl);

    function HomeCtrl($scope) {
        $scope.model = {};
    }
    HomeCtrl.$inject = ["$scope"];
    app.controller("HomeCtrl", HomeCtrl);

    function ListUsersCtrl($scope, idmUsers, idmPager, $routeParams, $location) {
        var model = {
            message : null,
            users : null,
            pager : null,
            waiting : true,
            filter : $routeParams.filter,
            page : $routeParams.page || 1
        };
        $scope.model = model;

        $scope.search = function (filter) {
            var url = "/list";
            if (filter) {
                url += "/" + filter;
            }
            $location.url(url);
        };

        var itemsPerPage = 10;
        var startItem = (model.page - 1) * itemsPerPage;

        idmUsers.getUsers(model.filter, startItem, itemsPerPage).then(function (result) {
            $scope.model.waiting = false;
            $scope.model.users = result.data.users;
            if (result.data.users && result.data.users.length) {
                $scope.model.pager = new idmPager(result.data, itemsPerPage);
            }
        }, function (error) {
            $scope.model.message = error;
            $scope.model.waiting = false;
        });
    }
    ListUsersCtrl.$inject = ["$scope", "idmUsers", "idmPager", "$routeParams", "$location"];
    app.controller("ListUsersCtrl", ListUsersCtrl);

    //function NewUserCtrl($scope, idmUsers) {
    //    var feedback = new Feedback();
    //    $scope.feedback = feedback;

    //    $scope.model = {
    //    };

    //    $scope.create = function (username, password, confirm) {
    //        if (password !== confirm) {
    //            feedback.errors = "Password and Confirm do not match.";
    //            return;
    //        }

    //        idmUsers.createUser(username, password)
    //            .then(function (result) {
    //                $scope.model.last = result.subject;
    //                feedback.message = "Create Success";
    //            }, feedback.errorHandler);
    //    };
    //}
    //NewUserCtrl.$inject = ["$scope", "idmUsers"];
    //app.controller("NewUserCtrl", NewUserCtrl);

    //function EditUserCtrl($scope, idmUsers, $routeParams) {
    //    var feedback = new Feedback();
    //    $scope.feedback = feedback;

    //    $scope.model = {};

    //    function loadUser() {
    //        return idmUsers.getUser($routeParams.subject)
    //            .then(function (result) {
    //                $scope.model.user = result;
    //            }, feedback.errorHandler);
    //    };
    //    loadUser();

    //    $scope.setPassword = function (subject, password, confirm) {
    //        if (password === confirm) {
    //            idmUsers.setPassword(subject, password)
    //                .then(function () {
    //                    feedback.message = "Password Changed";
    //                }, feedback.errorHandler);
    //        }
    //        else {
    //            feedback.errors = "Password and Confirmation do not match";
    //        }
    //    };

    //    $scope.setEmail = function (subject, email) {
    //        idmUsers.setEmail(subject, email)
    //            .then(feedback.createMessageHandler("Email Changed"), feedback.errorHandler);
    //    };

    //    $scope.setPhone = function (subject, phone) {
    //        idmUsers.setPhone(subject, phone)
    //            .then(feedback.createMessageHandler("Phone Changed"), feedback.errorHandler);
    //    };

    //    $scope.addClaim = function (subject, type, value) {
    //        idmUsers.addClaim(subject, type, value)
    //            .then(function () {
    //                feedback.message = "Claim Added";
    //                loadUser();
    //            }, feedback.errorHandler);
    //    };

    //    $scope.removeClaim = function (subject, type, value) {
    //        idmUsers.removeClaim(subject, type, value)
    //            .then(function () {
    //                feedback.message = "Claim Removed";
    //                loadUser().then(function () {
    //                    $scope.model.type = type;
    //                    $scope.model.value = value;
    //                });
    //            }, feedback.errorHandler);
    //    };

    //    $scope.deleteUser = function (subject) {
    //        idmUsers.deleteUser(subject)
    //            .then(function () {
    //                feedback.message = "User Deleted";
    //                $scope.model.user = null;
    //            }, feedback.errorHandler);
    //    };
    //}
    //EditUserCtrl.$inject = ["$scope", "idmUsers", "$routeParams"];
    //app.controller("EditUserCtrl", EditUserCtrl);

})(angular);
