'use strict';

app.factory('sessionControl', function ($location) {

	var authfb = firebase.auth();
	//var provider = new firebase.auth.GoogleAuthProvider();
	var currentUser;

	firebase.auth().onAuthStateChanged(function(user){
		var user = user;
		if (user!==null && $location.path()==='/') {

			//Recargando pagina y redireccionandola
			window.location.href='#/categorias';
		}		
	});	

	return{
		statusUser: function () {
			return firebase.auth().onAuthStateChanged(function(user){
					var user = user;
					return user;
					});
		},
		isLoggedIn: function(){
			currentUser = firebase.auth().currentUser;
			if (currentUser) {$location.path('/categorias');}
			return currentUser;
		},
		isLoggedInTrue: function () {
			firebase.auth().onAuthStateChanged(function(user){
				var user = user;
				if (!user) {
					$location.path('/categorias');
				}	
			});		
		},
		sigIn: function (loginData){
		    var email = loginData.correo;
		    var password = loginData.contrasena;
		    if (!email || !password) {
		    	return console.error('correo y contraseña requeridos/email and password required');
		    };
		    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		      var errorCode = error.code;
		      var errorMessage = error.message;	
		      
		      if (errorCode==='auth/user-not-found') {
		      	return console.error('Verifique su correo');
		      }else if(errorCode==='auth/wrong-password'){
		      	return console.error('Verifique su contraseña');
		      }else{
		      	return console.error('Success');
		      }
		    });	    
	  	},
	    signOut: function  (){
			firebase.auth().signOut();
			window.location.href='/';
		} 
	}

});