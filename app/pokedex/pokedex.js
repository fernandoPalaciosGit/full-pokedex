(function(){

	var PokedexController = function($scope){
		$scope.pokemon = {
			id: "001",
			name: 'Bulbasaur',
			species: 'Seed Pokemon',
			type: ['grass', 'poison'],
			height: "2′4″ (0.71m)",
			weight: "15.2 lbs (6.9 kg)",
			abilities: ['OverGrow', 'Chlorophyll'],
			stats: {
				hp: 45,
				attack: 49,
				defense: 49,
				"sp.atk": 65,
				"sp.def": 65,
				speed: 45,
				total: 318
			},
			imagesName: {
				avatar: 'avatar-bulbasaur',
				evolution: [ "Bulbasaur", "Ivysaur", "Venusaur" ]
			}
		};

		$scope.getUrlImg = function( pokeId ){
			return 'images/pokemon/'+pokeId;
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