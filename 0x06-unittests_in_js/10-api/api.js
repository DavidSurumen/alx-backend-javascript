const express = require('express');


const app = express();
 // enable middleware to parse the body of 'Content-type: application/json'
app.use(express.json());

const PORT = process.env.PORT || 7865;

app.get('/', (_req, res) => {
    res.send("Welcome to the payment system");
});

app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id;
    res.send("Payment methods for cart " + id);
});

app.get('/available_payments', (_req, res) => {
    const res_obj = {
        payment_methods: {
            credit_cards: true,
            paypal: false,
        },
    }
    res.json(res_obj);
});

app.post('/login', (req, res) => {
    const username = req.body.userName;
    res.send("Welcome " + username);
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});