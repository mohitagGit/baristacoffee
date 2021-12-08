'use strict';
angular.module('myApp.users', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'usersCtrl'
  });
}])

.controller('usersCtrl', function($scope, $rootScope){

	$scope.svUserUrlParams = {};
	location.hash.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value){
		key = decodeURIComponent(key);
		value = decodeURIComponent(value);
		$scope.svUserUrlParams[key] = value;
	});

	// if user filter applied
	$scope.svAllUsers = [];
	if($scope.svUserUrlParams.name){
		var lvFilteredUserOrder = $rootScope.gvUserOrderPayments.filter(function(ithUser){return ithUser.user == $scope.svUserUrlParams.name});
		if(lvFilteredUserOrder.length){
			$scope.svAllUsers = lvFilteredUserOrder;
		}
	}
	else{
		$scope.svAllUsers = $rootScope.gvUserOrderPayments;
	}
});