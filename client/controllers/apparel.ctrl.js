app.controller("ApparelController", ["$scope", "Products", "$stateParams", "SEOService",
    function ($scope, Products, $stateParams, SEOService) {

        $scope.products = Products.query();
        console.log($scope.products);
        $scope.apparel = function () {
            window.location.pathname = "/apparel";
        };

        $scope.setItem = function (id) {
            $scope.item = id;
            $("#sel1").val('');
            $("#sel2").val('');
        };
        $scope.addtoCart = function (id) {
            $scope.cart = id;  
        };
        $scope.noSize = function () {
            if (form.length = 0) {
                alert("must select a quantity and size before adding");
            }
        };
        $scope.clicker = function () {
            alert("this was added to your cart");
        };
        SEOService.setSEO({
            title: 'Covalence Store',
            image: 'https://tinyurl.com/yd8o2lwr',
            url: $stateParams.url,
            description: "A store for all your Covalence 'needs'"
        });

    }])