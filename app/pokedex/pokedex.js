(function(){

	var PokedexController = function($scope){
		$scope.pokemon = {
			id: "001",
			name: 'Bulbasaur',
			species: 'Seed Pokemon',
			type: ['grass', 'poison'],
			height: "2′4″ (0.71m)",
			weight: "15.2 lbs (6.9 kg)",
			imgUrl: 'bulbasaur-mini',
			abilities: ['OverGrow', 'Chlorophyll'] 
		};
	};

	angular.module('app-pokemon.pokedex', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/pokedex', {
			templateUrl: 'pokedex/pokedex.html',
			controller: 'PokedexCtrl'
		});
	}])

	.controller('PokedexCtrl', ['$scope', PokedexController]); 

}());