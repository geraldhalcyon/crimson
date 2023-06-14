import React from 'react'

import Image from 'next/image';
import { FaRegCheckCircle } from "react-icons/fa"
import aboutData from '@/static-data/about';

const About = () => {
  return (
    <section className='block-home-about bg-[#003240]'>
        <div className="grid grid-cols-1 md:grid-cols-10 py-[35px]">
          <div className="md:col-span-6 text-center">
              <Image className='w-[96%] h-[100%] object-cover'
              src={aboutData.aboutImage} 
              width={1153} height={650} 
              alt="a group of people smiling" />
          </div>  
          <div className="md:col-span-4 text-center py-5 w-[100%] md:w-[80%] px-4 md:pl-[75px]">
              <div className='text-[var(--primary-color)]'>
                <div className='border-solid border-2 border-black border-opacity-5 font-third '>
                  <div className='flex items-center'>
                    <div className='flex-1 flex flex-col justify-center text-left py-[8px] pr-[54px] md:px-[20px] relative'>
                      <div className='content h-[60%] w-[1px] bg-white absolute right-[15px] top-[15px]'></div>
                        <div className='flex items-end'>
                          <div className='text-[30px]'>
                            4.1
                            <span className='text-[17px]'>/5</span>
                          </div>
                          <div className='text-[13px] relative bottom-[7px] left-[5px]'>
                            Very good
                          </div>
                        </div>
                        <div className='block'>
                            TOP 6% of Hotels in Muntinlupa
                        </div>
                    </div>
                    <div className='flex py-[8px] px-[20px]'>
                        <div className='flex items-center'>
                          <div>
                            <FaRegCheckCircle className='w-[32px] h-[32px] relative right-[10px]'/>
                          </div>
                          <div className='text-[13px]'>
                            <a className='' href='/'>Based on 2953 reviews</a>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className='flex justify-around flex-wrap border-solid border-t-2 bg-[#002833]'>
                      <div className='w-[50%] md:w-auto'>
                        <div>TripAdvisor</div>
                        <div>4.5/5</div>
                      </div>

                      <div className='w-[50%] md:w-auto'>
                        <div>Booking.com</div>
                        <div>8.2/10</div>
                      </div>

                      <div className='w-[50%] md:w-auto'>
                        <div>Hotels.com</div>
                        <div>8.2/10</div>
                      </div>

                      <div className='w-[50%] md:w-auto'>
                        <div>Expedia</div>
                        <div>4.1/5</div>
                      </div>
                    </div>
                  </div>
                  <div className='text-left text-[18px] leading-[27px]'>
                    <p className='py-6'>Crimson Hotel Filinvest City, Manila is a five-star hotel located in one of the metro’s modern central business districts and premier lifestyle destinations in southern Manila. With its contemporary guestrooms, first-rate amenities, delightful dining options, and heartfelt hospitality combined with a cosmopolitan vibe, it offers a charming staycation experience to both business travelers and leisure guests.</p>
                    <p className='py-6'>A mere 10km away from the Ninoy Aquino International Airport (NAIA), the hotel sits in a highly convenient location where it can be easily accessed via Skyway or South Luzon Expressway (SLEX).</p>
                    <p className='py-6'>Crimson Hotel Filinvest City, Manila was certified by the Department of Tourism and recognized by World Travel & Tourism Council for being compliant with the health and hygiene standard protocols. </p>
                  </div> 
              </div>
          </div>
        </div>
    </section>
  )
}

export default About
