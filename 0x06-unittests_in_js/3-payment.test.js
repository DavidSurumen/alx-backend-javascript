const calculateNumber = require('./2-calcul_chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

const sinon = require('sinon');
const assert = require('assert');


describe("sendPaymentRequestToApi", () => {
    it("should call Utils.calculateNumber with specific arguments and log the result", () => {
        const arg1 = 100;
        const arg2 = 20;

        const calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(arg1, arg2);
        assert(calculateNumberSpy.calledOnceWithExactly('SUM', arg1, arg2));

        calculateNumberSpy.restore();
    })
})