var shoppingCartModule = angular.module("shoppingCart", [])
shoppingCartModule.controller("ShoppingCartController",
    function($scope) {
        $scope.items = [
            {product_name: "Iphone 5s", price: 500, img: "images/Apple-iPhone-5s.jpg"},
            {product_name: "HTC Desire", price: 200, img: "images/Htc-Desire.jpg"},
            {product_name: "Nokia", price: 180, img: "images/Nokia.jpg"}
        ];
        $scope.remove = function(index) {
            $scope.items.splice(index, 1);
        }
    }
);
