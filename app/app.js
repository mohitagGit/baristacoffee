'use strict';
// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.coffees',
  'myApp.users',
  'myApp.orders',
  'myApp.payments',
  'myApp.version'
])
.run(function($rootScope,$window,$route){

	$rootScope.gvCurrency = "eur";
	// https://jsonkeeper.com/b/URJI
	$rootScope.gvCoffeePriceList = [
	   {
		  "drink_name":"short espresso",
		  "prices":{
			 "small":3.0
		  }
	   },
	   {
		  "drink_name":"latte",
		  "prices":{
			 "small":3.5,
			 "medium":4.0,
			 "large":4.5
		  }
	   },
	   {
		  "drink_name":"flat white",
		  "prices":{
			 "small":3.5,
			 "medium":4.0,
			 "large":4.5
		  }
	   },
	   {
		  "drink_name":"long black",
		  "prices":{
			 "small":3.25,
			 "medium":3.5
		  }
	   },
	   {
		  "drink_name":"mocha",
		  "prices":{
			 "small":4.0,
			 "medium":4.5,
			 "large":5.0
		  }
	   },
	   {
		  "drink_name":"supermochacrapucaramelcream",
		  "prices":{
			 "large":5.0,
			 "huge":5.5,
			 "mega":6.0,
			 "ultra":7.0
		  }
	   }
	];

	// https://jsonkeeper.com/b/13EU
	$rootScope.gvOrderList = [
	   {
		  "user":"coach",
		  "drink":"long black",
		  "size":"medium"
	   },
	   {
		  "user":"ellis",
		  "drink":"long black",
		  "size":"small"
	   },
	   {
		  "user":"rochelle",
		  "drink":"flat white",
		  "size":"large"
	   },
	   {
		  "user":"coach",
		  "drink":"flat white",
		  "size":"large"
	   },
	   {
		  "user":"zoey",
		  "drink":"long black",
		  "size":"medium"
	   },
	   {
		  "user":"zoey",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"nick",
		  "drink":"mocha",
		  "size":"large"
	   },
	   {
		  "user":"bill",
		  "drink":"supermochacrapucaramelcream",
		  "size":"ultra"
	   },
	   {
		  "user":"ellis",
		  "drink":"mocha",
		  "size":"small"
	   },
	   {
		  "user":"rochelle",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"francis",
		  "drink":"long black",
		  "size":"small"
	   },
	   {
		  "user":"coach",
		  "drink":"mocha",
		  "size":"medium"
	   },
	   {
		  "user":"coach",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"rochelle",
		  "drink":"long black",
		  "size":"medium"
	   },
	   {
		  "user":"bill",
		  "drink":"mocha",
		  "size":"medium"
	   },
	   {
		  "user":"ellis",
		  "drink":"mocha",
		  "size":"small"
	   },
	   {
		  "user":"louis",
		  "drink":"mocha",
		  "size":"small"
	   },
	   {
		  "user":"coach",
		  "drink":"latte",
		  "size":"medium"
	   },
	   {
		  "user":"zoey",
		  "drink":"flat white",
		  "size":"large"
	   },
	   {
		  "user":"ellis",
		  "drink":"latte",
		  "size":"small"
	   },
	   {
		  "user":"louis",
		  "drink":"latte",
		  "size":"medium"
	   },
	   {
		  "user":"zoey",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"louis",
		  "drink":"long black",
		  "size":"small"
	   },
	   {
		  "user":"zoey",
		  "drink":"flat white",
		  "size":"large"
	   },
	   {
		  "user":"rochelle",
		  "drink":"supermochacrapucaramelcream",
		  "size":"large"
	   },
	   {
		  "user":"coach",
		  "drink":"flat white",
		  "size":"large"
	   },
	   {
		  "user":"francis",
		  "drink":"mocha",
		  "size":"small"
	   },
	   {
		  "user":"francis",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"francis",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"ellis",
		  "drink":"flat white",
		  "size":"small"
	   },
	   {
		  "user":"coach",
		  "drink":"long black",
		  "size":"small"
	   },
	   {
		  "user":"coach",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"ellis",
		  "drink":"supermochacrapucaramelcream",
		  "size":"huge"
	   },
	   {
		  "user":"ellis",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"coach",
		  "drink":"latte",
		  "size":"small"
	   },
	   {
		  "user":"nick",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"ellis",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"rochelle",
		  "drink":"latte",
		  "size":"large"
	   },
	   {
		  "user":"coach",
		  "drink":"latte",
		  "size":"medium"
	   },
	   {
		  "user":"rochelle",
		  "drink":"long black",
		  "size":"small"
	   },
	   {
		  "user":"ellis",
		  "drink":"flat white",
		  "size":"large"
	   },
	   {
		  "user":"bill",
		  "drink":"latte",
		  "size":"large"
	   },
	   {
		  "user":"rochelle",
		  "drink":"supermochacrapucaramelcream",
		  "size":"mega"
	   },
	   {
		  "user":"coach",
		  "drink":"mocha",
		  "size":"large"
	   },
	   {
		  "user":"bill",
		  "drink":"supermochacrapucaramelcream",
		  "size":"mega"
	   },
	   {
		  "user":"francis",
		  "drink":"long black",
		  "size":"small"
	   },
	   {
		  "user":"coach",
		  "drink":"long black",
		  "size":"small"
	   },
	   {
		  "user":"francis",
		  "drink":"flat white",
		  "size":"small"
	   },
	   {
		  "user":"coach",
		  "drink":"long black",
		  "size":"medium"
	   },
	   {
		  "user":"bill",
		  "drink":"long black",
		  "size":"medium"
	   },
	   {
		  "user":"bill",
		  "drink":"supermochacrapucaramelcream",
		  "size":"huge"
	   },
	   {
		  "user":"ellis",
		  "drink":"supermochacrapucaramelcream",
		  "size":"ultra"
	   },
	   {
		  "user":"rochelle",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"louis",
		  "drink":"mocha",
		  "size":"large"
	   },
	   {
		  "user":"coach",
		  "drink":"supermochacrapucaramelcream",
		  "size":"large"
	   },
	   {
		  "user":"nick",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"bill",
		  "drink":"mocha",
		  "size":"medium"
	   },
	   {
		  "user":"ellis",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"nick",
		  "drink":"flat white",
		  "size":"large"
	   },
	   {
		  "user":"zoey",
		  "drink":"supermochacrapucaramelcream",
		  "size":"ultra"
	   },
	   {
		  "user":"louis",
		  "drink":"flat white",
		  "size":"large"
	   },
	   {
		  "user":"louis",
		  "drink":"long black",
		  "size":"small"
	   },
	   {
		  "user":"nick",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"rochelle",
		  "drink":"latte",
		  "size":"medium"
	   },
	   {
		  "user":"louis",
		  "drink":"mocha",
		  "size":"small"
	   },
	   {
		  "user":"louis",
		  "drink":"long black",
		  "size":"medium"
	   },
	   {
		  "user":"coach",
		  "drink":"supermochacrapucaramelcream",
		  "size":"mega"
	   },
	   {
		  "user":"francis",
		  "drink":"long black",
		  "size":"medium"
	   },
	   {
		  "user":"louis",
		  "drink":"flat white",
		  "size":"small"
	   },
	   {
		  "user":"bill",
		  "drink":"supermochacrapucaramelcream",
		  "size":"mega"
	   },
	   {
		  "user":"zoey",
		  "drink":"latte",
		  "size":"small"
	   },
	   {
		  "user":"ellis",
		  "drink":"flat white",
		  "size":"small"
	   },
	   {
		  "user":"zoey",
		  "drink":"flat white",
		  "size":"small"
	   },
	   {
		  "user":"ellis",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"rochelle",
		  "drink":"flat white",
		  "size":"medium"
	   },
	   {
		  "user":"ellis",
		  "drink":"supermochacrapucaramelcream",
		  "size":"large"
	   },
	   {
		  "user":"nick",
		  "drink":"latte",
		  "size":"small"
	   },
	   {
		  "user":"coach",
		  "drink":"latte",
		  "size":"medium"
	   },
	   {
		  "user":"nick",
		  "drink":"mocha",
		  "size":"medium"
	   },
	   {
		  "user":"louis",
		  "drink":"latte",
		  "size":"large"
	   },
	   {
		  "user":"louis",
		  "drink":"supermochacrapucaramelcream",
		  "size":"mega"
	   },
	   {
		  "user":"francis",
		  "drink":"supermochacrapucaramelcream",
		  "size":"mega"
	   },
	   {
		  "user":"zoey",
		  "drink":"latte",
		  "size":"medium"
	   },
	   {
		  "user":"francis",
		  "drink":"latte",
		  "size":"medium"
	   },
	   {
		  "user":"coach",
		  "drink":"flat white",
		  "size":"small"
	   },
	   {
		  "user":"coach",
		  "drink":"supermochacrapucaramelcream",
		  "size":"large"
	   },
	   {
		  "user":"ellis",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"louis",
		  "drink":"flat white",
		  "size":"medium"
	   },
	   {
		  "user":"bill",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"nick",
		  "drink":"flat white",
		  "size":"large"
	   },
	   {
		  "user":"zoey",
		  "drink":"mocha",
		  "size":"large"
	   },
	   {
		  "user":"rochelle",
		  "drink":"long black",
		  "size":"medium"
	   },
	   {
		  "user":"zoey",
		  "drink":"latte",
		  "size":"small"
	   },
	   {
		  "user":"rochelle",
		  "drink":"short espresso",
		  "size":"small"
	   },
	   {
		  "user":"francis",
		  "drink":"mocha",
		  "size":"large"
	   },
	   {
		  "user":"bill",
		  "drink":"long black",
		  "size":"small"
	   },
	   {
		  "user":"francis",
		  "drink":"supermochacrapucaramelcream",
		  "size":"ultra"
	   },
	   {
		  "user":"rochelle",
		  "drink":"supermochacrapucaramelcream",
		  "size":"large"
	   },
	   {
		  "user":"ellis",
		  "drink":"supermochacrapucaramelcream",
		  "size":"ultra"
	   },
	   {
		  "user":"nick",
		  "drink":"supermochacrapucaramelcream",
		  "size":"huge"
	   }
	];

	// https://jsonkeeper.com/b/CG17
	$rootScope.gvPayments = [
	   {
		  "user":"coach",
		  "amount":27
	   },
	   {
		  "user":"rochelle",
		  "amount":22
	   },
	   {
		  "user":"bill",
		  "amount":41
	   },
	   {
		  "user":"zoey",
		  "amount":0
	   },
	   {
		  "user":"bill",
		  "amount":36
	   },
	   {
		  "user":"nick",
		  "amount":48
	   },
	   {
		  "user":"coach",
		  "amount":42
	   },
	   {
		  "user":"rochelle",
		  "amount":36
	   },
	   {
		  "user":"nick",
		  "amount":48
	   },
	   {
		  "user":"francis",
		  "amount":45
	   },
	   {
		  "user":"rochelle",
		  "amount":27
	   },
	   {
		  "user":"francis",
		  "amount":31
	   },
	   {
		  "user":"zoey",
		  "amount":9
	   },
	   {
		  "user":"nick",
		  "amount":47
	   },
	   {
		  "user":"louis",
		  "amount":12
	   },
	   {
		  "user":"rochelle",
		  "amount":10
	   },
	   {
		  "user":"zoey",
		  "amount":43
	   },
	   {
		  "user":"francis",
		  "amount":36
	   },
	   {
		  "user":"zoey",
		  "amount":49
	   },
	   {
		  "user":"ellis",
		  "amount":24
	   }
	];

	// to create variants of coffee
	$rootScope.gvCoffeePriceList.forEach(function(ithCoffee){
		var lvCoffeeVariants = [];
		var lvDifferentSizes = Object.keys(ithCoffee.prices);
		lvDifferentSizes.forEach(function(ithCoffeeSize){
			var lvVariantObj = {
				"size": ithCoffeeSize,
				"price": ithCoffee.prices[ithCoffeeSize]
			}
			lvCoffeeVariants.push(lvVariantObj);
		});
		ithCoffee.variants = lvCoffeeVariants;
	});

	// to add coffe price in order list
	$rootScope.gvCoffeePriceList.forEach(function(ithCoffee){
		var lvCoffeeVariants = [];
		$rootScope.gvOrderList.forEach(function(ithOrder){
			if(ithOrder.drink == ithCoffee.drink_name){
				ithCoffee.variants.forEach(function(iVariant){
					if(iVariant.size == ithOrder.size){
						ithOrder.price = parseFloat(iVariant.price).toFixed(2);
					}
				});
			}
		});
	});

	// to get user wise order data
	$rootScope.gvUserOrderList = [];
	$rootScope.gvOrderList.forEach(function(ithOrder){
		var lvThisUser = $rootScope.gvUserOrderList.filter(function(iUser){return iUser.user == ithOrder.user});
		if(lvThisUser.length){
			$rootScope.gvUserOrderList.forEach(function(iThUser){
				if(iThUser.user == ithOrder.user){
					iThUser.total_amount = (parseFloat(iThUser.total_amount) + parseFloat(ithOrder.price)).toFixed(2);
					iThUser.orders.push({"size": ithOrder.size, "drink": ithOrder.drink, "price": ithOrder.price});
				}
			});
		}
		else{
			var lv_data = {
				"user": ithOrder.user,
				"orders":[{"size": ithOrder.size, "drink": ithOrder.drink, "price": ithOrder.price}],
				"total_amount": (parseFloat(ithOrder.price)).toFixed(2)
			}
			$rootScope.gvUserOrderList.push(lv_data);
		}
	});

	// to get user all payment of unique user
	$rootScope.gvUserOrderPayments = [];
	$rootScope.gvPayments.forEach(function(ithPayment){
		var lvThisUser = $rootScope.gvUserOrderPayments.filter(function(iUser){return iUser.user == ithPayment.user});
		if(lvThisUser.length){
			$rootScope.gvUserOrderPayments.forEach(function(iThUser){
				if(iThUser.user == ithPayment.user){
					iThUser.total_paid = (parseFloat(iThUser.total_paid) + parseFloat(ithPayment.amount)).toFixed(2);
					iThUser.payments.push(ithPayment.amount);
				}
			});
		}
		else{
			var lv_data = {
				"user": ithPayment.user,
				"payments":[ithPayment.amount],
				"total_paid": parseFloat(ithPayment.amount).toFixed(2)
			}
			$rootScope.gvUserOrderPayments.push(lv_data);
		}
	});

	// to get complete user order and payment data
	$rootScope.gvUserOrderList.forEach(function(ithUserOrder){
		$rootScope.gvUserOrderPayments.forEach(function(ithUserPayment){
			if(ithUserOrder.user == ithUserPayment.user){
				ithUserPayment.orders = ithUserOrder.orders;
				ithUserPayment.total_amount = ithUserOrder.total_amount;
				ithUserPayment.payment_due = (parseFloat(ithUserPayment.total_paid) - parseFloat(ithUserOrder.total_amount)).toFixed(2);
			}
		});
	});
	console.log(JSON.stringify($rootScope.gvUserOrderPayments));
})
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	
  $locationProvider.hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/coffees'});
}]);
