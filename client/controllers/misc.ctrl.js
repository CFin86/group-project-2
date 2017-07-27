 app.controller("MiscController", ["$scope","Products","$stateParams", "SEOService",
    function ($scope, Products, $stateParams, SEOService) {
            
           $scope.products = Products.query();
        console.log($scope.products);
           $scope.apparel = function () {
                window.location.pathname = "/misc";
            };

            $scope.setItem = function(id) {
            $scope.item = id;
            $("#sel3").val('');
        };

            SEOService.setSEO({
            title: 'Covalence Store',
            image: 'https://tinyurl.com/yd8o2lwr',
            url: $stateParams.url,
            description: "A store for all your Covalence 'needs'"
        });
        
       }])