( function(_){
	var PokedexController = function($scope, $rootScope, $routeParams, $filter, PokeFact){
		var	pokeType = $routeParams.type,
		
				partition = function (data, n){
					return _.chain(data).groupBy(function (element, index) {
						return Math.floor(index / n);
					}).toArray().value();
				},
				loadPokemon = function (arrPokemon){
					$scope.filterPokemon = arrPokemon;	// show length of pokemon filtered
					$scope.groupped = partition(arrPokemon, 4); // ng-repeat pokeomn filtered on view
				};

		$rootScope.appTitle= "full api collecion of pokedex national";
		$scope.pokemons = [];
		$scope.filterPokemon = [];
		$scope.groupped = {};
		$scope.searchTerm = '';

		$scope.$watch('searchTerm', function(newValue, oldValue) {
			if( !!newValue ){
				var filterPokemon = $filter('filter')($scope.pokemons, {name : $scope.searchTerm});
				loadPokemon( filterPokemon );
			
			} else {
				loadPokemon( $scope.pokemons );
			}
		});

		// check routeParam redirect
		if( !!pokeType ){
			$scope.type = pokeType;
			
			PokeFact.getSinglePokeType( pokeType )
				.then(function (data){
					$scope.pokemons = data;
					loadPokemon( data );
				});

		} else {
			PokeFact.getAllPokemon()
				.then(function (data){
					$scope.pokemons = data;
					loadPokemon( data );
				});
		}
	};

	angular.module('pokeBoxApp.pokedex.controllers', [])

	.controller('PokedexCtrl', ['$scope', '$rootScope', '$routeParams', '$filter', 'PokeFact', PokedexController]);
} (_) );