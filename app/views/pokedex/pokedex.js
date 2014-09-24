(function(){

	angular.module('pokeBoxApp.pokedex', ['ngRoute'])

	.config(['$routeProvider', function($route){
		$route.when('/pokedex', {
					templateUrl: 'views/pokedex/pokedex.html',
					controller: 'PokedexCtrl'
					// controller insert by routing
				});
	}]);
}());