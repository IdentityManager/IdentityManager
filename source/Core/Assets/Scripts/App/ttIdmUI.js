/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {
    var app = angular.module("ttIdmUI", []);

    app.factory("ttFeedback", function () {
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
        return Feedback;
    });

    function ttFocus() {
        return {
            link: function (scope, elem) {
                scope.$on("$routeChangeSuccess", function () {
                    scope.$applyAsync(function(){
                        elem.find("input:visible:first").focus();
                    });
                });
            }
        }
    }
    ttFocus.$inject = [];
    app.directive("ttFocus", ttFocus);

    function ttMatch($timeout) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                function check() {
                    if (ctrl.$dirty) {
                        var thisVal = elem.val();
                        var otherVal = scope.$eval(attrs.ttMatch);
                        if (!thisVal || thisVal === otherVal) {
                            ctrl.$setValidity('ttMatch', true);
                        }
                        else {
                            ctrl.$setValidity('ttMatch', false);
                        }
                    }
                }
                elem.on("input", function () {
                    $timeout(function () {
                        scope.$apply(check);
                    });
                });
                scope.$watch(attrs.ttMatch, function (val) {
                    check();
                });
            }
        }
    }
    ttMatch.$inject = ["$timeout"];
    app.directive("ttMatch", ttMatch);

    function ttPropertyEditor(PathBase){
        return {
            restrict:'E',
            templateUrl: PathBase + '/assets/Templates.editor.property.html',
            replace: true,
            scope: {
                property: '=',
                setProperty: '=setProperty'
            },
            link: function (scope, elem, attrs, ctrl) {
            }
        };
    }
    ttPropertyEditor.$inject = ["PathBase"];
    app.directive("ttPropertyEditor", ttPropertyEditor);

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

    function ttPagerButtons(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.pager.buttons.html',
            scope: {
                pager: '=',
                path: "@"
            }
        }
    }
    ttPagerButtons.$inject = ["PathBase"];
    app.directive("ttPagerButtons", ttPagerButtons);

    function ttPagerSummary(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.pager.summary.html',
            scope: {
                pager: '='
            }
        }
    }
    ttPagerSummary.$inject = ["PathBase"];
    app.directive("ttPagerSummary", ttPagerSummary);

    function idmPager($sce) {
        function Pager(result, pageSize) {
            function PagerButton(text, page, enabled, current) {
                this.text = $sce.trustAsHtml(text + "");
                this.page = page;
                this.enabled = enabled;
                this.current = current;
            }

            this.start = result.start;
            this.count = result.count;
            this.total = result.total;
            this.pageSize = pageSize;
            this.filter = result.filter;

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
        return Pager;
    }
    idmPager.$inject = ["$sce"];
    app.service("idmPager", idmPager);

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
                scope.$watch("model.message", function(){
                    scope.message = scope.model.message;
                });
                scope.$watch("model.errors", function(){
                    scope.errors = scope.model.errors;
                });
            }
        };
    }
    idmMessage.$inject = ["PathBase"];
    app.directive("idmMessage", idmMessage);

    function idmPreventDefault() {
        return {
            link: function (scope, elem) {
                elem.on("click", function (e) {
                    e.preventDefault();
                });
            }
        }
    }
    idmPreventDefault.$inject = [];
    app.directive("idmPreventDefault", idmPreventDefault);
})(angular);
