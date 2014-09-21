(function(){
	var PokedexController = function($scope){
		$scope.pokemon = {
			id: 001,
			name: 'Bulbasaur',
			species: 'Seed Pokemon',
			type: ['grass', 'poison'],
			height: 2.4,
			weight: 15.2,
			abilities: ['OverGrow', 'Chlorophyll'] 
		};
	};

	var modPokedex = angular.module('app-pokemon.pokedex', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/pokedex', {
			templateUrl: 'pokedex/pokedex.html',
			controller: 'PokedexCtrl'
		});
	}])

	.controller('PokedexCtrl', ['$scope', PokedexController]); 
}());