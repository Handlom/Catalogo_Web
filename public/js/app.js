'use strict'//Define que el código JavaScript deba ejecutarse en el "modo estricto".

var app = angular.module("app", [
	'ngResource',
	'ngRoute',
	'firebase'
])
.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/login.html',
			controller:'loginCtrl'
		})
		.when('/categorias', {
			templateUrl: 'templates/categorias.html',
			controller:'categoriaCtrl'
		})
		.when('/formCategoria', {
			templateUrl: 'templates/formCategoria.html',
			controller: 'categoriaCtrl'
		})	
		.when('/formCategoria/:categoriaId', {
			templateUrl: 'templates/formCategoria.html',
			controller: 'categoriaCtrl'
		})
		/*.when('/formCategoria', {
			templateUrl: 'templates/formCategoria.html',
			controller: 'categoriaCtrl'
		})	*/	
		.when('/plantilla/:categoriaClave', {
			templateUrl: 'templates/admPlantillas/plantilla.html',
			controller: 'plantillaCtrl'
		})
		.when('/formPlantilla', {
			templateUrl: 'templates/admPlantillas/formPlantilla.html',
			controller: 'plantillaCtrl'
		})
		.when('/formPlantilla/:id', {
			templateUrl: 'templates/admPlantillas/formPlantilla.html',
			controller: 'plantillaCtrl'
		})
		.when('/usuarios', {
			templateUrl: 'templates/admUsers/usuarios.html',
			controller:'userCtrl'
		})
		.when('/formUsuario', {
			templateUrl: 'templates/admUsers/formUsuario.html',
			controller:'userCtrl'
		})
		.when('/formUsuario/:usuarioId', {
			templateUrl: 'templates/admUsers/formUsuario.html',
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