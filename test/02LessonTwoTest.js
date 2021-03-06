'use strict';

var assert = require('assert');

function whichSpecies(character) {
    // should return "dog" when character is 'scooby'
    if (character === "scooby") {
      return "dog"
    }
    // should return "cat" when character is 'garfield'
    if (character === "garfield") {
      return "cat"
    }
    // should return "fish" when character is 'nemo'
    if (character === "nemo") {
      return "fish"
    }
    // should return false if character is anything else
    return false; 

}

function isEven(number) {
    // should return true is number is even (divisible by 2)
    return (number % 2 === 0)
}


// Tests

describe('#whichSpecies()', function () {
    it('should return "dog" when character is scooby', function () {
        assert.equal(whichSpecies('scooby'), 'dog');
    });
    it('should return "cat" when character is garfield', function () {
        assert.equal(whichSpecies('garfield'), 'cat');
    });
    it('should return "fish" when character is nemo', function () {
        assert.equal(whichSpecies('nemo'), 'fish');
    });
    it('should return false if character is anything else', function () {
        assert.equal(whichSpecies('stitch'), false);
    });
});

describe('#isEven()', function () {
    it('should return true is number is even (divisible by 2)', function () {
        assert.equal(isEven(4), true);
    });
    it('should return false when number is not even', function () {
        assert.equal(isEven(5), false);
    });
});
