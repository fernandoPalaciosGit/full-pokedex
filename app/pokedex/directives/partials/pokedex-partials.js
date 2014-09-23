( function( ){
	var CommentsController = function($scope){
		$scope.comments = [];
		
		$scope.userComment = {};

		var resetUserComment = function(){
			$scope.userComment = {
				body: '',
				email: '',
				anonymous: false,
				date: Date.now() //+new Date() === Date.now()
			};
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
				$scope.comments.push( $scope.userComment );
				resetUserComment();
				// return not yet action to form inputs
				$scope.commentsForm.$setPristine();
			}
		};
	};

	angular.module('app-pokemon.pokedex.partial-directives', [])

	.directive('pokedexData', [function(){
		return {
			restrict: 'E',
			templateUrl: 'pokedex/directives/partials/data.tmpl.html'
		};
	}])

	.directive('pokedexStats', [function(){
		return {
			restrict: 'E',
			templateUrl: 'pokedex/directives/partials/stats.tmpl.html'
		};
	}])

	.directive('pokedexEvolution', [function(){
		return {
			restrict: 'E',
			templateUrl: 'pokedex/directives/partials/evol.tmpl.html'
		};
	}])

	.directive('pokemonName', [function(){
		return {
			restrict: 'E',
			templateUrl: 'pokedex/directives/partials/poke-name.tmpl.html'
		};
	}])

	.directive('pokemonImage', [function(){
		return {
			restrict: 'E',
			templateUrl: 'pokedex/directives/partials/poke-image.tmpl.html'
		};
	}])

	.directive('pokedexComments', [function(){
		return {
			restrict: 'E',
			templateUrl: "pokedex/directives/partials/pokedex-comments.tmpl.html",
			// controllerAs: 'CommentsCtrl',
			controller: ['$scope', CommentsController]
		};
	}]);

}( ) );
