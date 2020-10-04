const formattedReturn = require('../formattedReturn');
const Razorpay = require('razorpay');
module.exports = async (event) => {
    return new Promise((resolve, reject)=>{
        const instance = new Razorpay({
            key_id: process.env.GATSBY_RAZOR_PAY_KEY_ID,
            key_secret: process.env.GATSBY_RAZOR_PAY_KEY_SECRET,
        });
        const body = JSON.parse(event.body);
        console.log(body);
        try {
            var newPayment = {
                name : body.orderData.name,
                email: body.orderData.email,
                phone: body.orderData.phone ? body.orderData.phone : '',
                payments: [],
              };
              let payment = {
                order_id : body.orderData.order_id,
                payment_id : body.orderData.payment_id
              };
              console.log(payment);
              newPayment.payments = [...newPayment.payments, payment];
              resolve(formattedReturn(200, newPayment));
        } catch(err) {
            console.error(err);
            resolve(formattedReturn(500, {message: "Something Went Wrong" }));
        }
    })
};