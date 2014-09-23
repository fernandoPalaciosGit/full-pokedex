( function( ){

	angular.module('app-pokemon.pokedex.partial-directives', [])

	.directive('pokedexData', [function(){
		return {
			restrict: 'E',
			templateUrl: 'pokedex/directives/partials/data.tmpl.html'
		};
	}])

	.directive('pokedexStats', [function(){
		return {
			restrict: 'E',
			templateUrl: 'pokedex/directives/partials/stats.tmpl.html'
		};
	}])

	.directive('pokedexEvolution', [function(){
		return {
			restrict: 'E',
			templateUrl: 'pokedex/directives/partials/evol.tmpl.html'
		};
	}])

	.directive('pokemonName', [function(){
		return {
			restrict: 'E',
			templateUrl: 'pokedex/directives/partials/poke-name.tmpl.html'
		};
	}])

	.directive('pokemonImage', [function(){
		return {
			restrict: 'E',
			templateUrl: 'pokedex/directives/partials/poke-image.tmpl.html'
		};
	}]);

}( ) );
