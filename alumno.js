

function AlumnoController($scope){

	$scope.alumno = [

	{nombre: "zuan Blanco",curso: "3 ESO"},
	{nombre: "Juan Blanco1",curso: "3 ESO"},
	{nombre: "Juan Blanco2",curso: "3 ESO"}

	];
	$scope.Save=function() {

	$scope.alumno.push({nombre:$scope.nuevoAlumno.nombre,curso:$scope.nuevoAlumno.curso})
	$scope.FormVisibility=false;
	console.log($scope.FormVisibility)
	}	

	$scope.FormVisibility=false;

	$scope.ShowForm=function(){

		$scope.FormVisibility=true;
		console.log($scope.FormVisibility)
	}
}



