// "use client"

// import {Fragment, useState} from 'react'

import Layout from '../components/Layout'

import Banner from '@/components/Banner';
import About from '@/components/About';
import Services from '@/components/Services';
import Modal from '@/components/Modal';

function Home() {
  // const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
         <main>
          <Banner />
          <About />
          <Services />

          {/* <button className='flex mt-[200px] m-auto text-white bg-blue-700 focus:outline-none rounded-lg px-5 py-2.5' onClick={() => setShowModal(true)}>
              Form Modal
          </button>
          
          <Modal isVisible={showModal} onClose={() => setShowModal(false)}/> */}
        </main>
    </Layout>
  )
}

export default Home