import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import servicesData from '@/static-data/services';

const Services = () => {
  return (
    <section className='block-home-services'>
        <div className='grid grid-cols-1 md:grid-cols-10'>
            <div className='md:col-span-5 relative'>
                <div className='bg-overlay'></div>
                <Image className='w-[100%] h-[100%] object-cover'
                src={servicesData.servicesImage1} 
                width={944} height={906} 
                alt="swimming pool" />
                <div className='text-[var(--primary-color)] absolute bottom-[25px] left-[25px]'>
                    <h2 className='text-[23px] uppercase font-secondary font-black'>Local Advantage</h2>
                    <p className='text-[16px] leading-[27px] py-[16px]'>Your ultimate staycations awaits in the South of Manila. Crimson Hotel Filinvest City Manila is offering specials rate for Local Residents using promo code <span className='uppercase font-bold'>"Local"</span></p>
                    <Link href='/'>
                        <button className='py-[14px] px-[28px] w-[50%] m-auto text-center text-[18px] rounded btn-primary block hover:bg-[#858484]'>Read More</button>
                    </Link>
                </div>
            </div>
            
            <div className='md:col-span-5 relative text-center'>
                <Image className='w-[100%] h-[100%] object-cover'
                src={servicesData.servicesImage2} 
                width={944} height={906} 
                alt="swimming pool" />
                <div className='w-[100%] btn-primary text-[var(--primary-color)] absolute bottom-0 right-0 left-0 py-[20px]'>
                    <h2 className='font-secondary font-black ls-2 mb-[20px] uppercase'>Your Dream Vacation</h2>
                    <Link href='/'>
                        <button className='font-secondary font-light py-[14px] px-[28px] w-[20%] m-auto text-center text-[18px] border-white border-[1px] rounded btn-primary block hover:bg-white hover:text-[#449bb0]'>Read <span className='block'>More</span></button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
