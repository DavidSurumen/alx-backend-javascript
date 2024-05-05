const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');


describe('#calculateNumber', () => {
    describe('#SUM', () => {
        it('rounds the first argument', () => {
            expect(calculateNumber('SUM', 1.0, 0)).to.be.equal(1);
            expect(calculateNumber('SUM', 1.3, 0)).to.be.equal(1);
            expect(calculateNumber('SUM', 1.5, 0)).to.be.equal(2);
        });
        it('rounds the second argument', () => {
            expect(calculateNumber('SUM', 0, 2.0)).to.be.equal(2);
            expect(calculateNumber('SUM', 0, 2.4)).to.be.equal(2);
            expect(calculateNumber('SUM', 0, 2.7)).to.be.equal(3);
        });
        it('rounds both arguments, returns the correct result', () => {
            expect(calculateNumber('SUM', 3.0, 3.0)).to.be.equal(6);
            expect(calculateNumber('SUM', 3.2, 3.4)).to.be.equal(6);
            expect(calculateNumber('SUM', 3.5, 3.4)).to.be.equal(7);
            expect(calculateNumber('SUM', 3.3, 3.6)).to.be.equal(7);
            expect(calculateNumber('SUM', 3.7, 3.8)).to.be.equal(8);
        });
    });
    describe('#SUBTRACT', () => {
        it('rounds the first argument', () => {
            expect(calculateNumber('SUBTRACT', 1.0, 0)).to.be.equal(1);
            expect(calculateNumber('SUBTRACT', 1.2, 0)).to.be.equal(1);
            expect(calculateNumber('SUBTRACT', 1.7, 0)).to.be.equal(2);
        });
        it('rounds the second argument', () => {
            expect(calculateNumber('SUBTRACT', 0, 2.0)).to.be.equal(-2);
            expect(calculateNumber('SUBTRACT', 0, 2.3)).to.be.equal(-2);
            expect(calculateNumber('SUBTRACT', 0, 2.5)).to.be.equal(-3);
        });
        it('rounds both arguments, returns the correct result', () => {
            expect(calculateNumber('SUBTRACT', 3.0, 4.0)).to.be.equal(-1);
            expect(calculateNumber('SUBTRACT', 3.4, 2.1)).to.be.equal(1);
            expect(calculateNumber('SUBTRACT', 3.4, 2.5)).to.be.equal(0);
            expect(calculateNumber('SUBTRACT', 3.6, 2.4)).to.be.equal(2);
            expect(calculateNumber('SUBTRACT', 3.6, 2.5)).to.be.equal(1);
        });
    });
    describe('#DIVIDE', () => {
        it('returns Error string when divided by zero', () => {
            expect(calculateNumber('DIVIDE', 9, 0)).to.be.equal('Error');
        })
        it('rounds the first argument', () => {
            expect(calculateNumber('DIVIDE', 4.0, 1)).to.be.equal(4);
            expect(calculateNumber('DIVIDE', 4.4, 1)).to.be.equal(4);
            expect(calculateNumber('DIVIDE', 4.8, 1)).to.be.equal(5);
        });
        it('rounds the second argument', () => {
            expect(calculateNumber('DIVIDE', 1, 4.0)).to.be.equal(0.25);
            expect(calculateNumber('DIVIDE', 1, 4.4)).to.be.equal(0.25);
            expect(calculateNumber('DIVIDE', 1, 4.6)).to.be.equal(0.2);
        });
        it('rounds both arguments, returns the correct result', () => {
            expect(calculateNumber('DIVIDE', 0, 4.1)).to.be.equal(0);
            expect(calculateNumber('DIVIDE', 4.2, 2.3)).to.be.equal(2);
            expect(calculateNumber('DIVIDE', 2.3, 4.9)).to.be.equal(0.4);
            expect(calculateNumber('DIVIDE', 2.7, 4.3)).to.be.equal(0.75);
            expect(calculateNumber('DIVIDE', 2.7, 4.8)).to.be.equal(0.6);
        });
    });
});