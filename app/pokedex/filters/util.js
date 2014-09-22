( function( ){

	angular.module('app-pokemon.pokedex.filters', [])

	.filter('urlImg', [function(){
		return function(resource, uri, ext) {
			if( arguments.length < 3 ){
				console.log('just \"resource, uri, ext\" arguments for \"urlImg\" filter');
				return true;
			}
			 
			// check uri reference
			( uri.charAt(uri.length-1) !== '/' ) ?
			uri+='/' : uri;

			// check extention reference
			( ext.charAt(0) !== '.') ?
			ext = '.'+ext : ext;			
		
			return uri.toLowerCase()+resource.toLowerCase()+ext.toLowerCase();
		};
	}]);

}( ) );
