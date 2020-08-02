import React from 'react';
function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  

class SubscriptionForm extends React.Component {
	constructor(props){
        super(props);
        this.state = { name: "", email: "", phone: "" };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        console.log(e.target.name);
        this.setState({ [e.target.name] : e.target.value })
    }

	onSubmit(e) {
        e.preventDefault()
        const form = e.target;
        console.log(form.getAttribute('name'));
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

	render() {
		return(
            <div>
                <form name="subscription" method="POST" className="w-full max-w-md mx-auto mt-4 mb-6 px-4 py-4" data-netlify="true" onSubmit={this.onSubmit} data-sal="zoom-in" data-sal-delay="300" data-sal-duration="600" data-sal-easing="ease"> 
                    <div class="items-center py-2 pb-8">
                    <input required class="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Name" name="name" aria-label="name" />
                    <input required class="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Email address" name="email" aria-label="email" />
                    <input class="appearance-none bg-white w-full shadow text-gray-700 mr-3 mb-2 py-2 px-2 leading-tight focus:outline-none rounded-md" onChange={this.handleChange} type="text" placeholder="Phone number (Optional)" name="phone" aria-label="phone" />
                    <button type="submit" class="flex-shrink-0 mx-auto flex bg-secondary border-secondary text-sm md:text-lg border-4 text-primary py-2 px-4 mt-4 rounded">
                        Subscribe
                    </button>
                    </div>
                </form>
            </div>
		)
	}
}

export default SubscriptionForm;