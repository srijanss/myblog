'use strict';

angular.module('myblog', ['ui.router', 'ngResource'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'content': {
                        templateUrl : 'views/main.html',
                        controller  : 'PostController'
                    }
                }
            })
                    // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl: 'views/aboutus.html'
                   }
                }
            });
            $urlRouterProvider.otherwise('/');
    }])
;
