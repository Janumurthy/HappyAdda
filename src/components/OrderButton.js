import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

class OrderButton extends React.Component {
	constructor(props){
		super(props);
		this.checkout = this.checkout.bind(this);
	}

	componentDidMount() {
		this.stripe = window.Stripe('pk_test_51GvRCfKRDB8ABTmlaJTlLbalEHhLJeF5LQvcKWW0prM5V8jrhjLAKWSRQyGzsrpmSWgVenk1Lx5goZtBNcQKz10C00SZjeqbGl');
	}

	checkout() {
		// When the customer clicks on the button, redirect
		// them to Checkout.
		console.log(this.stripe);
		this.stripe.redirectToCheckout({
			lineItems: [{price: 'price_1Gw3c4KRDB8ABTml2wvfhRW3', quantity: 1}],
			mode: 'payment',
			// Do not rely on the redirect to the successUrl for fulfilling
			// purchases, customers may not always reach the success_url after
			// a successful payment.
			// Instead use one of the strategies described in
			// https://stripe.com/docs/payments/checkout/fulfillment
			successUrl: 'http://localhost:8000/success',
			cancelUrl: 'http://localhost:8000/canceled',
		})
		.then(function (result) {
			console.log(result);
			if (result.error) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer.
			// var displayError = document.getElementById('error-message');
			// displayError.textContent = result.error.message;
			}
		});
	}

	render() {
		const {children, className ='', size} = this.props;
		return(
			<button  
			type="button"
			className={`
				${sizes[size] || sizes.default}
				${className}
				bg-primary
				hover:bg-primary-darker
				rounded
				text-white
			`}
			onClick={this.checkout}>{children}</button>
		)
	}
}

export default OrderButton;