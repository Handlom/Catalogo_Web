'use strict'//Define que el código JavaScript deba ejecutarse en el "modo estricto".

var app = angular.module("app", [
	'ngResource',
	'ngRoute'
])
.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/login.html',
			controller:'loginCtrl'
		})

		.otherwise({
			redirectTo: '/'
		});
});