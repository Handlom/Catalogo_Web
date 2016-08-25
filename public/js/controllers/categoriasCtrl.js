'use strict';
app.controller("categoriaCtrl", function ($scope, $location, $routeParams, crudControl, $firebaseObject, $firebaseArray) {

	var refCat = firebase.database().ref("categoria");
	$scope.objBDCategoria = $firebaseArray(refCat);
	$scope.objCategoria={};	
	var idCategoria = $routeParams.categoriaId;
	var categoriaClave = $routeParams.categoriaClave;
	var categoriaElegida;

	if (idCategoria) {
		categoriaElegida=getDetallesCat(idCategoria);		
		$scope.objCategoria=categoriaElegida[0];		
	};
	if (categoriaClave) {		
		$scope.cateKey=categoriaClave;
	};

	function getDetallesCat(idCategoria){
		var detalles = [];
		firebase.database().ref('categoria/' + idCategoria).on('value', function(snapshot) {
		  detalles.push(snapshot.val());
		});		
		return detalles;		
	};

	$scope.actualizarCategoria = function (h) {
	  firebase.database().ref('categoria/' + idCategoria).set({
	    nombre: h.nombre,
	    descripcion: h.descripcion,
	    nombreKey : h.nombreKey
	  });
		$location.path("categorias");		
	};	

	$scope.agregarCategoria = function(c){
		$scope.objBDCategoria.$add($scope.objCategoria);
		//var recentPostsRef = firebase.database().ref('categoria').limitToLast(1);
		//console.log(recentPostsRef)
	}
})