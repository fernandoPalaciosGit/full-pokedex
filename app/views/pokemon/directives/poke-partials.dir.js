( function( ){
	var CommentsController = function($scope, md5, CommentFact){
		$scope.comments = CommentFact.getComit( $scope.pokeName );
		$scope.userComment = {};

		var resetUserComment = function(){
			$scope.userComment = {
				body: '',
				email: '',
				anonymous: false,
				date: Date.now(), //+new Date() === Date.now()
				hashGravatar: md5.createHash( $scope.userComment.email || '' ) // gravatar md5 hash
			};
		};

		var addStorageComment = function (){
			CommentFact.saveComit($scope.pokeName, $scope.userComment);
			$scope.comments = CommentFact.getComit( $scope.pokeName );
		};

		/* reset use comment model when controller is loaded
		(when the template is initialized)*/
		resetUserComment();

		$scope.showPannel = false;

		$scope.togglePannel = function(){
			$scope.showPannel = !$scope.showPannel;
		};

		// emptying email if anonymous 
		$scope.isAnonymous = function(){
			if( !!$scope.userComment.anonymous ) $scope.userComment.email = '';
		};

		// store coments and reset user comment model
		$scope.submitComment = function(){
			// allow only by requirements and validate inputs
			if( !!$scope.commentsForm.$valid ){
				addStorageComment();
				resetUserComment();
				// return not yet action to form inputs
				$scope.commentsForm.$setPristine();
			}
		};
	};

	angular.module('pokeBoxApp.pokemon.partial-directives', [])

	.directive('pokedexData', [function(){
		return {
			restrict: 'E',
			templateUrl: 'views/pokemon/partials/poke-data.tmpl.html'
		};
	}])

	.directive('pokedexStats', [function(){
		return {
			restrict: 'E',
			templateUrl: 'views/pokemon/partials/poke-stats.tmpl.html'
		};
	}])

	.directive('pokedexEvolution', [function(){
		return {
			restrict: 'E',
			templateUrl: 'views/pokemon/partials/poke-evol.tmpl.html'
		};
	}])

	.directive('pokemonName', [function(){
		return {
			restrict: 'E',
			templateUrl: 'views/pokemon/partials/poke-name.tmpl.html'
		};
	}])

	.directive('pokemonImage', [function(){
		return {
			restrict: 'E',
			templateUrl: 'views/pokemon/partials/poke-image.tmpl.html'
		};
	}])

	.directive('pokemonCard', [function(){
		return {
			restrict: 'E',
			templateUrl: 'views/pokemon/partials/poke-card.tmpl.html'
		};
	}])

	.directive('pokedexComments', ['CommentFact', function(CommentFact){
		return {
			restrict: 'E',
			templateUrl: "views/pokemon/partials/poke-comments.tmpl.html",
			
			// we need to pass root pokemon controller scope to CommentsController
			scope: {
				pokeName: '@pokeName' //as text parameter in <pokedex-comments name> 
			},
			
			// use pokemonName root scope to  CommentsController
			link: function($scope, $elm, $attr){
				$attr.$observe('pokeName', function (newValue){
					
					if( !!newValue ){
						$scope.pokeName = newValue;
						$scope.comments = CommentFact.getComit( newValue );
					}

				});
			},

			controller: ['$scope', 'md5', 'CommentFact', CommentsController],
		};
	}]);
}( ) );
