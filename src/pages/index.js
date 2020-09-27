import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import BackgroundSlider from 'gatsby-image-background-slider'

import Layout from "../components/layout/Layout";
import SubscriptionForm from "../components/SubscriptionForm";

// import Button from "../components/Button";
import HeroImage1 from "../images/slider/pasta-01.jpg";
import HeroImage2 from "../images/slider/pasta-02.jpg";
import HeroImage3 from "../images/slider/pasta-03.jpg";
import whiteBgImage from "../images/bg/white_background.jpeg";
import aboutBgImage from "../images/bg/about_us_background.jpg";
import whiteBgImage2 from "../images/bg/plain-background2.jpg";
import boxImage from "../images/bg/whats_in_the_box.jpeg";
import mobileBoxImage from "../images/box_image.jpeg";
import recipesImage from "../images/bg/recipe_background.jpg";

import heroData from '../data/hero-data.js';
import aboutData from '../data/about-data.js';
import featuresData from '../data/features-data.js';
import recipeData from '../data/recipe-data.js';
import subscribeData from '../data/subscribe-data.js';
const paymentMode = process.env.GATSBY_PAYMENT_MODE;

const bgImage1 = {
  backgroundImage: `url(${whiteBgImage2})`
}

const bgImage2 = {
  backgroundImage: `url(${whiteBgImage})`
}

const aboutImage = {
  backgroundImage: `url(${aboutBgImage})`
}

const cardImage = {
  backgroundImage: `url(${boxImage})`
}

const recipeBg = {
  backgroundImage: `url(${recipesImage})`
}

const LandingPage = () => (
  <Layout>
    <section className="pb-8 md:py-20 bg-fixed bg-cover bg-neutral">
      <div className="container mx-auto md:px-8 lg:flex">
	  	<div className="lg:w-1/2 md:my-8 md:order-last">
      {/* <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "pasta"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={[{HeroImage1},{HeroImage2},{HeroImage3}]} 

      // pass down standard element props
      style={{
        transform: "rotate(-2deg) scale(.9)",
      }}           
    > 
    </BackgroundSlider> */}
		  {/* <div className="carousel-container flex flex-col items-center">
				<div className="carousel-item flex flex-col items-center">
					<div className="swiper flex overflow-x-scroll">
						<img className="w-full h-1/2 object-cover bg-gray-300" src={HeroImage1} id="slide1" />
						<img className="w-full h-1/2 object-cover bg-gray-300" src={HeroImage2} id="slide2" />
						<img className="w-full h-1/2 object-cover bg-gray-300" src={HeroImage3} id="slide3" />
					</div>
				</div>
				<div className="carousel-slider flex my-4">
					<a href="#slide1" className="w-4 h-4 mx-1 border border-1 border-primary bg-secondary bg-secondary hover:bg-primary rounded-full"></a>
					<a href="#slide2" className="w-4 h-4 mx-1 border border-1 border-primary bg-secondary bg-secondary hover:bg-primary rounded-full"></a>
					<a href="#slide3" className="w-4 h-4 mx-1 border border-1 border-primary bg-secondary bg-secondary hover:bg-primary rounded-full"></a>
				</div>
			</div> */}
          <img src={HeroImage1} alt="Happy Adda Tasty Pasta" />
        </div>
        <div className="mt-4 text-white text-center lg:text-left lg:w-1/2">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-8 pr-4 leading-none">
            <span className="text-white">{heroData.title.part1}</span> <span className="text-secondary">{heroData.title.part2}</span>
          </h1>
          <p className="md:text-lg font-semibold">{heroData.subtitle}</p>
	        <p className="md:text-lg mt-6 font-light">
            {heroData.description}
          </p>
          <p className="md:text-lg mt-6 font-light">
            {heroData.promo}
          </p>
          <AnchorLink className="inline-block md:block md:w-4/12
            py-2 px-4 md:py-4 md:px-8 mt-8 
            bg-secondary hover:bg-primary-darker
            rounded text-primary mx-auto text-center" 
            href={paymentMode ? "#order" : '#subscribe'}
            data-sal="zoom-in" data-sal-delay="300" data-sal-duration="600" data-sal-easing="ease"
          >
            Get your box now
          </AnchorLink>
        </div>
      </div>
    </section>
    <section id="about" className="py-20 h-auto bg-cover" style={aboutImage}> 
      <div className="container mx-auto px-4 md:px-8 lg:flex">
        <div className="about-text relative top-50 text-center lg:text-left lg:w-2/4" data-sal="fade" data-sal-delay="400" data-sal-duration="800" data-sal-easing="ease">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-8 leading-none">
            <span className="text-primary">{aboutData.title.part1}</span> <span className="text-secondary">{aboutData.title.part2}</span>
          </h1>
          <p className="md:text-lg mt-6 font-light">{aboutData.desc}</p>
          <AnchorLink className="inline-block
            py-2 px-4 
            md:py-4 md:px-8 mt-8
            bg-primary hover:bg-primary-darker
            rounded text-white" 
            href={paymentMode ? "#order" : '#subscribe'}
            data-sal="zoom-in" data-sal-delay="300" data-sal-duration="600" data-sal-easing="ease">
            Get your box now
          </AnchorLink>
        </div>
      </div>
    </section>
    <section id="features" className="py-5 md:py-20 bg-neutral"> 
      <div className="container mx-auto px-4 md:px-8 lg:flex">
        <div className="text-white text-center w-full md:w-3/4 mx-auto">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-8 leading-none" data-sal="fade" data-sal-delay="400" data-sal-duration="800" data-sal-easing="ease">
            <span className="text-white">{featuresData.title.part1}</span><span className="text-secondary">{featuresData.title.part2}</span>
          </h1>
          <div className="md:flex">
            {featuresData.features.map((feature, i)=> (
              <div className="items-center my-4 md:w-1/3" data-sal={i%2 === 0 ? "slide-left" : "slide-right"} data-sal-delay={'300'*i} data-sal-duration='600' data-sal-easing="ease" key={i}>
              <div className="w-7/12 md:w-6/12 p-2 mx-auto">
                  <img className="rounded-full" src={feature.src} />
              </div>
              <div className={i%2!=0 ? 'md:order-first w-full md:w-full p-2 text-center' : 'md:order-last w-full md:w-full p-2 text-center'}>
                <h2 className="text-xl md:text-2xl xl:text-4xl font-bold my-2 leading-none text-white">
                  {feature.title}
                </h2>
                  {feature.desc}
              </div>
              </div>
            ))}
          </div>
          <AnchorLink className="inline-block
            py-2 px-4 
            md:py-4 md:px-8 mt-8
            bg-secondary hover:bg-primary-darker
            rounded text-primary" 
            href={paymentMode ? "#order" : '#subscribe'}
            data-sal="zoom-in" data-sal-delay="800" data-sal-duration="600" data-sal-easing="ease"
          >
            Get your box now
          </AnchorLink>
        </div>
      </div>
    </section>
    <section id="how-to" className="bg-cover md:bg-right-bottom md:py-20" style={recipeBg}> 
      <div className="container mx-auto py-10 px-4 md:px-8 lg:flex">
        <div className="text-center w-full mx-auto">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-8 leading-none" data-sal="fade" data-sal-delay="400" data-sal-duration="800" data-sal-easing="ease">
          <span className="text-primary">{recipeData.title.part1}</span> <span className="text-secondary">{recipeData.title.part2}</span>
          </h1>
          <p className="md:text-lg font-semibold my-4">{recipeData.subtitle}</p>
          {recipeData.recipeSteps.map((step, i)=> (
            <div className="md:flex mx-auto items-center my-4 w-12/12 md:w-6/12 py-4 px-1" data-sal='flip-left' data-sal-delay={'300'*i} data-sal-duration='600' data-sal-easing="ease" key={i}>
            <div className="w-4/12 md:w-1/4 p-2 mx-auto">
                <img src={step.src} />
            </div>
            <h2 className="text-xl md:text-2xl xl:text-4xl font-bold my-2 leading-none text-white">
              {step.title}
            </h2>
            <div className="md:order-last w-full md:w-3/4 text-center text-md md:text-lg xl:text-xl">
                {step.desc}
            </div>
            </div>
          ))}
          <AnchorLink className="inline-block
            py-2 px-4 
            md:py-4 md:px-8 mt-8
            bg-primary hover:bg-primary-darker
            rounded text-white" 
            href={paymentMode ? "#order" : '#subscribe'}
            data-sal="zoom-in" data-sal-delay="1000" data-sal-duration="600" data-sal-easing="ease"
          >
            Get your box now
          </AnchorLink>
        </div>
      </div>
    </section>
    <section id="order" className="py-5 md:pt-20 bg-cover bg-right-bottom" style={cardImage}> 
      <div className="container mx-auto px-4 md:px-8 lg:flex lg:pr-5" data-sal="slide-down" data-sal-delay="300"  data-sal-duration='1000' data-sal-easing="ease">
          <div className="md:w-3/5"><img src={mobileBoxImage}/></div>
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

export default LandingPage
