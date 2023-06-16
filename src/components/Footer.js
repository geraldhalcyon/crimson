import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import footerData from '@/static-data/footer'
import { TfiLocationPin, TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.blockFooter}>
      <section className='font-secondary font-light pt-[60px] px-[20px] md:px-[0px] lg:container'>
          <h1 className='uppercase tracking-[2px] mb-[30px] text-[25px] text-center'>{footerData.footerDetails.title}</h1>
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
           <div className='text-center pb-[30px]'>
              <div className='tracking-[2px] text-[25px] mr-[10px] inline-block'>Our Commitment to your well being.</div>
              <Link href='/' className='uppercase font-primary text-[16px] text-[var(--secondary-color)] block inline-block'>
                Read More 
              </Link>
           </div>
      </section>
      <section className='font-secondary font-light bg-top-footer px-[20px] py-[40px]'>
        <div className='lg:container'>
          <div className='grid grid-cols-1 md:grid-cols-10'>
            <div className='md:col-span-3 text-center'>
              <div>
                <h1 className='uppercase tracking-[2px] text-[25px]'>News Letter Signup</h1>
                <p className='text-[16px] leading-[27px] w-[80%] m-auto py-[25px]'>Enter your email below and stay updated
                on Crimson Manila offers, events and more!</p>
              </div>
              <div>
              <form action="#" method="post">
                <input className='py-[10px] px-[12px] w-[195px] h-[47px] text-[16px]'
                  type="email"
                  placeholder='Enter your email here'
                />
                <button type="submit" className='btn-primary w-[125px] h-[47px] uppercase px-[20px] py-[15px] text-[13px] font-primary text-[var(--primary-color)]'>Subscribe</button>
              </form>
              </div>
            </div>
            <div className='md:col-span-7'>
              <h4 className='uppercase text-[25px] text-center tracking-[2px] mb-[30px]'>Awards</h4>
              <div className={`flex justify-between items-center flex-wrap w-[95%] m-auto  ${styles.awardsList}`}>
              {footerData.awards.map((awardsImage, index) => (
                    <div className={`${index === 3 ? 'order-last' : 'false'} `}>
                      <Link href={awardsImage.image.path} target='_blank'>
                            <Image className='max-h-[150px] max-w-[150px]'
                            src={awardsImage.image.src} 
                            width={awardsImage.image.width} height={awardsImage.image.height} 
                            alt={awardsImage.image.alt} />
                      </Link>
                    </div>
              ))}
              <div>
                <iframe allowtransparency="true" height={footerData.awardsIframe.height} scrolling="no" src={footerData.awardsIframe.src} width={footerData.awardsIframe.width}></iframe>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='font-secondary font-light bg-btm-footer px-[20px] py-[40px] text-[var(--primary-color)] text-center'>
        <div className='lg:container'>
          <h1 className='uppercase text-[25px] mb-[30px]'>Locations</h1>
          <ul className='flex justify-center'>
              {footerData.locationLinks.map((locationLinks, index) => (
                <li key={index} className={`uppercase text-[16px] mx-[10px] relative ${styles.locationList}`}>
                    <Link href={locationLinks.path}>{locationLinks.title}</Link>
                </li>
              )) }
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
