// Generated by CoffeeScript 1.4.0
(function() {
  var should, utils;

  should = require('should');

  utils = require('../lib/util');

  describe('Squared Euclidean Distance function', function() {
    it('should calculate correctly for 1 dimension', function() {
      return utils.distance({
        a: 1
      }, {
        a: 5
      }).should.eql(16);
    });
    it('should calculate correctly for 2 dimensions', function() {
      return utils.distance({
        a: 1,
        b: 3
      }, {
        a: 5,
        b: 5
      }).should.eql(20);
    });
    return it('should calculate correctly for 3 dimensions', function() {
      return utils.distance({
        a: 1,
        b: 3,
        c: -2
      }, {
        a: 5,
        b: 5,
        c: 2
      }).should.eql(36);
    });
  });

  describe('Standard Deviation', function() {
    it('should be 0 with array of equal numbers', function() {
      return utils.stdv([1, 1, 1, 1, 1]).should.eql(0);
    });
    it('should calculate stdv given an array of numbers', function() {
      return utils.stdv([600, 470, 170, 430, 300]).should.eql(147.32277488562318);
    });
    return it('should also accept objects with a key', function() {
      return utils.stdv([
        {
          a: 600
        }, {
          a: 470
        }, {
          a: 170
        }, {
          a: 430
        }, {
          a: 300
        }
      ], 'a').should.eql(147.32277488562318);
    });
  });

}).call(this);
