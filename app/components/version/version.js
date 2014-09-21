'use strict';

angular.module('app-pokemon.version', [
  'app-pokemon.version.interpolate-filter',
  'app-pokemon.version.version-directive'
])

.value('version', '0.2');
