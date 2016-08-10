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
		.when('/bienvenido', {
			templateUrl: 'templates/bienvenido.html',
			controller:'userCtrl'
		})

		.otherwise({
			redirectTo: '/'
		});
})
.run(function($rootScope, $location, sessionControl){

	function inhabilitar(){return false;}
	document.oncontextmenu=inhabilitar;

	var rutasPrivadas = ['/bienvenido'];
	$rootScope.$on('$routeChangeStart', function(){
		//Si en el path es igual a una ruta privada y si mi logueo es falso entro al if
		//Si mi path es diferente al una ruta privada y mi logueo es true no entro al if 
		//Si el path y las rutasPrivadas no son iguales devolvera -1		
		if (($.inArray($location.path(), rutasPrivadas) !== -1) &&  !sessionControl.isLoggedIn()) {
			//console.log('dentro del 1er if: '+sessionControl.statusUser());
			console.error('Debe iniciar sesión para poder continuar');
			$location.path('/');
		}
	});
});