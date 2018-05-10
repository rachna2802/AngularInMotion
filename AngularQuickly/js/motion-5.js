var myapp = angular.module("myApp5", []);

myapp.config(function($provide, $compileProvider, $filterProvider) {
	$provide.value('aconstant', 123);
	
	$provide.factory('helpService', function() {
		return 123;
	});
	
	

});