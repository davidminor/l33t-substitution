var assert = require('assert'),
    substitute = require('../index');

describe('L33t substitution', function() {
    describe('substitute', function() {
        it('should fail', function() {
            assert.throws(function() {
                substitute();
            });
        });

        it('should return the same word', function() {
            assert.equal('test', substitute('test', 0));
        });

        it('should return a word with one substitution', function() {
            assert.equal('te5t', substitute('test', 1));
        });
        it('should return a word with two substitutions', function() {
            assert.equal('+e5t', substitute('test', 2));
        });
        it('should handle double letter substitution', function() {
            assert.equal('t44', substitute('taa', 1));
        });
    });
});
