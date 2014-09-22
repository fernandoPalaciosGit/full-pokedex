(function(){
	// Declare app level module which depends on views, and components
	angular.module('app-pokemon', [
	  'ngRoute',
	  'app-pokemon.pokedex',
	  'app-pokemon.pokedex.filters',
	  'app-pokemon.version',
	]).

	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/pokedex'});
	}]);
	
}());
 