import React from 'react'

import Image from 'next/image';
import aboutImage from '../images/Block_Riding-Together-is-Better-x-large.jpg';
import { FaRegCheckCircle } from "react-icons/fa"

const About = () => {
  return (
    <section className='block-home-about bg-[#003240]'>
      <div className="grid grid-cols-10 md:grid-cols-10 py-8">
        <div className="md:col-span-6 text-center">
            <Image className='w-[96%]' 
                  src={aboutImage} 
                  width={1153}
                  height={650}
                  alt="a group of people smiling" />
        </div>  
        <div className="md:col-span-4 text-center py-5">
            <div className='text-[var(--primary-color)]'>
              <div className='flex'>
                <div className='flex-1 flex flex-col justify-center text-left'>
                    <div className='flex'>
                      <div>
                        4.1
                        <span>/5</span>
                      </div>
                      <div>
                        Very good
                      </div>
                    </div>
                    <div className='block'>
                        TOP 6% of Hotels in Muntinlupa
                    </div>
                </div>
                <div>
                    <div>
                      <div>
                        <FaRegCheckCircle />
                      </div>
                      <div>
                        <a className='' href='/'>Based on 2953 reviews</a>
                      </div>
                    </div>
                </div>
              </div>
              <div className='text-left text-[18px] leading-[27px]'>
                <p>Crimson Hotel Filinvest City, Manila is a five-star hotel located in one of the metro’s modern central business districts and premier lifestyle destinations in southern Manila. With its contemporary guestrooms, first-rate amenities, delightful dining options, and heartfelt hospitality combined with a cosmopolitan vibe, it offers a charming staycation experience to both business travelers and leisure guests.</p>
                <p>A mere 10km away from the Ninoy Aquino International Airport (NAIA), the hotel sits in a highly convenient location where it can be easily accessed via Skyway or South Luzon Expressway (SLEX).</p>
                <p>Crimson Hotel Filinvest City, Manila was certified by the Department of Tourism and recognized by World Travel & Tourism Council for being compliant with the health and hygiene standard protocols. </p>
              </div> 
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
