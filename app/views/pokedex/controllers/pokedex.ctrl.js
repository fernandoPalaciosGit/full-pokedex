( function(){
	var PokedexController = function($scope, PokeFact){
		$scope.pokemons = [];

		PokeFact.getAllPokemon()
			.then(function(data){
				$scope.pokemons = data;
			});

		PokeFact.getSinglePokeType('grass')
			.then(function(data){
				console.log(data);
			});
	};

	angular.module('pokeBoxApp.pokedex.controllers', [])

	.controller('PokedexCtrl', ['$scope', 'PokeFact', PokedexController]);
}() );