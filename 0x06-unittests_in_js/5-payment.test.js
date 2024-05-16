const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

const sinon = require('sinon');
const assert = require('assert');


describe("sendPaymentRequestToApi", () => {
    beforeEach(() => {
        sinon.spy(console, 'log');
    });

    afterEach(() => {
        sinon.restore();
    })

    it("should call sendPaymentRequestToApi with 100 and 20", () => {
        const arg1 = 100;
        const arg2 = 20;

        sendPaymentRequestToApi(arg1, arg2);
        assert(console.log.calledWith('The total is: 120'));
        assert(console.log.calledOnce);
    });

    it("should call sendPaymentRequestToApi with 10 and 10", () => {
        const arg1 = 10;
        const arg2 = 10;

        sendPaymentRequestToApi(arg1, arg2);
        assert(console.log.calledWith('The total is: 20'));
        assert(console.log.calledOnce);
    });
})