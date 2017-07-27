app.controller("DonateController", ['$scope', 'DonationFactory', function($scope, DonationFactory) {
        $scope.dumplin = "DONATE"

        $scope.processPayment = function () {
            Stripe.card.createToken({
                number: $scope.cardnumber,
                cvc: $scope.cvc,
                exp_month: $scope.exp_month,
                exp_year: $scope.exp_year
            }, function (status, response) {
                if (response.error) {
                    alert('problem!');
                } else {
                    var token = response.id;
                    $scope.token = token 
                
                var donationObj = {
                    token: $scope.token,
                    amount: $scope.amount
                }
                console.log(donationObj)
                var newDonation = new DonationFactory(donationObj) 
                newDonation.$save(function(){
                    console.log('successfully charged card')
                }, function() {
                    console.log("error with card")
                })
            } 
        }
            )}  
                
    }])