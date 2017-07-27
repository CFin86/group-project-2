app.controller("WelcomeController", ["$scope", "$stateParams",
    function ($scope, $stateParams) {

        $scope.getStarted = function () {
              window.location.pathname = "/createAccount1";
        }

    }])