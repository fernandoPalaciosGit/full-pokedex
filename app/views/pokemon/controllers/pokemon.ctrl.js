(function(){
	var PokemonController = function($scope, $routeParams, PokeFact){
		var	urlImages = "images/pokedex/",
				pokeName = $routeParams.name;

		$scope.pokemon = {};

		PokeFact.getSinglePokeName( pokeName ).then(function(data){
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

	.controller('PokemonCtrl', ['$scope', '$routeParams', 'PokeFact', PokemonController])

	.controller('TabsCtrl', ['$scope', TabsController]);
}());