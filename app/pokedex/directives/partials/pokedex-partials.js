( function( ){

	angular.module('app-pokemon.pokedex.partial-directives', [])

	.directive('pokedexTmpl', [function(){
		return {
			restrict: 'E',
			templateUrl: 'pokedex/directives/partials/pokedex.tmpl.html'
		};
	}]);

}( ) );
