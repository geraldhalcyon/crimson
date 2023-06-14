import React from 'react'
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Home',
}

const index = () => {
  return (
    <>
      <Navbar />
        <main>
          <Banner />
          <About />
          <Services />
        </main>
      <Footer />
    </>
  )
}

export default index;