import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import footerData from '@/static-data/footer'
import { TfiLocationPin, TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className='font-secondary font-light px-[20px] h-[100vh] pt-[60px]'>
      <section className='block-contact-details'>
        <div className='lg:container'>
          <div>
            <h1 className='uppercase tracking-[2px] mb-[30px] text-[25px] text-center'>{footerData.footerDetails.title}</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-10 flex items-center flex-wrap pb-[60px]'>
            <div className='md:col-span-2 text-center'>
                <span className='mb-[10px] block'>{footerData.footerDetails.contactDetails.app.title}</span>
                <Link href='https://bakerj.onelink.me/sF7X' target='_blank' className='w-[100px] h-[100px] block mb-[10px] m-auto'>
                  <Image className='w-[100%] h-[100%]' src={footerData.footerDetails.contactDetails.app.image1.path} width={footerData.footerDetails.contactDetails.app.image1.width} height={footerData.footerDetails.contactDetails.app.image1.height} alt={footerData.footerDetails.contactDetails.app.image1.alt}/>
                </Link>
                <Image className='w-[100px] h-[100px] m-auto' src={footerData.footerDetails.contactDetails.app.image2.path} width={footerData.footerDetails.contactDetails.app.image2.width} height={footerData.footerDetails.contactDetails.app.image2.height} alt={footerData.footerDetails.contactDetails.app.image2.alt} />
            </div>
            <div className='md:col-span-4'>
                <div className='flex items-center mb-[30px]'>
                  <TfiLocationPin className='w-[35px] max-w-[100%] h-[35px]'/>
                  <span className='text-[20px] ml-[10px]'>{footerData.footerDetails.contactDetails.details1.address}</span>
                </div>
                <div className='flex items-center relative'>
                  <TfiEmail className='w-[13px] max-w-[100%] h-[35px] absolute left-0'/>
                   <Link href={footerData.footerDetails.contactDetails.details1.path} className='text-[20px] hover:text-[var(--secondary-color)] ml-[20px]'>
                      <span>{footerData.footerDetails.contactDetails.details1.link}</span>
                   </Link>
                </div>

            </div>
            <div className='md:col-span-4'>
                <div className='flex items-center relative'>
                  <BsTelephone className='w-[13px] max-w-[100%] h-[35px] absolute left-0'/>
                   <Link href={footerData.footerDetails.contactDetails.details2.path} className='text-[20px] hover:text-[var(--secondary-color)] ml-[20px]'>
                      <span>{footerData.footerDetails.contactDetails.details2.link}</span>
                   </Link>
                </div>
                <ul className='social-icons flex items-center mt-[20px]'>
                  <li className='mr-[10px]'>
                    <Link href='https://www.facebook.com/CrimsonFilinvestCity' aria-label="facebook" rel='noopener' target='_blank' className='block w-[35px] h-[35px] border-solid border-[1px] border-[#333] hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)] block rounded-[50%] flex items-center'>
                      <GrFacebookOption className='w-[15px] h-[15px] text-center m-auto'/>
                    </Link>
                  </li>
                  <li className='mr-[10px]'>
                    <Link href='https://twitter.com/Crimson_Alabang' rel='noopener' aria-label="twitter"  target='_blank' className='block w-[35px] h-[35px] border-solid border-[1px] border-[#333] hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)] block rounded-[50%] flex items-center'>
                      <GrTwitter className='w-[15px] h-[15px] text-center m-auto' />
                    </Link>
                  </li>
                  <li className='mr-[10px]'>
                    <Link href='https://www.instagram.com/crimsonfilinvestcity/' aria-label="instagram"  rel='noopener' target='_blank' className='block w-[35px] h-[35px] border-solid border-[1px] border-[#333] hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)] block rounded-[50%] flex items-center'>
                      <GrInstagram className='w-[15px] h-[15px] text-center m-auto' />
                    </Link>
                  </li>
                </ul>
            </div>
          </div>
          <div className='flex items-center justify-center pb-[30px] mb-[30px] border-b-solid border-transparent border-[1px] border-b-[#bfbfbf]'>
            <h1 className='uppercase tracking-[2px] uppercase text-[25px] mr-[30px]'>Get in Touch</h1>
            <div className='text-[var(--primary-color)]'>
              <Link href='/'>
                <button className='py-[15px] px-[20px] btn-secondary uppercase text-[13px] font-primary mr-[20px] hover:bg-[var(--fourth-color)]'>Contact Form</button>
              </Link>
              <Link href='/'>
              <button className='py-[15px] px-[20px] btn-primary uppercase text-[13px] font-primary hover:bg-[var(--fourth-color)]'>Book Now</button>
              </Link>
            </div>
            </div>
           <div className='flex justify-center items-center'>
              <div className='tracking-[2px] text-[25px] mr-[10px]'>Our Commitment to your well being.</div>
              <Link href='/' className='uppercase font-primary text-[16px] text-[var(--secondary-color)] block'>
                Read More 
              </Link>
           </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
