var app = angular.module("TrimR", ['ui.router', 'ngResource', "TrimR.factories",
        "TrimR.services"]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('/', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                    controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/welcome.html',
                    controller: 'WelcomeController'
                },
                'footer': {
                    templateUrl: 'views/footer.html'
                }
            }
        })
        .state('/createAccount1', {
            url: '/createAccount1',
            views: {
                'header': {
                    templateUrl: 'views/createAccountHeader.html',
                    controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/createAccount1.html',
                    controller: 'NewUserController'
                },
                'footer': {
                    templateUrl: 'views/footer.html'
                }
            }
        })
        .state('/createAccount2', {
            url: '/createAccount2',
            views: {
                'header': {
                    templateUrl: 'views/createAccountHeader.html',
                    controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/createAccount2.html',
                    controller: 'NewUserController'
                },
                'footer': {
                    templateUrl: 'views/footer.html'
                }
            }
        })  
        .state('/createAccount3', {
            url: '/createAccount3',
            views: {
                'header': {
                    templateUrl: 'views/createAccountHeader.html',
                    controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/createAccount3.html',
                    controller: 'NewUserController'
                },
                'footer': {
                    templateUrl: 'views/footer.html'
                }
            }
        })
        .state('/misc', {
            url: '/misc',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                    controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/misc.html',
                    controller: 'MiscController'
                    // ,
                    //  controller: 'mainController'
                }
            }
        })
        .state('/checkout', {
            url: '/checkout',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                    controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/checkout.html',
                    controller: 'DonateController',
                    controller: 'mainController'
                }
            }
        })
        $urlRouterProvider.otherwise('/');
})