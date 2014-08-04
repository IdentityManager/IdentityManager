/// <reference path="../Libs/angular.min.js" />

(function (angular) {
    var app = angular.module("ttIdm", []);
    
    function idmApi($http, $q, PathBase) {
        var api = $q.defer();
        $http.get(PathBase + "/api").then(function (resp) {
            angular.copy(resp, api);
            api.resolve();
        }, function (resp) {
            api.reject('Error loading API');
        });
        return api;
    }
    idmApi.$inject = ["$http", "$q", "PathBase"];
    app.factory("idmApi", idmApi);

    function idmUsers($http, idmApi, $log) {
        function nop() {
        }
        function mapData(response) {
            return response.data;
        }
        function errorHandler(msg) {
            msg = msg || "Unexpected Error";
            return function (response) {
                if (response.data.exceptionMessage) {
                    $log.error(response.data.exceptionMessage);
                }
                throw (response.data.errors || response.data.message || msg);
            }
        }

        this.getUsers = function (filter, start, count) {
            idmApi.then(function () {
                return $http.get(idmApi.users, { params: { filter: filter, start: start, count: count } })
                    .then(mapData, errorHandler("Error Getting Users"));
            });
        };

        this.getUser = function (subject) {
            return $http.get(idmApi.users + "/" + encodeURIComponent(subject))
                .then(mapData, errorHandler("Error Getting User"));
        };

        this.createUser = function (username, password) {
            return $http.post(idmApi.createUser, { username: username, password: password })
                .then(mapData, errorHandler("Error Creating User"));
        };
        this.deleteUser = function (subject) {
            return $http.delete(PathBase + "/api/users/" + encodeURIComponent(subject))
                .then(nop, errorHandler("Error Deleting User"));
        };
        this.setPassword = function (subject, password) {
            return $http.put(PathBase + "/api/users/" + encodeURIComponent(subject) + "/password", { password: password })
                .then(nop,  errorHandler("Error Setting Password"));
        };
        this.setEmail = function (subject, email) {
            return $http.put(PathBase + "/api/users/" + encodeURIComponent(subject) + "/email", { email: email })
                .then(nop,  errorHandler("Error Setting Email"));
        };
        this.setPhone = function (subject, phone) {
            return $http.put(PathBase + "/api/users/" + encodeURIComponent(subject) + "/phone", { phone: phone })
                .then(nop,  errorHandler("Error Setting Phone"));
        };
        this.addClaim = function (subject, type, value) {
            return $http.post(PathBase + "/api/users/" + encodeURIComponent(subject) + "/claims", { type: type, value: value })
                .then(nop,  errorHandler("Error Adding Claim"));
        };
        this.removeClaim = function (subject, type, value) {
            return $http.delete(PathBase + "/api/users/" + encodeURIComponent(subject) + "/claims/" + encodeURIComponent(type) + "/" + encodeURIComponent(value))
                .then(nop,  errorHandler("Error Removing Claim"));
        };
    }
    idmUsers.$inject = ["$http", "PathBase", "$log"];
    app.service("idmUsers", idmUsers);

    function ttPagerButtons(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.pager.buttons.html',
            scope: {
                pager: '='
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
        function Pager(result, pageSize, filter) {
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
        return Pager;
    }
    idmPager.$inject = ["$sce"];
    app.service("idmPager", idmPager);

})(angular);

(function (angular) {
    var pathBase = document.getElementById("pathBase").textContent;
    angular.module("ttIdm").constant("PathBase", pathBase);
})(angular);
