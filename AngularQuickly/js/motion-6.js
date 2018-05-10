var myapp = angular.module("myApp6", []);

myapp.controller("myController6", function($scope) {

	$scope.phones = [ {
		'name' : 'Nexus S',
		'description' : 'Fast just got faster with Nexus S.'
	}, {
		'name' : 'I Phone',
		'description' : 'The Next, Next Generation tablet.'
	}, {
		'name' : 'Hauwaei Mate',
		'description' : 'The Next, Next Generation tablet.'
	} ];
});
