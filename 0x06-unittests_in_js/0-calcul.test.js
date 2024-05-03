//const assert = require('assert');
//const { calculateNumber } = require('./0-calcul'); 
import calculateNumber from './0-calcul.js';
import assert from 'assert';

describe('#calculateNumber', function() {
    it('should return 9 given 3.6 and 4.7', function() {
        assert.equal(calculateNumber(3.6, 4.7), 9);
    });
    it('should return 5 given 2.4 and 3.2', () => {
        assert.equal(calculateNumber(2.4, 3.2), 5);
    });
    it('should return 7 given 5 and 1.6', () => {
        assert.equal(calculateNumber(5, 1.6), 7);
    });
    it('should return 4 given 1 and 3', () => {
        assert.equal(calculateNumber(1, 3), 4);
    });
});