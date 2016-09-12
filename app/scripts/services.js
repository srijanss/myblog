'use strict';

angular.module('myblog')
.constant('baseURL', 'http://localhost:3000/')
.factory('postFactory', ['$http', 'baseURL', function($http, baseURL) {
	
	var postfac = {};

	postfac.getPosts = function() {
		// return posts;
		return $http.get(baseURL+"posts");
	};

	postfac.getPost = function(post_index) {
		// return posts[post_index];
		return $http.get(baseURL+"posts/"+post_index);
	};
	return postfac;
}]);
