'use strict';
app.controller("userCtrl", function ($scope, sessionControl) {

	$scope.logoutUser = function () {
		sessionControl.signOut();
	}

	$scope.updateProfile = function(displayName, photoUrl){
		
	}
})