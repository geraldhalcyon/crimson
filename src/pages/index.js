'use client'

// import { useState } from 'react';

import Layout from '../components/Layout'

import Banner from '@/components/Banner';
import About from '@/components/About';
import Services from '@/components/Services';
// import Reviewsmodal from '@/components/Reviewsmodal';

function Home() {
  // const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
         <main>
          <Banner />
          <About />
          <Services />

        {/* <button className='py-[15px] px-[20px] btn-secondary text-[13px] font-primary hover:bg-[var(--fourth-color)] uppercase mt-[200px] m-auto flex text-white' onClick={() => setShowModal(true)}>View Modal</button>
        <Reviewsmodal isVisible={showModal} onClose={() => setShowModal(false)}/> */}
        </main>
    </Layout>
  )
}

export default Home