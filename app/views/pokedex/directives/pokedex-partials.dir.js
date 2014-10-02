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
	}])

	.directive('loadTop10', ['CommentFact', 'PokeFact', function (CommentFact, PokeFact){
		return {
			restrict: 'A',
			scope: { // 2 way binding parent $scope
				filter: '=filter',
				groupped: '=groupped'
			},
			link: function ( $scope, $elm, $attr ){
				
				// arrPokeRate = {pokemon: '', rate: 0}
				var	sortPokemonsRate = function( arrPokeRate ){
							var sortable = [];
							for (var pokeRate in arrPokeRate){
								sortable.push(arrPokeRate[pokeRate])
							}
						
							sortable.sort( function (a, b){return a.rate - b.rate} );
							return sortable.reverse();
						},
						partition = function (data, n){
							return _.chain(data).groupBy(function (element, index) {
								return Math.floor(index / n);
							}).toArray().value();
						};

				$elm.bind('click', function(){
					// retrieve pokemons from localStorage;
					var	pokemonsRate = CommentFact.getPokeRate(),
							pokemonFilter = [];

					// order them by rate ascend
					pokemonsRate = sortPokemonsRate( pokemonsRate );
					
					// refresh $scope variables
					$scope.filter = pokemonsRate;
					
					pokemonsRate.forEach( function (el, idx, arr){
						
						PokeFact.getSinglePokeName( el.pokemon )
							.then( function (data){
								pokemonFilter.push( data );

								if ( idx === pokemonsRate.length-1 ) {
										$scope.groupped = partition(pokemonFilter, 4);
								}
							} );
					} );

				});
			}
		};
	}]);
}() );