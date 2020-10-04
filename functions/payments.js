
const formattedReturn = require('./helpers/formattedReturn');
const createOrder = require('./helpers/orders/createOrder');
const confirmOrder = require('./helpers/orders/confirmOrder');
exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        console.log("calling");
        return await createOrder(event);
    } else if (event.httpMethod === 'POST') {
        return await confirmOrder(event);
    } else {
        return formattedReturn(405, {});
    }
};