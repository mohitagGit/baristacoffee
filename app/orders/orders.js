'use strict';
angular.module('myApp.orders', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/orders', {
    templateUrl: 'orders/orders.html',
    controller: 'ordersCtrl'
  });
}])

.controller('ordersCtrl', function($scope, $rootScope){

	$scope.svUrlParams = {};
	location.hash.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value){
		key = decodeURIComponent(key);
		value = decodeURIComponent(value);
		$scope.svUrlParams[key] = value;
	});

	// if user filter applied
	$scope.svAllOrders = [];
	if($scope.svUrlParams.user){
		var lvFilteredUserOrder = $rootScope.gvUserOrderPayments.filter(function(ithUser){return ithUser.user == $scope.svUrlParams.user});
		if(lvFilteredUserOrder.length){
			$scope.svAllOrders = lvFilteredUserOrder[0].orders;
		}
	}
	else{
		$scope.svAllOrders = $rootScope.gvOrderList;
	}
});