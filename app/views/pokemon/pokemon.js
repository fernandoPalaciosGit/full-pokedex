(function(){

	angular.module('pokeBoxApp.pokemon', ['ngRoute'])

	.config(['$routeProvider', function($route){
		$route.when('/pokemon/:name', {
					templateUrl: 'views/pokemon/pokemon.html'
					// controllers insert in views by ng-controllers
				});
	}]);
}());