( function( ){

	angular.module('pokeBoxApp.pokemon.filters', [])

	// after setting the SRC of <img>, normilize extrange characters
	.filter('normalizeNameImg', [function(){
		return function(imgName){

			imgName = imgName	.replace('♀', 'f')			//Nidoran♀
									.replace('♂', 'm')			//Nidoran♂
									.replace(/\'|\.|\s/g, ''); //Farfetch'd, Mr. Mime 
			return imgName;
		}
	}])

	.filter('urlImg', [function(){
		return function(imgName, uri, ext) {
			if( arguments.length < 3 ){
				console.log('just \"imgName, uri, ext\" arguments for \"urlImg\" filter');
				return true;
			}
			 
			// check uri reference
			( uri.charAt(uri.length-1) !== '/' ) ?
			uri+='/' : uri;

			// check extention reference
			( ext.charAt(0) !== '.') ?
			ext = '.'+ext : ext;			
		
			return uri.toLowerCase()+imgName.toLowerCase()+ext.toLowerCase();
		};
	}]);

}( ) );
