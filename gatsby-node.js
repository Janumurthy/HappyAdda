const Razorpay = require('razorpay');
const cors = require("cors");
const bodyParser = require('body-parser');
exports.onCreateDevServer = ({ app }) => {
  app.use(cors());
  app.use(bodyParser.json());
  const instance = new Razorpay({
      key_id: process.env.GATSBY_RAZOR_PAY_KEY_ID,
      key_secret: process.env.GATSBY_RAZOR_PAY_KEY_SECRET,
  });
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
  }