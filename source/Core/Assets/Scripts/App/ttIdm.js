/// <reference path="../Libs/angular.min.js" />

(function (angular) {
    var app = angular.module("ttIdm", []);
    
    function idmApi($http, $q, PathBase) {
        var api;
        this.start = function () {
            var q = $q.defer();
            if (api) {
                q.resolve(api);
            }
            else {
                $http.get(PathBase + "/api").then(function (resp) {
                    api = resp.data;
                    q.resolve(api);
                }, function (resp) {
                    q.reject('Error loading API');
                });
            }
            return q.promise;
        };
    }
    idmApi.$inject = ["$http", "$q", "PathBase"];
    app.service("idmApi", idmApi);

    function idmCurrentUser($http, idmApi) {
        var user = {
            username:'Admin'
        };
        this.user = user;

        idmApi.start().then(function (config) {
            $http.get(config.currentUser).then(function (response) {
                if (response.data.username) {
                    user.username = response.data.username;
                }
            });
        });
    }
    idmCurrentUser.$inject = ["$http", "idmApi"];
    app.service("idmCurrentUser", idmCurrentUser);

    function idmUsers($http, PathBase, $log) {
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
            return $http.get(PathBase + "/api/users", { params: { filter: filter, start: start, count: count } })
                .then(mapData, errorHandler("Error Getting Users"));
        };
        this.getUser = function (subject) {
            return $http.get(PathBase + "/api/users/" + encodeURIComponent(subject))
                .then(mapData, errorHandler("Error Getting User"));
        };

        this.createUser = function (username, password) {
            return $http.post(PathBase + "/api/users", { username: username, password: password })
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
})(angular);

(function (angular) {
    var pathBase = document.getElementById("pathBase").textContent;
    angular.module("ttIdm").constant("PathBase", pathBase);
})(angular);
