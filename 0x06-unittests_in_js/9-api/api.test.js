const { expect } = require("chai");
const request = require("request");


describe("Index page", () => {
    it("GET / returns status code 200 and the string 'Welcome to the payment system'", (done) => {
        request.get('http://localhost:7865/', (_err, resp, body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it("GET /cart/:id returns correct status code and result for valid :id", (done) => {
        request.get('http://localhost:7865/cart/7', (_err, resp, body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(body).to.be.equal("Payment methods for cart 7");
            done();
        });
    });

    it("GET /cart/:id returns correct status code for non-positive :id", (done) => {
        request.get("http://localhost:7865/cart/-4", (_err, resp, _body) => {
            expect(resp.statusCode).to.be.equal(404);
            done();
        });
    });

    it("GET /cart/:id returns correct status code for non-numeric :id", (done) => {
        request.get("http://localhost:7865/cart/s", (_err, resp, _body) => {
            expect(resp.statusCode).to.be.equal(404);
            done();
        });
    });
});