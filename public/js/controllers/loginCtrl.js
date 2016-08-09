'use strict';
app.controller("loginCtrl", function($scope){
	$scope.saludo="Hola";     
	var db = firebase.database();
	var authfb = firebase.auth();
	var provider = new firebase.auth.GoogleAuthProvider();

	$scope.signInWithGoogle = function(){
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
      
	$scope.signOut = function(){
		firebase.auth().signOut();
		console.log('signOut !');
	}

	//Escuchando canbios en la autenticacion
	firebase.auth().onAuthStateChanged(function(user){
		var user = user;
		console.log('Cambios escuchados, user : ', user);
	});  	
});