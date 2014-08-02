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
                templateUrl: PathBase + '/assets/Templates.home.html'
            })
            .when("/list/:filter?/:page?", {
                controller: 'ListUsersCtrl',
                templateUrl: PathBase + '/assets/Templates.users.list.html'
            })
            .when("/create", {
                controller: 'NewUserCtrl',
                templateUrl: PathBase + '/assets/Templates.users.new.html'
            })
            .when("/edit/:subject", {
                controller: 'EditUserCtrl',
                templateUrl: PathBase + '/assets/Templates.users.edit.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
    config.$inject = ["$routeProvider", "PathBase"];
    app.config(config);

    //function ttCompare($document) {
    //    return {
    //        restrict: 'A',
    //        requires: 'ngModel',
    //        link: function (scope, elem, attrs, ctrl) {
    //            var other = $document.find(attrs.ttValidateSameAs);
    //            console.log(ctrl, arguments);
    //            //ctrl.$parsers.unshift(function (viewValue) {
    //            //    if (other.val() === viewValue) {
    //            //        // it is valid
    //            //        ctrl.$setValidity('ttValidateSameAs', true);
    //            //        return viewValue;
    //            //    } else {
    //            //        // it is invalid, return undefined (no model update)
    //            //        ctrl.$setValidity('ttValidateSameAs', false);
    //            //        return undefined;
    //            //    }
    //            //});
    //        }
    //    }
    //}
    //ttCompare.$inject = ["$document"];
    //app.directive("ttCompare", ttCompare);

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

    function LayoutCtrl($scope, idmCurrentUser) {
        $scope.model = idmCurrentUser.user;
    }
    LayoutCtrl.$inject = ["$scope", "idmCurrentUser"];
    app.controller("LayoutCtrl", LayoutCtrl);

    function HomeCtrl($scope) {
        $scope.model = {};
    }
    HomeCtrl.$inject = ["$scope"];
    app.controller("HomeCtrl", HomeCtrl);

    function ListUsersCtrl($scope, idmUsers, $sce, $routeParams, $location) {
        $scope.model = {};

        function PagerButton(text, page, enabled, current) {
            this.text = $sce.trustAsHtml(text + "");
            this.page = page;
            this.enabled = enabled;
            this.current = current;
        }

        function Pager(result, pageSize, filter) {
            this.start = result.start;
            this.count = result.count;
            this.total = result.total;
            this.pageSize = pageSize;
            this.filter = filter;

            this.totalPages = Math.ceil(this.total / pageSize);
            this.currentPage = (this.start / pageSize) + 1;
            this.canPrev = this.currentPage > 1;
            this.canNext = this.currentPage < this.totalPages;

            this.buttons = [];

            var totalButtons = 7; // ensure this is odd
            var pageSkip = 10;
            var startButton = 1;
            if (this.currentPage > Math.floor(totalButtons / 2)) startButton = this.currentPage - Math.floor(totalButtons / 2);

            var endButton = startButton + totalButtons - 1;
            if (endButton >= this.totalPages) endButton = this.totalPages;
            if (this.totalPages > totalButtons &&
                (endButton - startButton + 1) < totalButtons) {
                startButton = endButton - totalButtons + 1;
            }

            var prevPage = this.currentPage - pageSkip;
            if (prevPage < 1) prevPage = 1;

            var nextPage = this.currentPage + pageSkip;
            if (nextPage > this.totalPages) nextPage = this.totalPages;

            this.buttons.push(new PagerButton("<strong>&lt;&lt;</strong>", 1, endButton > totalButtons));
            this.buttons.push(new PagerButton("<strong>&lt;</strong>", prevPage, endButton > totalButtons));

            for (var i = startButton; i <= endButton; i++) {
                this.buttons.push(new PagerButton(i, i, true, i === this.currentPage));
            }

            this.buttons.push(new PagerButton("<strong>&gt;</strong>", nextPage, endButton < this.totalPages));
            this.buttons.push(new PagerButton("<strong>&gt;&gt;</strong>", this.totalPages, endButton < this.totalPages));
        }

        $scope.search = function (filter) {
            var url = "/list";
            if (filter) {
                url += "/" + filter;
            }
            $location.url(url);
        };

        var filter = $routeParams.filter;
        $scope.model.message = null;
        $scope.model.filter = filter;
        $scope.model.users = null;
        $scope.model.pager = null;
        $scope.model.waiting = true;

        var itemsPerPage = 10;
        var page = $routeParams.page || 1;
        var startItem = (page - 1) * itemsPerPage;

        idmUsers.getUsers(filter, startItem, itemsPerPage).then(function (result) {
            $scope.model.waiting = false;
            $scope.model.users = result.users;
            if (result.users && result.users.length) {
                $scope.model.pager = new Pager(result, itemsPerPage, filter);
            }
        }, function (error) {
            $scope.model.message = error;
            $scope.model.waiting = false;
        });
    }
    ListUsersCtrl.$inject = ["$scope", "idmUsers", "$sce", "$routeParams", "$location"];
    app.controller("ListUsersCtrl", ListUsersCtrl);

    function NewUserCtrl($scope, idmUsers) {
        var feedback = new Feedback();
        $scope.feedback = feedback;

        $scope.model = {
        };

        $scope.create = function (username, password, confirm) {
            if (password !== confirm) {
                feedback.errors = "Password and Confirm do not match.";
                return;
            }

            idmUsers.createUser(username, password)
                .then(function (result) {
                    $scope.model.last = result.subject;
                    feedback.message = "Create Success";
                }, feedback.errorHandler);
        };
    }
    NewUserCtrl.$inject = ["$scope", "idmUsers"];
    app.controller("NewUserCtrl", NewUserCtrl);

    function EditUserCtrl($scope, idmUsers, $routeParams) {
        var feedback = new Feedback();
        $scope.feedback = feedback;

        $scope.model = {};

        function loadUser() {
            idmUsers.getUser($routeParams.subject)
                .then(function (result) {
                    $scope.model.user = result;
                }, feedback.errorHandler);
        };
        loadUser();

        $scope.setPassword = function (subject, password, confirm) {
            if (password === confirm) {
                idmUsers.setPassword(subject, password)
                    .then(function () {
                        feedback.message = "Password Changed";
                    }, feedback.errorHandler);
            }
            else {
                feedback.errors = "Password and Confirmation do not match";
            }
        };

        $scope.setEmail = function (subject, email) {
            idmUsers.setEmail(subject, email)
                .then(feedback.createMessageHandler("Email Changed"), feedback.errorHandler);
        };

        $scope.setPhone = function (subject, phone) {
            idmUsers.setPhone(subject, phone)
                .then(feedback.createMessageHandler("Phone Changed"), feedback.errorHandler);
        };

        $scope.addClaim = function (subject, type, value) {
            idmUsers.addClaim(subject, type, value)
                .then(function () {
                    feedback.message = "Claim Added";
                    loadUser();
                }, feedback.errorHandler);
        };

        $scope.removeClaim = function (subject, type, value) {
            idmUsers.removeClaim(subject, type, value)
                .then(function () {
                    feedback.message = "Claim Removed";
                    loadUser();
                }, feedback.errorHandler);
        };

        $scope.deleteUser = function (subject) {
            idmUsers.deleteUser(subject)
                .then(function () {
                    feedback.message = "User Deleted";
                    $scope.model.user = null;
                }, feedback.errorHandler);
        };
    }
    EditUserCtrl.$inject = ["$scope", "idmUsers", "$routeParams"];
    app.controller("EditUserCtrl", EditUserCtrl);

})(angular);
