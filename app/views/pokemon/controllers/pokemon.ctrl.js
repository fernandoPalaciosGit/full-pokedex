(function(){
	var PokemonController = function($scope, $rootScope, $routeParams, $location, PokeFact){
		var	urlImages = "images/pokedex/",
				pokeName = $routeParams.name;

		$rootScope.appTitle= pokeName+" stats, abilities and evolutions";
		$scope.pokemon = {};

		PokeFact.getSinglePokeName( pokeName )
			.then(function (data){
				$scope.pokemon = data; // when $q rejected the promise, then() never executed
			})
			.catch(function(){
				$rootScope.appTitle="pokemon not found";
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

		$scope.isActive = function( tab ){
			return ( $scope.tab === tab ) && 'active';
		};
	};

	angular.module('pokeBoxApp.pokemon.controllers', [])

	.controller('PokemonCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'PokeFact', PokemonController])

	.controller('TabsCtrl', ['$scope', TabsController]);
}());