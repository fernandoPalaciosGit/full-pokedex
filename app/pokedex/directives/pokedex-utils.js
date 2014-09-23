( function( ){

	angular.module('app-pokemon.pokedex.util-directives', [])

	.directive('imagePokedex', [function(){
		return {
			restrict: 'A',
			link: function($scope, img, attrs){
				var 	uri = attrs.uri,
						resource = attrs.resource,
						ext = attrs.ext;

				// attrs for image loader must be defined
				if( !uri || !resource || !ext){
					console.log('missing some data attributes : \"resource, uri, ext\"in <image-pokedex>');
					return true;
				}

				// check uri reference
				( uri.charAt(uri.length-1) !== '/' ) ?
				uri+='/' : uri;

				// check extention reference
				( ext.charAt(0) !== '.') ?
				ext = '.'+ext : ext;
				
				// check image resource errors
				img.bind('error', function(evError){
					// need to advise angular diggest for the asyncronous
					$scope.$apply(function(){
						
						// not maching for gif
						if( !/^\.+(png|jpg)/.test(ext) ){
							console.log('not allowed '+ext+' extension in <image-pokedex>');

						// default will be '.png' (for other extension)
						} else {
							ext = ( ext.toLowerCase() === '.png' ) ? '.jpg' : '.png';
							img[0].src = uri.toLowerCase()+resource.toLowerCase()+ext.toLowerCase();
						}

						img.bind('error', null); // avoid error handling
					});
				});

				// load, first time image
				img[0].src = uri.toLowerCase()+resource.toLowerCase()+ext.toLowerCase();
			}
		};
	}]);

}( ) );
