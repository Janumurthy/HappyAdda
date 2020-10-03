const express = require("express");
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');
const cors = require("cors");;
const app = express()

const instance = new Razorpay({
    key_id: process.env.GATSBY_RAZOR_PAY_KEY_ID,
    key_secret: process.env.GATSBY_RAZOR_PAY_KEY_SECRET,
});

app.use(cors());
app.use(bodyParser.json());
// Here you can define your routes
// API for creating orders using Razorpay
app.get("/order", (req, res) => {
    try {
    const options = {
    amount: process.env.GATSBY_PAYMENT_AMOUNT * 100, // amount == Rs 10
    currency: "INR",
    receipt: "receipt#1",
    payment_capture: 1, // 1 for automatic capture // 0 for manual capture
    };
    instance.orders.create(options, async function (err, order) {
    if (err) {
    return res.status(500).json({
        message: "Something Went Wrong",
    });
    }
    return res.status(200).json(order);
    });
    } catch (err) {
    return res.status(500).json({
    message: "Something Went Wrong",
    });
    }
});

// API for capturing payments made using Razorpay
app.post("/confirmOrder", (req, res) => {
    console.log(req.body);
    var newPayment = {
    name : req.body.orderData.name,
    email: req.body.orderData.email,
    phone: req.body.orderData.phone ? req.body.orderData.phone : '',
    payments: [],
    };
    let payment = {
    order_id : req.body.orderData.order_id,
    payment_id : req.body.orderData.payment_id
    };
    console.log(payment);
    newPayment.payments = [...newPayment.payments, payment];
    res.status(200).send(newPayment);
});

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`listening on port ${port}`));
