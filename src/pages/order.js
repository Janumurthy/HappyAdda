import React from "react"

import Layout from "../components/layout/Layout";
import boxImage from "../images/bg/whats_in_the_box.jpeg";
import mobileBoxImage from "../images/box_image.jpeg";
import SubscriptionForm from "../components/SubscriptionForm";
import subscribeData from '../data/subscribe-data.js';
const cardImage = {
    backgroundImage: `url(${boxImage})`
  }
  
const paymentMode = process.env.GATSBY_PAYMENT_MODE;

const PaymentPage = () => (
  <Layout>
    <section id="order" className="py-5 md:pt-20 bg-cover bg-right-bottom" style={cardImage}> 
      <div className="container mx-auto px-4 md:px-8 lg:flex lg:pr-5" data-sal="slide-down" data-sal-delay="300"  data-sal-duration='1000' data-sal-easing="ease">
          <div className="md:w-3/5"><img src={mobileBoxImage} alt="What's in the box"/></div>
        <div className="card rounded shadow-lg py-10 px-10 bg-off-white lg:order-last lg:ml-auto md:w-2/5">
          <h2 className="text-center text-2xl xl:text-4xl font-bold mb-8 leading-none">
          <span className="text-primary">What's in </span> <span className="text-secondary">your Box</span>
          </h2>
          <div className="mx-auto md:w-3/4">
            <p className="text-center md:text-lg font-semibold">Get these for Rs. 499 for <span className="block text-center text-primary">EVERY MONTH!</span></p>
            <ul>
              <li className="my-5" data-sal="slide-left" data-sal-delay="500" data-sal-duration="800" data-sal-easing="ease">
                4 different flavours of instant pasta 
              </li>
              <li className="my-5"  data-sal="slide-left" data-sal-delay="800" data-sal-duration="800" data-sal-easing="ease">
                A pack of crunchy nibbles
              </li>
              <li className="my-5"  data-sal="slide-left" data-sal-delay="1000" data-sal-duration="800" data-sal-easing="ease">
                A bottle of cold-pressed juice 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id={paymentMode ? "order" : "subscribe"} className="py-5 md:py-20 bg-neutral"> 
      <div className="container mx-auto px-4 md:px-8 lg:flex">
        <div className="text-white text-center w-full md:w-3/4 mx-auto" data-sal="fade" data-sal-delay="100" data-sal-duration="800" data-sal-easing="ease">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-8 leading-none">
            <span className="text-white">{subscribeData.title.part1}</span><span className="text-secondary">{subscribeData.title.part2}</span><span className="text-white">{subscribeData.title.part3}</span>
          </h1>
          <p className="md:text-lg mt-6 font-light">
            {subscribeData.desc}
          </p>
          <SubscriptionForm paymentOn = {paymentMode}/>
          <div className="thank-you hidden w-full max-w-lg mx-auto mt-4 mb-6 px-4 py-4" data-sal="zoom-in" data-sal-delay="300" data-sal-duration="600" data-sal-easing="ease">
            <p className="text-lg md:text-xl mt-6">
             Thanks for your interest, we will contact you soon!
            </p>
          </div>
          <div id="thank-you-purchase" className="thank-you-purchase hidden w-full max-w-lg mx-auto mt-4 mb-6 px-4 py-4" data-sal="zoom-in" data-sal-delay="300" data-sal-duration="600" data-sal-easing="ease">
            <p className="text-lg md:text-xl mt-6">
             Thanks for your purchase $name, your delicious pasta will be delivered soon! You will receive a confirmation on your email $email to track the order.
            </p>
          </div>
          <div id="error-purchase" className="error-purchase hidden w-full max-w-lg mx-auto mt-4 mb-6 px-4 py-4" data-sal="zoom-in" data-sal-delay="300" data-sal-duration="600" data-sal-easing="ease">
            <p className="text-lg md:text-xl mt-6">
             Sorry, your payment could not processed, please try again later or contact us on whatsapp for support.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default PaymentPage;

