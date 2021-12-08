'use strict';

angular.module('myApp.coffees', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coffees', {
    templateUrl: 'coffees/coffees.html',
    controller: 'coffeesCtrl'
  });
}])

.controller('coffeesCtrl', function($scope, $rootScope){
	$scope.fnGetThisVariantInfo = function(pCoffee, pVariant){
		var lvCoffee = pCoffee; 
	};
});