/// <reference path="../Libs/angular.min.js" />

(function (angular) {
    var app = angular.module("ttIdm", []);

    function config($httpProvider, OAuthConfig) {
        if (OAuthConfig) {
            $httpProvider.interceptors.push(function ($q) {
                return {
                    'request': function (config) {
                        if (OAuthConfig.token) {
                            config.headers['Authorization'] = 'Bearer ' + OAuthConfig.token.access_token;
                        }
                        return config;
                    },
                    'responseError': function (response) {
                        if (response.status === 401) {
                            idmToken.removeToken();
                        }
                        return $q.reject(response);
                    }
                };
            });
        }
    };
    config.$inject = ["$httpProvider", "OAuthConfig"];
    app.config(config);

    function idmToken(OAuthConfig, $location, $window, $rootScope) {
        var store = $window.localStorage;

        if (OAuthConfig) {
            var tokenJson = store.getItem("idm.token");
            if (tokenJson) {
                var token = Token.fromJSON(tokenJson);
                if (!token.expired) {
                    OAuthConfig.token = token;
                }
            }
        }

        var tokenExpired = [];
        function callTokenExpired() {
            tokenExpired.forEach(function (cb) {
                cb();
            });
        }

        var tokenObtained = [];
        function callTokenObtained() {
            tokenObtained.forEach(function (cb) {
                cb();
            });
        }

        return {
            addOnTokenExpired: function (cb) {
                tokenExpired.push(cb);
            },
            addOnTokenObtained: function (cb) {
                tokenObtained.push(cb);
            },
            hasToken: function () {
                return OAuthConfig &&
                       OAuthConfig.token &&
                       !OAuthConfig.token.expired;
            },
            isTokenNeeded: function () {
                return OAuthConfig &&
                    (!OAuthConfig.token ||
                     OAuthConfig.token.expired);
            },
            removeToken: function () {
                store.removeItem("idm.token");
                OAuthConfig.token = null;
                callTokenExpired();
            },
            redirectForToken: function (callbackPath) {
                var oauth = new OAuthClient($window.localStorage);

                var callback = $location.absUrl();
                var idx = callback.indexOf('#');
                if (idx > 0) {
                    callback = callback.substring(0, idx);
                }
                callback += "#/" + callbackPath;

                var request = oauth.createImplicitRequest(OAuthConfig.AuthorizationUrl, OAuthConfig.ClientId, callback, OAuthConfig.Scope);
                $window.location = request.url;
            },
            processTokenCallback: function (success, error) {
                var oauth = new OAuthClient($window.localStorage);
                var result = oauth.readImplicitResult($location.url());
                if (result.error) {
                    if (error) {
                        error(result.error);
                    }
                }
                else {
                    OAuthConfig.token = Token.fromOAuthResponse(result);
                    store.setItem("idm.token", OAuthConfig.token.toJSON());
                    callTokenObtained();
                    if (success) {
                        success();
                    }
                }
            }
        }
    }
    idmToken.$inject = ["OAuthConfig", "$location", "$window", "$rootScope"];
    app.factory("idmToken", idmToken);

    function idmApi(idmToken, $http, $q, PathBase) {
        var cache = null;

        idmToken.addOnTokenExpired(function () {
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
    idmApi.$inject = ["idmToken", "$http", "$q", "PathBase"];
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
})(angular);
