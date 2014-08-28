/// <reference path="../Libs/angular.min.js" />

(function (angular) {
    var app = angular.module("ttIdm", []);

    function config($httpProvider, OAuthConfig) {
        if (OAuthConfig) {
            $httpProvider.interceptors.push(function () {
                return {
                    'request': function (config) {
                        if (OAuthConfig.token && !OAuthConfig.token.expired) {
                            config.headers['Authorization'] = 'Bearer ' + OAuthConfig.token.access_token;
                        }
                        return config;
                    }
                };
            });
        }
    };
    config.$inject = ["$httpProvider", "OAuthConfig"];
    app.config(config);

    function run(OAuthConfig, $location, $window, $rootScope) {
        var store = $window.localStorage;

        if ($location.path() === "/callback") {
            var oauth = new OAuthClient($window.localStorage);
            var result = oauth.readImplicitResult($location.url());
            if (result.error) {
                $rootScope.errors = [result.error];
                $location.url("/error");
            }
            else {
                OAuthConfig.token = Token.fromOAuthResponse(result);
                store.setItem("idm.token", OAuthConfig.token.toJSON());
                $location.url("/");
            }
        }
        else if (OAuthConfig) {
            var tokenJson = store.getItem("idm.token");
            if (tokenJson) {
                var token = Token.fromJSON(tokenJson);
                if (!token.expired) {
                    OAuthConfig.token = token;
                }
            }

            if (!OAuthConfig.token) {
                var oauth = new OAuthClient($window.localStorage);

                var callback = $location.absUrl();
                var idx = callback.indexOf('#');
                if (idx > 0) {
                    callback = callback.substring(0, idx);
                }
                callback += "#/callback";

                var request = oauth.createImplicitRequest(OAuthConfig.AuthorizationUrl, OAuthConfig.ClientId, callback, OAuthConfig.Scope);
                $window.location = request.url;
            }
        }
    }
    run.$inject = ["OAuthConfig", "$location", "$window", "$rootScope"];
    app.run(run);

    function idmApi($http, $q, PathBase) {
        var api = $q.defer();
        var promise = api.promise;
        $http.get(PathBase + "/api").then(function (resp) {
            angular.extend(promise, resp.data);
            api.resolve();
        }, function (resp) {
            if (resp.status === 401) {
                api.reject('Error : You are not authorized to use this service.');
            }
            else {
                api.reject('Error loading API');
            }
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
                svc.createUser = function (properties) {
                    return $http.post(idmApi.links.createUser.href, properties)
                        .then(mapResponseData, errorHandler("Error Creating User"));
                };
            }

            svc.deleteUser = function (user) {
                return $http.delete(user.links.delete)
                    .then(nop, errorHandler("Error Deleting User"));
            };

            svc.setProperty = function (property) {
                if (property.data === 0) {
                    property.data = "0";
                }
                if (property.data === false) {
                    property.data = "false";
                }
                return $http.put(property.links.update, property.data)
                    .then(nop, errorHandler(property.meta && property.meta.name && "Error Setting " + property.meta.name || "Error Setting Property"));
            };

            svc.addClaim = function (claims, claim) {
                return $http.post(claims.links.create, claim)
                    .then(nop,  errorHandler("Error Adding Claim"));
            };
            svc.removeClaim = function (claim) {
                return $http.delete(claim.links.delete)
                    .then(nop,  errorHandler("Error Removing Claim"));
            };

            svc.addRole = function (role) {
                return $http.post(role.links.add)
                    .then(nop, errorHandler("Error Adding Role"));
            };

            svc.removeRole = function (role) {
                return $http.delete(role.links.remove)
                    .then(nop, errorHandler("Error Removing Role"));
            };
        });

        return svc;
    }
    idmUsers.$inject = ["$http", "idmApi", "$log"];
    app.factory("idmUsers", idmUsers);

    function idmRoles($http, idmApi, $log) {
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
            svc.getRoles = function (filter, start, count) {
                return $http.get(idmApi.links.roles, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Roles"));
            };

            svc.getRole = function (subject) {
                return $http.get(idmApi.links.roles + "/" + encodeURIComponent(subject))
                    .then(mapResponseData, errorHandler("Error Getting Role"));
            };

            svc.setProperty = function (property) {
                if (property.data === 0) {
                    property.data = "0";
                }
                if (property.data === false) {
                    property.data = "false";
                }
                return $http.put(property.links.update, property.data)
                    .then(nop, errorHandler(property.meta && property.meta.name && "Error Setting " + property.meta.name || "Error Setting Property"));
            };

            if (idmApi.links.createRole) {
                svc.createRole = function (properties) {
                    return $http.post(idmApi.links.createRole.href, properties)
                        .then(mapResponseData, errorHandler("Error Creating Role"));
                };
            }

            svc.deleteRole = function (role) {
                return $http.delete(role.links.delete)
                    .then(nop, errorHandler("Error Deleting Role"));
            };
        });

        return svc;
    }
    idmRoles.$inject = ["$http", "idmApi", "$log"];
    app.factory("idmRoles", idmRoles);
})(angular);

(function (angular) {
    var model = document.getElementById("model").textContent.trim();
    model = JSON.parse(model);
    for (var key in model) {
        angular.module("ttIdm").constant(key, model[key]);
    }
})(angular);
