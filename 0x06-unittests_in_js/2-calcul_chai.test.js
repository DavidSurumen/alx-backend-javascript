const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

// import { expect } from 'chai';


describe('#calculateNumber', () => {
    describe('#SUM', () => {
        it('rounds the first argument', () => {
            expect(calculateNumber('SUM', 1.0, 0)).to.be.equal(1);
            // assert.strictEqual(calculateNumber('SUM', 1.0, 0), 1);
            // assert.strictEqual(calculateNumber('SUM', 1.3, 0), 1);
            // assert.strictEqual(calculateNumber('SUM', 1.5, 0), 2);
        });
        it('rounds the second argument', () => {
            // assert.strictEqual(calculateNumber('SUM', 0, 2.0), 2);
            // assert.strictEqual(calculateNumber('SUM', 0, 2.4), 2);
            // assert.strictEqual(calculateNumber('SUM', 0, 2.7), 3);
        });
        it('rounds both arguments, returns the correct result', () => {
            // assert.strictEqual(calculateNumber('SUM', 3.0, 3.0), 6);
            // assert.strictEqual(calculateNumber('SUM', 3.2, 3.4), 6);
            // assert.strictEqual(calculateNumber('SUM', 3.5, 3.4), 7);
            // assert.strictEqual(calculateNumber('SUM', 3.3, 3.6), 7);
            // assert.strictEqual(calculateNumber('SUM', 3.7, 3.8), 8);
        });
    });
    describe('#SUBTRACT', () => {
        it('rounds the first argument', () => {
            // assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 0), 1);
            // assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 0), 1);
            // assert.strictEqual(calculateNumber('SUBTRACT', 1.7, 0), 2);
        });
        it('rounds the second argument', () => {
            // assert.strictEqual(calculateNumber('SUBTRACT', 0, 2.0), -2);
            // assert.strictEqual(calculateNumber('SUBTRACT', 0, 2.3), -2);
            // assert.strictEqual(calculateNumber('SUBTRACT', 0, 2.5), -3);
        });
        it('rounds both arguments, returns the correct result', () => {
            // assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 4.0), -1);
            // assert.strictEqual(calculateNumber('SUBTRACT', 3.4, 2.1), 1);
            // assert.strictEqual(calculateNumber('SUBTRACT', 3.4, 2.5), 0);
            // assert.strictEqual(calculateNumber('SUBTRACT', 3.6, 2.4), 2);
            // assert.strictEqual(calculateNumber('SUBTRACT', 3.6, 2.5), 1);
        });
    });
    describe('#DIVIDE', () => {
        it('returns Error string when divided by zero', () => {
            // assert.strictEqual(calculateNumber('DIVIDE', 9, 0), 'Error');
        })
        it('rounds the first argument', () => {
            // assert.strictEqual(calculateNumber('DIVIDE', 4.0, 1), 4);
            // assert.strictEqual(calculateNumber('DIVIDE', 4.4, 1), 4);
            // assert.strictEqual(calculateNumber('DIVIDE', 4.8, 1), 5);
        });
        it('rounds the second argument', () => {
            // assert.strictEqual(calculateNumber('DIVIDE', 1, 4.0), 0.25);
            // assert.strictEqual(calculateNumber('DIVIDE', 1, 4.4), 0.25);
            // assert.strictEqual(calculateNumber('DIVIDE', 1, 4.6), 0.2);
        });
        it('rounds both arguments, returns the correct result', () => {
            // assert.strictEqual(calculateNumber('DIVIDE', 0, 4.1), 0);
            // assert.strictEqual(calculateNumber('DIVIDE', 4.2, 2.3), 2);
            // assert.strictEqual(calculateNumber('DIVIDE', 2.3, 4.9), 0.4);
            // assert.strictEqual(calculateNumber('DIVIDE', 2.7, 4.3), 0.75);
            // assert.strictEqual(calculateNumber('DIVIDE', 2.7, 4.8), 0.6);
        });
    });
});