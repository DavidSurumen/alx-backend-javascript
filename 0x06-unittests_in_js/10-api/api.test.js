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

    it("POST /login returns correct status code and message", (done) => {
        const data = { userName: "Betty" };
        const config = {
            url: "http://localhost:7865/login",
            body: data,
            json: true,
        };

        request.post(config, (_err, resp, _body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(resp.body).to.be.equal("Welcome Betty");
            done();
        });
    });

    it("GET /available_payments returns correct status code and data", (done) => {
        const exp_ob = {
            payment_methods:{
                credit_cards:true,
                paypal:false,
            },
        };
        request.get("http://localhost:7865/available_payments", (err, resp, body) => {
            expect(resp.statusCode).to.be.equal(200);
            expect(JSON.parse(resp.body)).to.deep.equal(exp_ob);
            done();
        });
    });
});