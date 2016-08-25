'use strict';

app.factory('crudControl', function ($location) {

	var authfb = firebase.auth();
	var db = firebase.database();
	var plantilla;
	
	

	return{
		agregar : function(objPlantilla){
			db.ref('plantilla/').push(
					objPlantilla
		    );
		},
		editar : function(){

		},
		eliminar: function(){

		},
		bd: function(){
			return db;
		}

	}
});