import React from "react"

import Layout from "../components/layout/Layout";
import OrderButton from "../components/OrderButton";
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import Button from "../components/Button";
import HeroImage1 from "../images/pasta-01.jpg";
import whiteBgImage from "../images/white_background.jpg";
// import aboutImage from "../images/mobile_plain-background.jpg";
import whiteBgImage2 from "../images/plain-background2.jpg";
import boxImage from "../images/whats_in_the_box.jpg";
import mobileBoxImage from "../images/mobile-whats_in_the_box.jpg";
import recipesImage from "../images/recipe_background.jpg";
import featuresData from '../data/features-data.js';
import recipeData from '../data/recipe-data.js';

const bgImage1 = {
  backgroundImage: `url(${whiteBgImage2})`
}

const bgImage2 = {
  backgroundImage: `url(${whiteBgImage})`
}

const cardImage = {
  backgroundImage: `url(${boxImage})`
}

const recipeBg = {
  backgroundImage: `url(${recipesImage})`
}

const LandingPage = () => (
  <Layout>
    <section className="py-5 md:py-20 bg-fixed h-screen bg-cover" style={bgImage1}>
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl xl:text-5xl font-bold mb-8 pr-4 leading-none">
            <span className="text-primary">Hola PASTA</span> <span className="text-secondary">BAE!</span>
          </h1>
          <p className="font-semibold">You are in the RIGHT place.</p>
          <p className="text-xl mt-6 font-light">
            Subscribe to <span className="font-semibold text-primary">HAPPY ADDA</span> and have your box delivered at your doorstep every month.
          </p>
          <AnchorLink className="inline-block
            py-4 px-8 mt-8
            bg-primary hover:bg-primary-darker
            rounded text-white" 
            href="#order">
            Get your box now
          </AnchorLink>
        </div>
        <div className="lg:w-1/2 my-8 order-last">
          <img src={HeroImage1} alt="Happy Adda Tasty Pasta" />
        </div>
      </div>
    </section>
    <section id="about" className="py-5 md:py-20 bg-fixed h-auto bg-cover" style={bgImage2}> 
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-2/4">
          <h1 className="text-4xl xl:text-5xl font-bold mb-8 leading-none">
            <span className="text-primary">About</span> <span className="text-secondary">us</span>
          </h1>
          <p className="text-xl mt-6 font-light"> Happy ADDA is a uniquely crafted monthly fee subscription box that comes with delicious fusion, classic, and home-grown flavours of wholesome instant pasta. Would you want this pasta box of joy delivered straight at your front door?</p>
          <AnchorLink className="inline-block
            py-4 px-8 mt-8
            bg-primary hover:bg-primary-darker
            rounded text-white" 
            href="#order">
            Get your box now
          </AnchorLink>
        </div>
      </div>
    </section>
    <section id="features" className="py-5 md:py-20 bg-neutral"> 
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center w-3/4 mx-auto">
          <h1 className="text-4xl xl:text-5xl font-bold mb-8 leading-none">
            <span className="text-primary">Why happy</span><span className="text-secondary">adda</span>
          </h1>
          {featuresData.map((feature, i)=> (
            <div className="md:flex mx-auto items-center my-4" key={i}>
             <div className="w-full md:w-1/4 p-2">
                 <img src={feature.src} />
             </div>
             <div className={i%2!=0 ? 'md:order-first w-full md:w-3/4 p-2 text-center md:text-left' : 'md:order-last w-full md:w-3/4 p-2 text-center md:text-left'}>
                 {feature.desc}
             </div>
            </div>
          ))}
          <AnchorLink className="inline-block
            py-4 px-8 mt-8
            bg-primary hover:bg-primary-darker
            rounded text-white" 
            href="#order">
            Get your box now
          </AnchorLink>
        </div>
      </div>
    </section>
    <section id="how-to" className="bg-cover md:bg-right-bottom py-5 md:py-20" style={recipeBg}> 
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center w-5/6 mx-auto">
          <h1 className="text-4xl xl:text-5xl font-bold mb-8 leading-none">
          <span className="text-primary">Make your own</span> <span className="text-secondary">4-min Pasta</span>
          </h1>
          <p className="font-semibold my-4">4 MINUTES is all you need to make your bowl of yummilicious pasta.</p>
          {recipeData.map((recipe, i)=> (
            <div className="w-full flex md:w-3/5 mx-auto" key={i}>
             <div className="w-1/5 p-2 text-center">
                 <div className="step mx-auto flex items-center rounded-full border-solid border-4 border-primary bg-secondary text-primary w-10 h-10">
                     <span className="number mx-auto font-semibold">{i + 1}</span>
                 </div>
             </div>
             <div className="w-4/5 p-2 text-left">
                 {recipe.desc}
             </div>
            </div>
          ))}
          <AnchorLink className="inline-block
            py-4 px-8 mt-8
            bg-primary hover:bg-primary-darker
            rounded text-white" 
            href="#order">
            Get your box now
          </AnchorLink>
        </div>
      </div>
    </section>
    <section id="order" className="py-5 md:pt-20 bg-cover" style={cardImage}> 
      <div className="container mx-auto lg:flex lg:pr-5" >
          <div className="md:hidden"><img src={mobileBoxImage}/></div>
        <div className="card rounded shadow-lg py-10 px-10 bg-neutral lg:order-last lg:ml-auto">
          <h2 className="text-3xl xl:text-4xl font-bold mb-8 leading-none">
          <span className="text-primary">What's in </span> <span className="text-secondary">your Box</span>
          </h2>
          <div className="mx-auto">
            <p className="font-semibold">Get these for Rs. 499 for <span className="text-primary">Every month!</span></p>
            <ul>
              <li className="my-5">
                4 different flavours of instant pasta 
              </li>
              <li className="my-5">
                A pack of crunchy nibbles
              </li>
              <li className="my-5">
                A bottle of cold-pressed juice 
              </li>
            </ul>
            <div className="flex mx-auto">
              <OrderButton className="mx-auto my-4" size="lg">Pay Now</OrderButton>
            </div>
          </div>
          </div>
      </div>
    </section>
  </Layout>
)

export default LandingPage
