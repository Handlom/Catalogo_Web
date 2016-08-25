'use strict';
app.controller("plantillaCtrl", function ($scope, $location, $routeParams, crudControl, $firebaseObject, $firebaseArray) {

	//OBTENIENDO BD DE CATEGORIAS, POR EL MOMENT IRÁ EN ESTE CONTROLLER, LUEGO SE IMPLEMENTARÁ EN UN SERVICO PARA PODER CONSUMIR DE ESTE
	var refCat = firebase.database().ref("categoria");	
	$scope.objBDCategoria = $firebaseArray(refCat);
	//OBTENIENDO BD DE CATEGORIAS, POR EL MOMENT IRÁ EN ESTE CONTROLLER, LUEGO SE IMPLEMENTARÁ EN UN SERVICO PARA PODER CONSUMIR DE ESTE
	//OBTENIENDO LA CLAVE DE LA CATEGORIA PARA USARLA EN EL FILTRO
	var categoriaClave = $routeParams.categoriaClave;
	
	if (categoriaClave) {		
		$scope.categoriaClave=categoriaClave;
	};
	//OBTENIENDO LA CLAVE DE LA CATEGORIA PARA USARLA EN EL FILTRO
	//PLANTILLA

	var ref = firebase.database().ref("plantilla");
	$scope.objHotel = $firebaseArray(ref);

	$scope.objPlantilla={};	
	var categoriaDetalleId = $routeParams.id;
	var objetoElegido;

	if (categoriaDetalleId) {
		objetoElegido=getDetalles(categoriaDetalleId);		
		$scope.objPlantilla=objetoElegido[0];
	};

	function getDetalles(id){
		var detalles = [];
		firebase.database().ref('plantilla/' + id).on('value', function(snapshot) {
		  detalles.push(snapshot.val());
		});		
		return detalles;		
	};

	$scope.agregarPlantilla = function (h) {
		$scope.objHotel.$add($scope.objPlantilla)
		//crudControl.agregar($scope.objHotel);
		console.log('Antes de agregar: '+$scope.objHotel);
	};
	$scope.actualizarPlantilla = function (h) {
	  firebase.database().ref('plantilla/' + categoriaDetalleId).set({
	    nombre: h.nombre,
	    descripcion: h.descripcion,
	    webURL : h.webURL,
	    categoria : h.categoria
	  });
		$location.path("/plantilla/"+h.categoria);		
	};
	$scope.eliminarPlantilla = function (h) {
		$scope.objHotel.$remove(h)
	};	
	$scope.listarPlantilla = function () {
		
	};
	//PLANTILLA
})