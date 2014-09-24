( function(){
	var PokedexController = function($scope, $http){
		$scope.pokemons = [];

		$http	.get('/data/pokemons.json')
					.success(function(data){
						$scope.pokemons = data;
					})
					.error(function(err){
						console.log(err);
					});
	};

	angular.module('pokeBoxApp.pokedex.controllers', [])

	.controller('PokedexCtrl', ['$scope', '$http', PokedexController]);
}() );