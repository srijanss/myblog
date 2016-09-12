'use strict';

angular.module('myblog')
.constant('baseURL', 'http://localhost:3000/')
.factory('postFactory', ['$resource', 'baseURL', function($resource, baseURL) {
	
	var postfac = {};

	postfac.getPosts = function() {
		// return posts;
		// return $http.get(baseURL+"posts");
		return $resource(baseURL+"posts/:id", null, {'update':{method:'PUT'}});
	};

	// postfac.getPost = function(post_index) {
	// 	// return posts[post_index];
	// 	return $http.get(baseURL+"posts/"+post_index);
	// };
	return postfac;
}]);
