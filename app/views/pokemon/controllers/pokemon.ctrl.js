(function(){
	var PokemonController = function($scope, PokeFact){
		var urlImages = "images/pokedex/";

		$scope.pokemon = {};

		PokeFact.getSinglePokeID('122').then(function(data){
			console.log(data);
			$scope.pokemon = data; // when $q rejected the promise, then() never executed
		});

		$scope.getUrlImg = function( pokeId ){
			return urlImages+pokeId;
		};
	};

	var TabsController = function($scope){
		$scope.tab = 1;

		$scope.selecTab = function( tab ){
			$scope.tab = tab;
		};
	};

	angular.module('pokeBoxApp.pokemon.controllers', [])

	.controller('PokemonCtrl', ['$scope', 'PokeFact', PokemonController])

	.controller('TabsCtrl', ['$scope', TabsController]);
}());