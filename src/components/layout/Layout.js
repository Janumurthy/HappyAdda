import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Happy Adda | For the love of Pasta</title>
        <meta name="description" content="A monthly subscription box of classic fusion home-grown flavours of instant pasta"></meta>
        <meta name="og:title" content="Happy Adda | For the love of Pasta"></meta>
        <meta name="og:description" content="A monthly subscription box of classic fusion home-grown flavours of instant pasta"></meta>
        <meta name="og:image" src="../../images/happy-adda-logo.jpeg"></meta>
        <link rel="canonical" href="http://www.happyadda.com" />
      </Helmet>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;