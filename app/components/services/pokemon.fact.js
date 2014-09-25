( function(){
	var PokemonFactory = function($http, $q){
		var all = function(){
			// maintain a dormant state until all promises have just run 
			var deferred = $q.defer();

			// request all the pokemon list
			$http.get('data/pokemons.json')
						.success(function(data){
							deferred.resolve(data); // catch the data
						})
						.error(function(err){
							console.log(err);
						});

			return deferred.promise; //return the promise
		};

		return {
			getAllPokemon: all
		};
	};

	angular.module('pokeBoxApp.services.pokemon-factory', [])

	.factory( 'PokeFact', ['$http', '$q', PokemonFactory]);
}() );