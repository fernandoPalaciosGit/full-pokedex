( function(){
	angular.module('pokeBoxApp.pokedex.partial-directives', [])

	.directive('pokedexImage', [function(){
		return {
			restrict: 'E',
			templateUrl: 'views/pokedex/partials/pokedex-image.tmpl.html'
		};
	}])

	.directive('pokedexType', [function(){
		return {
			restrict: 'E',
			templateUrl: 'views/pokedex/partials/pokedex-type.tmpl.html'
		};
	}]);
}() );