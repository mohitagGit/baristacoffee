'use strict';
angular.module('myApp.payments', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/payments', {
    templateUrl: 'payments/payments.html',
    controller: 'paymentsCtrl'
  });
}])

.controller('paymentsCtrl', function($scope, $rootScope){

	$scope.svPaymentUrlParams = {};
	location.hash.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value){
		key = decodeURIComponent(key);
		value = decodeURIComponent(value);
		$scope.svPaymentUrlParams[key] = value;
	});

	// if user filter applied
	$scope.svAllPayments = [];
	if($scope.svPaymentUrlParams.user){
		var lvFilteredUserOrder = $rootScope.gvPayments.filter(function(ithPayment){return ithPayment.user == $scope.svPaymentUrlParams.user});
		if(lvFilteredUserOrder.length){
			$scope.svAllPayments = lvFilteredUserOrder;
		}
	}
	else{
		$scope.svAllPayments = $rootScope.gvPayments;
	}
});