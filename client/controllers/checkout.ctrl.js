app.controller('CartController',  function(cartStorage) {
        var _this = this;
        _this.cartStorage = cartStorage.cart;

        _this.increaseItemAmount = function(item) {
            item.quantity++;
        }

        _this.decreaseItemAmount = function(item) {
            item.quantity--;
            if (item.quantity <= 0) {
                item.quantity = 0;
                item.addedToCart = false;
                item.showAddToCart = false;
                var itemIndex = _this.cartStorage.items.indexOf(item);
                if (itemIndex > -1) {
                    _this.cartStorage.items.splice(itemIndex, 1);
                }
            }
        }

        _this.removeFromCart = function(item) {
            item.quantity = 0;
            item.addedToCart = false;
            item.showAddToCart = false;
            var itemIndex = _this.cartStorage.items.indexOf(item);
            if (itemIndex > -1) {
                _this.cartStorage.items.splice(itemIndex, 1);
            }
        }
    });


    app.controller('ItemController',['$scope','cartStorage', function(cartStorage) {
    var _this = this;
    _this.cartStorage = cartStorage;

    _this.items = [{
        name: 'Apple',
        price: .5,
        quantity: 0,
        showAddToCart: false,
        addedToCart: false
    }, {
        name: 'Orange',
        price: .5,
        quantity: 0,
        showAddToCart: false,
        addedToCart: false
    }, {
        name: 'Grapes',
        price: 1,
        quantity: 0,
        showAddToCart: false,
        addedToCart: false
    }];

    _this.addToCart = function(item) {
        _this.cartStorage.items.push(item);
        item.addedToCart = true;
    }

    _this.increaseItemAmount = function(item) {
        item.quantity++;
        item.showAddToCart = true;
    }

    _this.decreaseItemAmount = function(item) {
        item.quantity--;
        if (item.quantity <= 0) {
            item.quantity = 0;
            item.addedToCart = false;
            item.showAddToCart = false;
            var itemIndex = _this.cartStorage.items.indexOf(item);
            if (itemIndex > -1) {
                _this.cartStorage.items.splice(itemIndex, 1);
            }
        } else {
            item.showAddToCart = true;
        }
    }
}])

.controller("DonateController", ['$scope', 'DonationFactory', function($scope, DonationFactory) {
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
