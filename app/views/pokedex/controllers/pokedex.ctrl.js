( function(){
	var PokedexController = function($scope, PokeFact){
		$scope.pokemons = [];

		PokeFact.getAllPokemon().then(function(data){
							$scope.pokemons = data;
						});
	};

	angular.module('pokeBoxApp.pokedex.controllers', [])

	.controller('PokedexCtrl', ['$scope', 'PokeFact', PokedexController]);
}() );