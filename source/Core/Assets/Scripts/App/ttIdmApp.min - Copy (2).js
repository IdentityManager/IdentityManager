(function(n){function i(n){n.when("/",{controller:"HomeCtrl",templateUrl:PathBase+"/assets/Templates.home.html"}).otherwise({redirectTo:"/"})}function r(n,t){n.model={};t.then(function(){n.model.username=t.data.currentUser.username;n.model.links=t.links})}function u(n){n.model={}}var t=n.module("ttIdmApp",["ngRoute","ttIdm","ttIdmUI"]);i.$inject=["$routeProvider"];t.config(i);r.$inject=["$scope","idmApi"];t.controller("LayoutCtrl",r);u.$inject=["$scope"];t.controller("HomeCtrl",u)})(angular);
/*
//# sourceMappingURL=ttIdmApp.min.js.map
*/