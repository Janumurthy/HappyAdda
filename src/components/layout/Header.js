import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../images/happy-adda-logo.jpeg';
import config from '../../data/config.js';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
   <div className="container flex justify-between items-center mx-auto py-3 px-8">
   		<div className="flex items-center text-2xl w-1/2 md:w-1/4">
   			<div className="mr-3">
				<img src={LogoIcon} alt="Happy Adda Logo" />
			</div>
      	</div>
		<div className="flex items-center sm:mt-0">
			<AnchorLink className="px-4 hidden md:block" href="#about">
				About us
			</AnchorLink>
			<AnchorLink className="px-4 hidden md:block" href="#features">
				Features
			</AnchorLink>
			<AnchorLink className="px-4 hidden md:block" href="#how-to">
				Make your own Pasta
			</AnchorLink>
			{config.payment ?
				<AnchorLink className="py-3 px-4 bg-primary rounded text-white" href="#order">
					Order Now
				</AnchorLink> :
				<AnchorLink className="py-3 px-4 bg-primary rounded text-white"  href="#subscribe">
					Subscribe Now
				</AnchorLink> 
			}
		</div>
    </div>
  </header>
);

export default Header;
