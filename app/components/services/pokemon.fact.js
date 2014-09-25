( function(){
	var PokemonFactory = function($http, $q){
		
		// request for all the pokemon list
		var all = function(){
			// maintain a dormant state until all promises have just run 
			var deferred = $q.defer();

			$http.get('data/pokemons.json')
						.success(function(data){
							deferred.resolve(data); // catch the data
						})
						.error(function(err){
							console.log(err);
						});

			return deferred.promise; //return the promise
		};

		// search single pokemon by id
		var singleID = function( id ){
			var deferred = $q.defer();

			all().then(function(pokeList){
				var pokemon = null;

				for (var prop in pokeList) {
					
					// not from prototype prop inherited
					if(pokeList.hasOwnProperty(prop)){
						
						if( pokeList[prop].id === id){
							pokemon = pokeList[prop];
							break; // just a coincidence of pokemon
						}
					}
				}

				if( !!pokemon ){
					deferred.resolve(pokemon);
				} else {
					console.log('no pokemon with id: '+id);
					deferred.reject();
				}
			});

			return deferred.promise;
		};

		return {
			getAllPokemon: all,
			getSinglePokeID: singleID
		};
	};

	angular.module('pokeBoxApp.services.pokemon-factory', [])

	.factory( 'PokeFact', ['$http', '$q', PokemonFactory]);
}() );