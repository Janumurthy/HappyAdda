import React from 'react';
import Footer from './Footer';
import Header from './Header';
import LogoImage from '../../images/happy-adda-logo.jpeg';
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
        <meta name="og:image" content={LogoImage}></meta>
        <meta name="og:type" content='Website'></meta>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@happyadda" />
        <meta name="twitter:title" content="Happy Adda | For the love of Pasta" />
        <meta name="twitter:description" content="View the album on Flickr." />
        <meta name="twitter:image" content={LogoImage} />
        <link rel="canonical" href="https://www.happyadda.in" />
      </Helmet>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;