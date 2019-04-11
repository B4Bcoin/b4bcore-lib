'use strict';

var should = require('chai').should();
var b4bcore = require('../');

describe('#versionGuard', function() {
  it('global._b4bcore should be defined', function() {
    should.equal(global._b4bcore, b4bcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      b4bcore.versionGuard('version');
    }).should.throw('More than one instance of b4bcore');
  });
});
