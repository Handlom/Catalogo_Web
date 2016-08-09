'use strict';

app.factory('sessionControl', function ($location) {

	var authfb = firebase.auth();
	var provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().onAuthStateChanged(function(user){
		var user = user;
		console.log('Cambios escuchados, user : ', user);
		//console.log('Cambios escuchados, uid user : ', user.uid);
	});
	var currentUser;
	return{
		statusUser: function () {
			return firebase.auth().onAuthStateChanged(function(user){
					var user = user;
					return user;
					});
		},
		isLoggedIn: function(){
			/*var usi;
			firebase.auth().onAuthStateChanged(function(user){
				usi = user;
				return usi;
				//console.log('Cambios escuchados, uid user : ', user.uid);
			});
			//si es diferente de null retorno true, si no retorno false
			console.log('usi:'+ usi);*/
			currentUser = firebase.auth().currentUser;
			//console.log('currentUser: '+currentUser.email);
			return currentUser;
		},
		isLoggedInTrue: function () {
			currentUser = firebase.auth().currentUser;
			if (currentUser) {$location.path('/bienvenido');}			
		},
		sigIn: function (loginData){
		    var email = loginData.correo;
		    var password = loginData.contrasena;
		    if (!email || !password) {
		    return console.error('email and password required');
		    };
		    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		      var errorCode = error.code;
		      var errorMessage = error.message;
		      
		    });		    
	  	},
	    signOut: function  (){
			firebase.auth().signOut();
		} 
	}

});