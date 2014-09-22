( function( ){

	angular.module('app-pokemon.pokedex.filters', [])

	.filter('urlImg', [function(){
		return function(resource, uri, ext) {
			// check uri reference
			( uri.charAt(uri.length-1) !== '/' ) ?
			uri+='/' : uri;

			// check extention reference
			( ext.charAt(0) !== '.') ?
			ext = '.'+ext : ext;			

			return uri+resource+ext;
		};
	}]);

}( ) );
