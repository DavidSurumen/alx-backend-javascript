const assert = require('assert');
const calculateNumber = require('./0-calcul'); 

describe('#calculateNumber', function() {
    it('should return 4 given 1.4 and 3 -first number rounded', () => {
        assert.equal(calculateNumber(1.4, 3), 4);
    });
    it('should return 5 given 3 and 1.4 -rounding up second number', () => {
        assert.equal(calculateNumber(3, 1.534321), 5);
    });
    it('should return 9 given 3.5 and 4.7 -both numbers rounded', () => {
        assert.equal(calculateNumber(3.5, 4.7), 9);
    });
});