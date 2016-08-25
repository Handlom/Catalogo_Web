'use strict';
app.controller("userCtrl", function ($scope, $routeParams, $firebaseArray, $location, sessionControl, crudControl) {
	
	$scope.personas=[
 		{nombre:"pepe",edad:20},
        {nombre:"angel",edad:30},
        {nombre:"maria",edad:35},
        {nombre:"gema",edad:25}
        ]; 
	console.log($scope.personas);
	
	$scope.logoutUser = function () {
		sessionControl.signOut();
	}

	var refUsuario = firebase.database().ref("usuario");
	$scope.objBDUsuario = $firebaseArray(refUsuario);
	$scope.objUsuario={};

	var usuarioId = $routeParams.usuarioId;
	var usuarioElegido;

	if (usuarioId) {
		usuarioElegido=getUsuario(usuarioId);		
		$scope.objUsuario=usuarioElegido[0];
	};

	function getUsuario(usuarioId){
		var detalles = [];
		firebase.database().ref('usuario/' + usuarioId).on('value', function(snapshot) {
		  detalles.push(snapshot.val());
		});		
		return detalles;		
	};

	$scope.agregarUsuario = function(u){
		$scope.objBDUsuario.$add($scope.objUsuario);
	    var email = u.correo;
	    var password = u.contrasena;
	    if (!email || !password) {
	      return console.error('email and password required');
	    }
	    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	      console.log('error:',error);
	      if (error.code === 'auth/email-already-in-use') {
	        var credential = firebase.auth.EmailAuthProvider.credential(email, password);
	          signInWithGoogle().then(function(){
	            firebase.auth().currentUser.link(credential).then(function(user) {
	                console.log("Account linking success", user);
	              }, function(error) {
	                console.log("Account linking error", error);
	              });
	          });	          
	      }
	    });
	    console.log('Register in the user!');
		$location.path("/usuarios");

	};
	$scope.actualizarUsuario = function (u) {
	  firebase.database().ref('usuario/' + usuarioId).set({
	  	nombre: u.nombre,
		apellidos: u.apellidos,
		cargo: u.cargo,
		correo: u.correo,
		celular: u.celular,
		contrasena: u.contrasena,
		razonsocial: u.razonsocial,
		ruc: u.ruc,
		rubro: u.rubro
	  });
	  	console.log('Actualizando');
		$location.path("/usuarios");		
	};
	$scope.eliminarUsuario = function (u) {
		$scope.objBDUsuario.$remove(u)
	};
})