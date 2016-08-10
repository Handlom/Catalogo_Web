'use strict';
app.controller("loginCtrl", function($scope, $location, sessionControl){
	$scope.saludo="Hola";     
	var db = firebase.database();

	$scope.user={
		uid:'',
		nombres:'',
		apellidos:'',
		empresa:'',
		numero_contacto:'',
		correo:'',
		contrasena:''
	}

	$scope.login= {
		correo:'tony2006cg@gmail.com',
		contrasena:'password'
	};

	$scope.loginUser = function () {
		var loginData = $scope.login;
		sessionControl.sigIn(loginData);
	}
	
	
	//sessionControl.isLoggedInTrue();
	/*console.log(sessionControl.currentUser);
	if (sessionControl.currentUser) {$location.path('/bienvenido');}*/

	/*var authfb = firebase.auth();
	var provider = new firebase.auth.GoogleAuthProvider();*/

	/*$scope.signInWithGoogle = function(){
		var provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('profile');
		provider.addScope('email');

		return firebase.auth().signInWithPopup(provider).then(function(result) {
		  var token = result.credential.accessToken;
		  var user = result.user;
		  }).catch(function(error) {
		    console.error('Google sign error: ', error);
		    var errorCode = error.code;
		    var errorMessage = error.message;
		    var email = error.email;
		  });

		console.log('Sign in with Google !');
	}
	$scope.login= {
		correo:'tony2006cg@gmail.com',
		contrasena:'password'
	};
	
    $scope.sigIn = function(){
	    var email = $scope.login.correo;
	    var password = $scope.login.contrasena;
	    console.log('email:'+email);
	    console.log('password:'+password);
	    if (!email || !password) {
	      return console.error('email and password required');
	    }
	    //Sign i user
	    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	      // Handle Errors here.
	      var errorCode = error.code;
	      var errorMessage = error.message;
	      //$location.path('#/bienvenido');
	      
	      // ...
	    });
	    $location.path('/bienvenido');
	    console.log('LOGUEADO!!!');
	    console.log('Sign in the user!');
	  };  
	$scope.signOut = function(){
		firebase.auth().signOut();
		console.log('signOut !');
	}
	//Escuchando canbios en la autenticacion
	firebase.auth().onAuthStateChanged(function(user){
		var user = user;
		console.log('Cambios escuchados, user : ', user);
		//console.log('Cambios escuchados, uid user : ', user.uid);
	});  */	
});