const { error } = require('console');
const getPaymentTokenFromApi = require('./6-payment_token');
const assert = require('assert');


describe("getPaymentTokenFromApi", () => {
    it("should return an object", (done) => {
        const exp_ob = {data: 'Successful response from the API'};
        getPaymentTokenFromApi(true).then((resp) => {
            assert.deepEqual(resp, exp_ob);
            done();
        }).catch((error) => {
            done(error);
        });
    });
});