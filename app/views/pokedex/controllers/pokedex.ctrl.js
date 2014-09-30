( function(_){
	var PokedexController = function($scope, $rootScope, $routeParams, PokeFact){
		var	pokeType = $routeParams.type,
		
				partition = function(data, n){
					return _.chain(data).groupBy(function (element, index) {
						return Math.floor(index / n);
					}).toArray().value();
				};

		$rootScope.appTitle= "full api collecion of pokedex national";
		$scope.pokemons = [];
		$scope.groupped = {};

		// check routeParam redirect
		if( !!pokeType ){
			$scope.type = pokeType;

			PokeFact.getSinglePokeType( pokeType )
				.then(function (data){
					$scope.pokemons = data;
					$scope.groupped = partition(data, 4);
				});

		} else {
			PokeFact.getAllPokemon()
				.then(function (data){
					$scope.pokemons = data;
					$scope.groupped = partition(data, 4);
				});
		}
	};

	angular.module('pokeBoxApp.pokedex.controllers', [])

	.controller('PokedexCtrl', ['$scope', '$rootScope', '$routeParams', 'PokeFact', PokedexController]);
} (_) );