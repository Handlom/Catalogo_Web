'use strict';
app.controller("categoriaCtrl", function ($scope, $location, $routeParams, crudControl, $firebaseObject, $firebaseArray) {

	var refCat = firebase.database().ref("categoria");
	$scope.objBDCategoria = $firebaseArray(refCat);
	$scope.objCategoria={};	

	var categoriaKey = $routeParams.key;
	var objetoCategoriElegida;

	if (categoriaKey) {
		//objetoElegido=getDetalles(categoriaDetalleId);		
		$scope.cateKey=categoriaKey;
	};

	var idCat = $routeParams.idCat;

	if (idCat) {
		objetoCategoriElegida=getDetallesCat(idCat);		
		$scope.objCategoria=objetoCategoriElegida[0];
	};

	function getDetallesCat(idCat){
		var detalles = [];
		firebase.database().ref('categoria/' + idCat).on('value', function(snapshot) {
		  detalles.push(snapshot.val());
		});		
		return detalles;		
	};

	$scope.agregarCategoria = function(c){
		$scope.objBDCategoria.$add($scope.objCategoria);
		//var recentPostsRef = firebase.database().ref('categoria').limitToLast(1);
		//console.log(recentPostsRef)
	}

	$scope.actualizarCategoria = function (c) {
	  firebase.database().ref('categoria/' + idCat).set({
	    nombre: c.nombre,
	    descripcion: c.descripcion,
	    nombreKey : c.nombreKey
	  });
		$location.path("/cate");		
	};

});


