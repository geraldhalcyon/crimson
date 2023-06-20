
"use client"

import { useEffect, useState } from "react";

import Link from 'next/link'
import Head from 'next/head'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Layout({
  children,
  title = 'Home',
}) {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
        {children}
      <Footer />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8963;
        </button>
      )}
    </>
  )
}

export default Layout