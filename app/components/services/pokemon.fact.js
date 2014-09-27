( function(){
	var PokemonFactory = function($http, $q, $filter){
		
		// request for all the pokemon list
		var all = function(){
			// maintain a dormant state until all promises have just run 
			var deferred = $q.defer();

			$http.get('data/pokemons.json', {cache: true})
						.success(function(data){
							deferred.resolve(data); // catch the data
						})
						.error(function(err){
							console.log(err);
						});

			return deferred.promise; //return the promise
		};

		// search single pokemon by id
		var singleID = function ( pokeId ){
			var deferred = $q.defer();

			all().then(function(pokeList){
				var pokemon = null;

				for (var poke in pokeList) {
					
					// not from prototype prop inherited
					if(pokeList.hasOwnProperty(poke)){
						
						if( pokeList[poke].id === pokeId){
							pokemon = pokeList[poke];
							break; // just a coincidence of pokemon
						}
					}
				}

				if( !!pokemon ){
					deferred.resolve(pokemon);
				} else {
					console.log('no pokemon with id: '+pokeId);
					deferred.reject();
				}
			});

			return deferred.promise;
		};

		var singleName = function ( pokeName ){
			var	normalizeName = $filter('normalizeNameImg'),
					deferred = $q.defer();

			all().then(function(pokeList){
				var result = pokeList.filter(function(poke){
					return normalizeName(poke.name) === normalizeName(pokeName); 
				});

				// var pokemon = result[0];
				if( result.length > 0 ){
					deferred.resolve( result[0] );
				} else {
					console.log('no pokemon with name: '+pokeName);
					deferred.reject();
				}
			});

			return deferred.promise;
		};

		var singleType = function ( pokeType ){
			var	deferred = $q.defer(),
					normalizeName = $filter('normalizeNameImg');

			all().then( function(data){
				
				// check types inside ArrTypes
				var result = data.filter(function(pokemon){
					
					return pokemon.type.some(function(type){
						
						return normalizeName(type) === normalizeName(pokeType); 
					});
				});

				if( result.length > 0 ){
					deferred.resolve( result );
				
				} else {
					console.log('no pokemon with type: ' + pokeType);
					deferred.reject();
				}
			} );

			return deferred.promise;
		};

		return {
			getAllPokemon: all,
			getSinglePokeID: singleID,
			getSinglePokeName: singleName,
			getSinglePokeType: singleType
		};
	};

	var CommentFactory = function( $window ){
		var localStorage = $window.localStorage; // window service

		// return JSON localstorage comments 
		var getComments = function ( pokeName ){
			var comments = localStorage.getItem( pokeName );
			comments =	( !comments ) ? [] : JSON.parse( comments );
			return comments;
		};

		// save string localStorage comments 
		var saveComment = function ( pokeName, commit ){
			var comments = getComments( pokeName );
			comments.push( commit );
			localStorage.setItem( pokeName, JSON.stringify(comments) );
		};

		return {
			saveComit : saveComment,
			getComit : getComments
		};
	};

	angular.module('pokeBoxApp.services.pokemon-factory', [])

	.factory( 'PokeFact', ['$http', '$q', '$filter', PokemonFactory])

	.factory( 'CommentFact', ['$window', CommentFactory]);
}() );