(function(){

	angular.module('pokeBoxApp', [
	  'ngRoute',
	  'pokeBoxApp.version',
	  
	  // modules of pokemon
	  'pokeBoxApp.pokemon', // routing
	  'pokeBoxApp.pokemon.filters', // filters
	  'pokeBoxApp.pokemon.controllers', // controllers
	  'pokeBoxApp.pokemon.util-directives', // several directives
	  'pokeBoxApp.pokemon.partial-directives' //templates directives

	  // modules of pokedex
	]).

	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/pokemon'});
	}]);
}());
 