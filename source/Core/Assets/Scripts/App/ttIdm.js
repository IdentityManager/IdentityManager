/// <reference path="../Libs/angular.min.js" />

(function (angular) {
    var app = angular.module("ttIdm", []);

    function config($httpProvider, OAuthConfig) {
        if (OAuthConfig) {
            function intercept($q, idmTokenManager) {
                return {
                    'request': function (config) {
                        if (idmTokenManager.access_token) {
                            config.headers['Authorization'] = 'Bearer ' + idmTokenManager.access_token;
                        }
                        return config;
                    },
                    'responseError': function (response) {
                        if (response.status === 401) {
                            idmTokenManager.removeToken();
                        }
                        if (response.status === 403) {
                            idmTokenManager.removeToken();
                        }
                        return $q.reject(response);
                    }
                };
            };
            intercept.$inject = ["$q", "idmTokenManager"];
            $httpProvider.interceptors.push(intercept);
        }
    };
    config.$inject = ["$httpProvider", "OAuthConfig"];
    app.config(config);

    function idmTokenManager(TokenManager, OAuthConfig, PathBase, $window, $rootScope) {
        if (OAuthConfig) {
            OAuthConfig.redirect_uri = $window.location.protocol + "//" + $window.location.host + PathBase + "/#/callback/";
            var svc = new TokenManager(OAuthConfig);

            Object.defineProperty(svc, "isTokenNeeded", {
                get: function () {
                    return !!(OAuthConfig && svc.expired);
                }
            });
            Object.defineProperty(svc, "isLogoutAllowed", {
                get: function () {
                    return !!(OAuthConfig && !svc.expired);
                }
            });
            var applyFuncs = [
                "_callTokenRemoved", "_callTokenExpiring",
                "_callTokenExpired", "_callTokenObtained",
                "_callSilentTokenRenewFailed"
            ];
            applyFuncs.forEach(function (name) {
                var tmp = svc[name].bind(svc);
                svc[name] = function () {
                    $rootScope.$applyAsync(function () {
                        tmp();
                    });
                }
            });

            return svc;
        }

        var nopSvc = {};
        for (var key in TokenManager.prototype) {
            nopSvc[key] = function () { };
        }
        return nopSvc;
    }
    idmTokenManager.$inject = ["TokenManager", "OAuthConfig", "PathBase", "$window", "$rootScope"];
    app.factory("idmTokenManager", idmTokenManager);

    function idmApi(idmTokenManager, $http, $q, PathBase) {
        var cache = null;

        idmTokenManager.addOnTokenRemoved(function () {
            cache = null;
        });

        return {
            get: function () {

                if (cache) {
                    var d = $q.defer();
                    d.resolve(cache);
                    return d.promise;
                }

                return $http.get(PathBase + "/api").then(function (resp) {
                    cache = resp.data;
                    return cache;
                }, function (resp) {
                    cache = null;
                    if (resp.status === 401) {
                        throw 'You are not authorized to use this service.';
                    }
                    else {
                        throw 'Failed to load API.';
                    }
                });
            }
        };
    }
    idmApi.$inject = ["idmTokenManager", "$http", "$q", "PathBase"];
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

        var svc = idmApi.get().then(function (api) {
            svc.getUsers = function (filter, start, count) {
                return $http.get(api.links.users, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Users"));
            };

            svc.getUser = function (subject) {
                return $http.get(api.links.users + "/" + encodeURIComponent(subject))
                    .then(mapResponseData, errorHandler("Error Getting User"));
            };

            if (api.links.createUser) {
                svc.createUser = function (properties) {
                    return $http.post(api.links.createUser.href, properties)
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
                    .then(nop, errorHandler("Error Adding Claim"));
            };
            svc.removeClaim = function (claim) {
                return $http.delete(claim.links.delete)
                    .then(nop, errorHandler("Error Removing Claim"));
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

        var svc = idmApi.get().then(function (api) {
            svc.getRoles = function (filter, start, count) {
                return $http.get(api.links.roles, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Roles"));
            };

            svc.getRole = function (subject) {
                return $http.get(api.links.roles + "/" + encodeURIComponent(subject))
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

            if (api.links.createRole) {
                svc.createRole = function (properties) {
                    return $http.post(api.links.createRole.href, properties)
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
    angular.module("ttIdm").constant("TokenManager", TokenManager);
})(angular);
