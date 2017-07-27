app.controller('NewUserController', ["$scope","SEOService", "$stateParams",
function ($scope, SEOService, $stateParams) {
    // this controls the button from createAccount1 
    $scope.getTrimrd = function () {
              window.location.pathname = "/createAccount2";
        }
            // this controls the button from createAccount2
    $scope.lookGreat = function () {
              window.location.pathname = "/createAccount3";
        }
// this controls the button from createAccount3
  $scope.doThis = function () {
              window.location.pathname = "/createAccount3";
        }
    SEOService.setSEO({
        title: 'TrimR',
        image: 'https://tinyurl.com/yd8o2lwr',
        url: $stateParams.url,
        description: "A store for all your Covalence 'needs'"
    });  
       }])