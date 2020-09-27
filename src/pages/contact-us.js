import React from "react"
import Layout from "../components/layout/Layout";
import boxImage from "../images/bg/whats_in_the_box.jpeg";

const cardImage = {
  backgroundImage: `url(${boxImage})`
}

const ContactUs = () => (
  <Layout>
    <section id="contact-us" className="py-5 md:pt-20 h-screen bg-cover bg-right-bottom" style={cardImage}> 
      <div className="container mx-auto px-4 md:px-8 lg:pr-5">
          <h2 className="text-left text-2xl xl:text-4xl font-bold mb-8 leading-none" data-sal="fade" data-sal-delay="100"  data-sal-duration='800' data-sal-easing="ease">
          <span className="text-primary">Contact </span> <span className="text-secondary">us</span>
          </h2>
          <div className="lg:w-1/2">
            <div data-sal="slide-right" data-sal-delay="200" data-sal-duration='800' data-sal-easing="ease">
              <p className="md:text-lg mb-2 font-semibold">Product Inquires</p>
              <p className="md:text-lg mb-4">Call us at <a href="tel:9994609087">9994609087</a></p>
            </div>
            <div data-sal="slide-right" data-sal-delay="400" data-sal-duration='800' data-sal-easing="ease">
              <p className="md:text-lg mb-2 font-semibold">Payment Queries</p>
              <p className="md:text-lg mb-4">Call us at <a href="tel:9003054622">9003054622</a></p>
            </div>
            <div data-sal="slide-right" data-sal-delay="600" data-sal-duration='800' data-sal-easing="ease">
              <p className="md:text-lg mb-2  font-semibold">Customer Support</p>
              <p className="md:text-lg mb-4">Mail us at <a href="mailto:support@happyadda.in">support@happyadda.in</a></p>
            </div>
          </div>
      </div>
    </section>
  </Layout>
)

export default ContactUs
