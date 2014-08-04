/// <reference path="../Libs/angular.min.js" />

(function (angular) {
    var app = angular.module("ttIdm", []);
    
    function idmApi($http, $q, PathBase) {
        var api = $q.defer();
        var promise = api.promise;
        $http.get(PathBase + "/api").then(function (resp) {
            angular.extend(promise, resp.data);
            api.resolve();
        }, function (resp) {
            api.reject('Error loading API');
        });
        return promise;
    }
    idmApi.$inject = ["$http", "$q", "PathBase"];
    app.factory("idmApi", idmApi);

    function idmUsers($http, idmApi, $log) {
        function nop() {
        }
        function mapResponseData(response) {
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

        var svc = idmApi.then(function () {
            svc.getUsers = function (filter, start, count) {
                return $http.get(idmApi.links.users, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Users"));
            };

            svc.getUser = function (subject) {
                return $http.get(idmApi.links.users + "/" + encodeURIComponent(subject))
                    .then(mapResponseData, errorHandler("Error Getting User"));
            };

            if (idmApi.links.createUser) {
                svc.createUser = function (username, password) {
                    return $http.post(idmApi.links.createUser, { username: username, password: password })
                        .then(mapResponseData, errorHandler("Error Creating User"));
                };
            }

            if (idmApi.data.metadata.userMetadata.supportsDelete) {
                svc.deleteUser = function (user) {
                    return $http.delete(user.links.delete)
                        .then(nop, errorHandler("Error Deleting User"));
                };
            }

            if (idmApi.data.metadata.userMetadata.supportsPassword) {
                svc.setPassword = function (password) {
                    return $http.put(password.links.update, password.data)
                        .then(nop,  errorHandler("Error Setting Password"));
                };
            }
            if (idmApi.data.metadata.userMetadata.supportsEmail) {
                svc.setEmail = function (email) {
                    return $http.put(email.links.update, email.data)
                        .then(nop,  errorHandler("Error Setting Email"));
                };
            }
            if (idmApi.data.metadata.userMetadata.supportsPhone) {
                svc.setPhone = function (phone) {
                    return $http.put(phone.links.update, phone.data)
                        .then(nop,  errorHandler("Error Setting Phone"));
                };
            }
            if (idmApi.data.metadata.userMetadata.supportsClaims) {
                svc.addClaim = function (claims, claim) {
                    return $http.post(claims.links.create, claim)
                        .then(nop,  errorHandler("Error Adding Claim"));
                };
                svc.removeClaim = function (claim) {
                    return $http.delete(claim.links.delete)
                        .then(nop,  errorHandler("Error Removing Claim"));
                };
            }
        });

        return svc;
    }
    idmUsers.$inject = ["$http", "idmApi", "$log"];
    app.factory("idmUsers", idmUsers);
})(angular);

(function (angular) {
    var pathBase = document.getElementById("pathBase").textContent;
    angular.module("ttIdm").constant("PathBase", pathBase);
})(angular);
