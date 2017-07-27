app.controller("HeaderController", ['$scope', 'EmailFactory', 'UserService', 
function ($scope, EmailFactory, UserService) {
    $scope.callMe = "CONTACT ME";
    $scope.getStarted = function () {
        window.location.pathname = "/createAccount";
    }

    $scope.getMessage = function () {
        var newEmail = {
            to: 'chrisfinney86@gmail.com',
            from: $scope.email,
            subject: $scope.subject,
            content: $scope.content
        }


        var masterEmail = new EmailFactory(newEmail);
        masterEmail.$save(function () {
            alert("Thank you for your message! We'll get in touch with you soon!");
            $("#contactModal").modal('toggle');
        }, function () {
            // console.log("Error sending the email")
            alert("All forms must be filled correctly!");
        })
    }
    $scope.login = function () {
        UserService.login($scope.email, $scope.password).then(function () {
            redirect();
        }, function (err) {
            console.log(err);
        });
    };

}])