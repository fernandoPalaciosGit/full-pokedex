'use strict';

describe('app-pokemon.version module', function() {
  beforeEach(module('app-pokemon.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
