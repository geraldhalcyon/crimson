
"use client"

import { useEffect, useState } from "react";

import Link from 'next/link'
import Head from 'next/head'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Layout({
  children,
  title = 'Home',
  description = "Crimson Hotel Filinvest City, Manila is a five-star hotel located in one of the metro&amp;rsquo;s modern central business districts and premier lifestyle destinations in southern Manila. With its contemporary guestrooms, first-rate amenities, delightful dining options, and heartfelt hospitality combined with a cosmopolitan vibe, it offers a charming staycation experience to both business travelers and leisure guests.A mere 10km away from the Ninoy Aquino International Airport (NAIA), the hotel sits in a highly convenient location where it can be easily accessed via Skyway or South Luzon Expressway (SLEX).Crimson Hotel Filinvest City, Manila was certified by the Department of Tourism and recognized by World Travel &amp;amp; Tourism Council for being compliant with the health and hygiene standard protocols.",
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
        <meta name="description" content={description} />
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