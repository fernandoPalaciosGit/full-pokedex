(function(){

	angular.module('pokeBoxApp', [
	  'ngRoute',
	  'pokeBoxApp.version',
	  'pokeBoxApp.util-filters',
	  
	  // modules of pokemon
	  'pokeBoxApp.pokemon', // routing
	  'pokeBoxApp.pokemon.controllers', // controllers
	  'pokeBoxApp.pokemon.util-directives', // several directives
	  'pokeBoxApp.pokemon.partial-directives', //templates directives

	  // modules of pokedex
	  'pokeBoxApp.pokedex',
	  'pokeBoxApp.pokedex.controllers'
	]).

	// servicio de rutade vista por defecto
	config(['$routeProvider', function($route) {
		$route.otherwise({redirectTo: '/pokedex'});
	}]);
}());
 