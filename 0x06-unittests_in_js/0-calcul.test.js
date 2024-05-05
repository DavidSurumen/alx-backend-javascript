const assert = require('assert');
const calculateNumber = require('./0-calcul'); 

describe('#calculateNumber', function() {
    it('should round the first number', () => {
        assert.equal(calculateNumber(3.0, 0), 3);
        assert.equal(calculateNumber(3.4, 0), 3);
        assert.equal(calculateNumber(3.8, 0), 4);
    });
    it('should round the second number', () => {
        assert.equal(calculateNumber(0, 1.0), 1);
        assert.equal(calculateNumber(0, 2.3), 2);
        assert.equal(calculateNumber(0, 4.6), 5);

    });
    it('should return the right result', () => {
        assert.equal(calculateNumber(1.4, 0), 1);
        assert.equal(calculateNumber(0, 2.1), 2);
        assert.equal(calculateNumber(1.3, 2.4), 3);
        assert.equal(calculateNumber(2.2, 3.5), 6);
        assert.equal(calculateNumber(2.8, 1.4), 4);
        assert.equal(calculateNumber(3.5, 4.7), 9);
    });
});