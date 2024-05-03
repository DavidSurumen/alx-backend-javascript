//const assert = require('assert');
//const { calculateNumber } = require('./0-calcul'); 
import calculateNumber from './0-calcul.js';
import assert from 'assert';

describe('#calculateNumber', function() {
    it('should return 4 given 1.4 and 3 -first number rounded', () => {
        assert.equal(calculateNumber(1.4, 3), 4);
    });
    it('should return 6 given 2 and 3.6 -second number rounded', () => {
        assert.equal(calculateNumber(2, 3.6), 6);
    });
    it('should return 9 given 3.5 and 4.7 -both numbers rounded', () => {
        assert.equal(calculateNumber(3.5, 4.7), 9);
    });
});