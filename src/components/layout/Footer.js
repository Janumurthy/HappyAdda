import React from 'react';
import config from '../../data/config';

const Footer = () => (
  <footer className="container mx-auto py-3 px-3 mb-2 text-gray-800">
    <div className="flex">
      <div className="text-center mx-auto text-xs">
        <p>Copyright © 2020 HappyAdda. All rights reserved</p>
        {config.payment ?
          <p><a href="/terms-and-conditions">Terms &amp; Conditions</a>
          <span className="px-3">|</span>
          <a href="/privacy-policy">Privacy Policy</a></p>
          : '' }
      </div>
    </div>
  </footer>
);

export default Footer;
