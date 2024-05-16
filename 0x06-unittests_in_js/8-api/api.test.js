const { expect } = require("chai");
const request = require("request");


describe("Index page", () => {
    it("should return status code 200 and the string 'Welcome to the payment system'", (done) => {
        request.get('http://localhost:7865/', (_err, resp, body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});