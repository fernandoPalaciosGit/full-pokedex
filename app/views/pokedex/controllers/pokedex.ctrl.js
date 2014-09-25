( function(){
	var PokedexController = function($scope, PokeFact){
		$scope.pokemons = [];

		PokeFact.getAllPokemon().then(function(data){
							$scope.pokemons = data;
						});

		PokeFact.getSinglePokeID('032').then(function(data){
			console.log(data); // when $q rejected the promise, then() never executed
		});

		PokeFact.getSinglePokeName("Farfetch'd").then(function(data){
			console.log(data); // when $q rejected the promise, then() never executed
		});		
	};

	angular.module('pokeBoxApp.pokedex.controllers', [])

	.controller('PokedexCtrl', ['$scope', 'PokeFact', PokedexController]);
}() );