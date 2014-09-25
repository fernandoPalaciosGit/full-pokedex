( function(){
	var PokemonFactory = function($http, $q, $filter){
		
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
		var singleID = function ( id ){
			var deferred = $q.defer();

			all().then(function(pokeList){
				var pokemon = null;

				for (var poke in pokeList) {
					
					// not from prototype prop inherited
					if(pokeList.hasOwnProperty(poke)){
						
						if( pokeList[poke].id === id){
							pokemon = pokeList[poke];
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

		var singleName = function ( name ){
			var	normalizeName = $filter('normalizeNameImg'),
					deferred = $q.defer();

			all().then(function(pokeList){
				var result = pokeList.filter(function(poke){
					return normalizeName(poke.name) === normalizeName(name); 
				});

				// var pokemon = result[0];
				if( result.length > 0 ){
					deferred.resolve( result[0] );
				} else {
					console.log('no pokemon with name: '+name);
					deferred.reject();
				}
			});

			return deferred.promise;
		};

		return {
			getAllPokemon: all,
			getSinglePokeID: singleID,
			getSinglePokeName: singleName
		};
	};

	angular.module('pokeBoxApp.services.pokemon-factory', [])

	.factory( 'PokeFact', ['$http', '$q', '$filter', PokemonFactory]);
}() );