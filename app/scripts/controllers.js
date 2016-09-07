'use strict';

angular.module('myblog')
.controller('PostController', ['$scope', 'postFactory', function($scope, postFactory){
	$scope.posts = postFactory.getPosts();
}]);