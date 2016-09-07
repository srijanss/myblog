'use strict';

angular.module('myblog', ['ngRoute'])
.config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl : 'main.html',
                controller  : 'PostController'
            })
            .when('/aboutus', {
                templateUrl : 'aboutus.html'
            })
            .otherwise('/main');
    }])
;
