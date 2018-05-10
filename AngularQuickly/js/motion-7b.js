var namesModule = angular.module("namesList", [])
namesModule.controller("NamesController",
    function($scope) {
        $scope.names = [
            {username: "Nitin"},
            {username: "Mukesh"}
        ];
    }
);