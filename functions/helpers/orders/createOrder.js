const formattedReturn = require('../formattedReturn');
const Razorpay = require('razorpay');
module.exports =  () => {
    return new Promise ((resolve, reject) => {
        const instance = new Razorpay({
            key_id: process.env.GATSBY_RAZOR_PAY_KEY_ID,
            key_secret: process.env.GATSBY_RAZOR_PAY_KEY_SECRET,
        });
        try {
            const options = {
                amount: process.env.GATSBY_PAYMENT_AMOUNT * 100, // amount == Rs 10
                currency: "INR",
                receipt: "receipt#1",
                payment_capture: 1, // 1 for automatic capture // 0 for manual capture
            };
            instance.orders.create(options, function (err, order) {
                console.log(order);
                if (err) {
                resolve(formattedReturn(500, {message: "Something Went Wrong" }));
                }
                resolve(formattedReturn(200, order));
            })
        } catch (err) {
            console.error(err);
            resolve(formattedReturn(500, {message: "Something Went Wrong" }));
        }
    });
};