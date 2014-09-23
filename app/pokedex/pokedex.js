(function(){

	var PokedexController = function($scope){
		var urlImages = "images/pokemon/";

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
				avatar: 'avatar-Bulbasaur',
				evolution: [ "Bulbasaur", "Ivysaur", "Venusaur" ]
			}
		};

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

	var CommentsController = function($scope){
		$scope.comments =[];
		$scope.showPannel = false;
		$scope.togglePannel = function(){
			$scope.showPannel = !$scope.showPannel;
		}
	};

	angular.module('app-pokemon.pokedex', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/pokedex', {
				templateUrl: 'pokedex/pokedex.html'
			});
	}])

	.controller('PokedexCtrl', ['$scope', PokedexController])

	.controller('TabsCtrl', ['$scope', TabsController])

	.controller('CommentsCtrl', ['$scope', CommentsController]);
}());