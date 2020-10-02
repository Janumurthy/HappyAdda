import React from 'react';
import axios from "axios";
function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  

class SubscriptionForm extends React.Component {
	constructor(props){
        super(props);
        this.state = { 
          name: "",
          email: "",
          contact: "",
          order_id: "", 
          billing_address1:"",
          billing_address2: "",
          billing_city: "",
          billing_pincode: "",
          delivery_address1:"",
          delivery_address2: "",
          delivery_city: "",
          delivery_pincode: "",
          delivery: "same",
          subscribe: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handlePaymentResponse = this.handlePaymentResponse.bind(this);
    }
    
    handleChange(e) {
        if(e.target.type === 'checkbox') {
          console.log(e.target.checked);
          this.setState({ [e.target.name] : e.target.checked })
        }
        if(e.target.type==='radio') {
           if(e.target.value === 'different') {
             document.getElementById("delivery-address").classList.remove("hidden");
           } else {
             this.setState({
               delivery_address1: this.state.billing_address1,
               delivery_address2: this.state.billing_address2,
               delivery_city: this.state.billing_city,
               delivery_pincode: this.state.billing_pincode,
             })
            document.getElementById("delivery-address").classList.add("hidden");
           }
        }
        this.setState({ [e.target.name] : e.target.value })
	}
	
	handleCheckout(res) {
		console.log("Preparing for checkout...");
		const prefill = {
			name: this.state.name,
			email: this.state.email,
			contact: this.state.contact ? this.state.contact : '', 
		  };
		const theme = {color: '#009244'};
		const notes = {
			address:{
				billing_address:{
					address1: this.state.billing_address1,
					address2: this.state.billing_address2,
					city: this.state.billing_city,
					pincode: this.state.billing_pincode,
				},
				delivery_address: {
					address1: this.state.delivery_address1,
					address2: this.state.delivery_address2,
					city: this.state.delivery_city,
					pincode: this.state.delivery_pincode,
				}
			},
			delivery: this.state.delivery,
		}
		console.log(res);
        const options = {
		  key: process.env.GATSBY_RAZOR_PAY_KEY_ID,
		  amount: parseInt(res.data.amount),
          name: "HappyAdda",
          description: "Payment for HappyAdda Pasta Box",
          order_id: res.data.id,
		  handler: this.handlePaymentResponse,
		  prefill,
		  theme,
		  notes,
		};
		console.log(options);
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
	}

	handlePaymentResponse(res){
		console.log("Getting order response....");
		let orderData = {
			"name": this.state.name || '',
			"phone": this.state.contact || '',
			"email": this.state.email || '',
			"paymentAmount" : process.env.GATSBY_PAYMENT_AMOUNT,
			"order_id" : res.razorpay_order_id,
			"payment_id" : res.razorpay_payment_id,
		  };
			const BASE_URL = 'https://dev--happyadda.netlify.app/';
			const confirmOrderUrl = `${BASE_URL}confirmOrder`;
			axios({
				method: 'POST',
				url: confirmOrderUrl,
				data:{ orderData }
			})
			.then(res => {
				document.getElementById("checkout").classList.add("hidden");
				const thankYouElement = document.getElementById('thank-you-purchase');
				thankYouElement.classList.remove('hidden');
				let thankyouText = thankYouElement.innerHTML;
				console.log(res);
				thankyouText = thankyouText.replace('$name', res.data.name);
				if(res.data.phone){
					thankyouText = thankyouText.replace('$email', `${res.data.email} and on your phone ${res.data.phone}`);
				} else {
					thankyouText = thankyouText.replace('$email', `${res.data.email}`);
				}
				thankYouElement.innerHTML = thankyouText;
			})
			.catch(err => {
				console.log(err);
				document.getElementById('error-purchase').classList.remove('hidden');
			});   
	}

	paymentHandler = async (e) => { // Create Order 
		console.log("Creating order....");
		const API_URL = 'https://dev--happyadda.netlify.app/';
		e.preventDefault();
		const orderUrl = `${API_URL}order`;
		const response = await axios.get(orderUrl);
		console.log(response);
		console.log("Order created");
		this.handleCheckout(response);
	}

	onSubmit(e) {
        e.preventDefault()
        const form = e.target;
        console.log("submitted");
        if(process.env.GATSBY_PAYMENT_MODE) {
            this.paymentHandler(e);
        } else {
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
                }),
            })
            .then(() => {
                    document.querySelector(".thank-you").classList.remove("hidden");
                    document.querySelector("form").classList.add("hidden");
            })
            .catch((error) => alert(error))
        }
	}

	render() {
    const notes=this.state.address;
		return(
            <div>
                <form name="checkout" id="checkout" method="POST" className="w-full max-w-md mx-auto mt-4 mb-6 px-4 py-4" data-netlify="true" onSubmit={this.onSubmit} data-sal="zoom-in" data-sal-delay="300" data-sal-duration="600" data-sal-easing="ease"> 
                    <div className="items-center py-2 pb-8">
                    <input required className="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Name" name="name" aria-label="name" />
                    <input required className="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Email address" name="email" aria-label="email" />
                    <input className="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Phone number (Optional)" name="contact" aria-label="contact" />
                    {process.env.GATSBY_PAYMENT_MODE ? 
						<div>
							<input className="bg-white shadow mr-3 mt-2 py-2 px-2 leading-tight focus:outline-none rounded-sm" onChange={this.handleChange} type="checkbox" name="subscribe" aria-label="subscribe"/> 
							<label htmlFor="subscribe" className="width-md">I agree to subscribe to PASTA Tribe</label>
							<p className="flex-shrink-0 mx-auto flex bg-secondary border-secondary text-sm md:text-lg border-4 text-primary py-2 px-4 mt-4 rounded" onClick={() => {document.getElementById("address-section").classList.remove("hidden");}}>Proceed to Pay</p>
							<div id="address-section" className="hidden" data-sal="slide-left" data-sal-delay="300" data-sal-duration="600" data-sal-easing="ease"> 
								<div id="billing-address">
									<p className="md:text-lg mt-6 font-medium text-left">Billing Address</p>
									<input className="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Address Line 1" name="shipping_address1" aria-label="address1" />
									<input className="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Address Line 2" name="shipping_address2" aria-label="address2" />
									<input className="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="City" name="shipping_city" aria-label="city" />
									<input className="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Pincode" name="shipping_pincode" aria-label="pincode" />
								</div>
								<div data-sal="slide-left" data-sal-delay="300" data-sal-duration="600" data-sal-easing="ease"> 
									<p className="md:text-lg mt-6 font-medium text-left">Delivery Address</p>
									<input className="bg-white shadow mr-3 mt-2 py-2 px-2 leading-tight focus:outline-none display" onChange={this.handleChange} type="radio" name="delivery" value="same" aria-label="subscribe"/> 
									<label htmlFor="subscribe" className="width-md">Same as Billing Address</label>
									<input className="bg-white shadow mr-3 mt-2 py-2 px-2 leading-tight focus:outline-none" onChange={this.handleChange} type="radio" name="delivery" value="different" aria-label="subscribe"/> 
									<label htmlFor="subscribe" className="width-md">Gift a friend / Deliver to other address</label>
									<div id="delivery-address" className="hidden">
										<input className="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Address Line 1" name="delivery_address1" aria-label="address1" />
										<input className="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Address Line 2" name="delivery_address2" aria-label="address2" />
										<input className="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="City" name="city" aria-label="city" />
										<input className="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Pincode" name="delivery_pincode" aria-label="pincode" />
									</div>
								</div>
								<button type="submit" className="flex-shrink-0 mx-auto flex bg-secondary border-secondary text-sm md:text-lg border-4 text-primary py-2 px-4 mt-4 rounded">
									{process.env.GATSBY_PAYMENT_MODE ? 'Pay' : 'Subscribe'}
								</button>
							</div>
						</div>
					: ''}
                    </div>
                </form>
            </div>
		)
	}
}

export default SubscriptionForm;