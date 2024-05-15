const calculateNumber = require('./2-calcul_chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

const sinon = require('sinon');
const assert = require('assert');


describe("sendPaymentRequestToApi", () => {
    it("should call Utils.calculateNumber with specific arguments and log the result", () => {
        const arg1 = 100;
        const arg2 = 20;

        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleLogSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(arg1, arg2);
        assert(calculateNumberStub.calledOnceWithExactly('SUM', arg1, arg2));
        assert(consoleLogSpy.calledWith('The total is: 10'));

        consoleLogSpy.restore();
        calculateNumberStub.restore();
    })
})