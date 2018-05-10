var myapp = angular.module("myApp2",[]);

myapp.controller("myController2", function($scope){	

	
	$scope.disp = function(fname,lname,email, prof){
		alert("Hi  " + fname
			    + " " + lname +""+prof
                + ", your email address is :  " + email);
	}
	
});