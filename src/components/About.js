'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegCheckCircle } from "react-icons/fa"
import aboutData from '@/static-data/about';
import Reviewsmodal from '@/components/Reviewsmodal';

import styles from "../styles/aboutus.module.css";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className='block-home-about bg-[#003240]'>
        <div className="grid grid-cols-1 lg:grid-cols-10 py-[35px]">
          <div className="lg:col-span-6 text-center flex">
              <Image className='w-[100%] lg:w-[96%] h-[100%] object-cover'
              src={aboutData.aboutDetails.image.path} 
              layout='responsive'
              width={aboutData.aboutDetails.image.width}
              height={aboutData.aboutDetails.image.height}
              quality={100} 
              alt={aboutData.aboutDetails.image.alt} 
              property='true'
              loading="eager"
              />
          </div>  
          <div className={`lg:col-span-4 text-center py-5 w-[100%] lg:w-[80%] px-4 lg:pl-[75px] ${styles.aboutRes}`}>
              <div className='text-[var(--primary-color)]'>
                <div className='border-solid border-2 border-black border-opacity-5 font-third '>
                  <div className='flex items-center px-[20px] py-[20px] lg:px-[0px] lg:py-[0px]'>
                    <div className='flex-1 flex flex-col justify-center text-left py-[8px] pr-[54px] lg:px-[20px] relative'>
                      <div className='content h-[60%] w-[1px] bg-white absolute right-[15px] top-[15px]'></div>
                        <div className='flex items-end'>
                          <div className='text-[30px]'>
                            {aboutData.aboutDetails.hotelReviews.hoteltopDetails.rating1}
                            <span className='text-[17px]'>{aboutData.aboutDetails.hotelReviews.hoteltopDetails.rating2}</span>
                          </div>
                          <div className='text-[13px] relative bottom-[7px] left-[5px]'>
                            {aboutData.aboutDetails.hotelReviews.hoteltopDetails.details}
                          </div>
                        </div>
                        <div className='block'>
                            {aboutData.aboutDetails.hotelReviews.hoteltopDetails.percent}
                        </div>
                    </div>
                    <div className='flex py-[8px] px-[20px]'>
                        <div className='flex items-center'>
                          <FaRegCheckCircle className='w-[32px] h-[32px] relative right-[10px]'/>
                            <Reviewsmodal isVisible={showModal} onClose={() => setShowModal(false)}/>
                            <button className='text-[13px]' onClick={() => setShowModal(true)}>{aboutData.aboutDetails.hotelReviews.hoteltopDetails.link}</button>
                        </div>
                    </div>
                  </div>
                  <div className='flex justify-around flex-wrap border-solid border-t-2 bg-[#002833] px-[20px] py-[20px] lg:px-[0px] lg:py-[0px]'>
                      <div className='w-[100%] md:w-auto'>
                        <div>{aboutData.aboutDetails.hotelReviews.wb1.title}</div>
                        <div>{aboutData.aboutDetails.hotelReviews.wb1.rating}</div>
                      </div>
                      <div className='w-[100%] md:w-auto'>
                        <div>{aboutData.aboutDetails.hotelReviews.wb2.title}</div>
                        <div>{aboutData.aboutDetails.hotelReviews.wb2.rating}</div>
                      </div>
                      <div className='w-[100%] md:w-auto'>
                        <div>{aboutData.aboutDetails.hotelReviews.wb3.title}</div>
                        <div>{aboutData.aboutDetails.hotelReviews.wb3.rating}</div>
                      </div>
                      <div className='w-[100%] md:w-auto'>
                        <div>{aboutData.aboutDetails.hotelReviews.wb4.title}</div>
                        <div>{aboutData.aboutDetails.hotelReviews.wb4.rating}</div>
                      </div>


                    </div>
                  </div>
                  <div className='text-left text-[18px] leading-[27px]'>
                    <p className='py-6'>{aboutData.aboutDetails.details.d1}</p>
                    <p className='py-6'>{aboutData.aboutDetails.details.d2}</p>
                    <p className='py-6'>{aboutData.aboutDetails.details.d3}</p>
                  </div> 
              </div>
          </div>
        </div>
    </section>
  )
}

export default About
