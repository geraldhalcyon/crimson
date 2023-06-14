import React from 'react'
import Banner from './components/Banner';
import About from './components/About';


export const metadata = {
  title: 'Home',
}

const page = () => {
  return (
    <>
      <Banner />
      <About />
    </>
  )
}

export default page;