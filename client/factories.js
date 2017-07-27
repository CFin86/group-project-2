angular.module("TrimR.factories", ["ngResource"])
// probably change this to client
.factory("User", ["$resource", function($resource) {
        return $resource("http://localhost:3000/api/users/:id", {id: "@id"});
    }])
    .factory("Products", ["$resource", function ($resource) {
        return $resource("http://localhost:3000/api/products/:id", { id: "@id" });
    }])

    .factory("Purchases", ['$resource', function ($resource) {
        return $resource("http://localhost:3000/api/purchases/:id", { id: "@id" },
            {
                'update': { method: "PUT" }
            })
    }])
    .factory('EmailFactory', ['$resource', function ($resource) {
        return $resource('http://localhost:3000/api/contact')
    }])

    .factory('DonationFactory', ['$resource', function ($resource) {
        return $resource('http://localhost:3000/api/donations')
    }])
    .factory('cartStorage', ['$resource', function ($resource) {
        var _cart = {
            items: []
        };
        var service = {
            get cart() {
                return _cart;
            }
        }
        return service;
    }])
