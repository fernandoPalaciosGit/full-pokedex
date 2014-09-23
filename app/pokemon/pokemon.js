(function(){

	angular.module('pokeBoxApp.pokemon', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/pokemon', {
				templateUrl: 'pokemon/pokemon.html'
			});
	}]);
}());