'use strict';
app.controller("userCtrl", function ($scope, sessionControl) {

	$scope.logoutUser = function () {
		sessionControl.signOut();
	}
	// body...
})