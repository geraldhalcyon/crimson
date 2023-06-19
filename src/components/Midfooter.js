import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import footerData from '@/static-data/footer';

import styles from "../styles/footer.module.css";

const Midfooter = () => {
  return (
    <>
    <div className='font-secondary font-light bg-top-footer px-[20px] py-[40px]'>
          <div className='lg:container'>
              <div className='grid grid-cols-1 md:grid-cols-10'>
                  <div className='md:col-span-3 text-center'>
                    <h1 className='uppercase tracking-[2px] text-[25px]'>{footerData.footerForm.title}</h1>
                    <p className='text-[16px] leading-[27px] w-[100%] md:w-[80%] m-auto py-[25px]'>{footerData.footerForm.description}</p>
                    <form action="#" method="post">
                        <input className='py-[10px] px-[12px] w-[195px] h-[47px] text-[16px]'
                            type="email"
                            placeholder='Enter your email here'
                            required />
                        <button type="submit" className='btn-primary w-[125px] h-[47px] uppercase px-[20px] py-[15px] text-[13px] font-primary text-[var(--primary-color)] hover:bg-[var(--fourth-color)]'>Subscribe</button>
                    </form>
                  </div>
                  <div className='md:col-span-7 mt-[20px] md:mt-[0px]'>
                      <h4 className='uppercase text-[25px] text-center tracking-[2px] mb-[30px]'>{footerData.awardsTitle}</h4>
                      <div className={`flex justify-center items-center flex-wrap w-[100%] md:w-[95%] m-auto  ${styles.awardsList}`}>
                          {footerData.awards.map((awardsImage, index) => (
                              <div key={index} className={`${index === 3 ? 'order-last' : 'false'} mx-[3px] my-[10px] md:my-[3px] w-[37%] md:w-auto ${styles.awardsRes}`}>
                                  <Link href={awardsImage.image.path} target='_blank'>
                                      <Image className='max-h-[150px] max-w-[150px] m-auto md:m-none'
                                          src={awardsImage.image.src}
                                          width={awardsImage.image.width} height={awardsImage.image.height}
                                          alt={awardsImage.image.alt} />
                                  </Link>
                              </div>
                          ))}
                          <iframe className={styles.awardsIframe} allowtransparency="true" height={footerData.awardsIframe.height} scrolling="no" src={footerData.awardsIframe.src} width={footerData.awardsIframe.width}></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className='font-secondary font-light bg-btm-footer px-[20px] py-[40px] text-[var(--primary-color)] text-center'>
              <div className='lg:container'>
                  <h1 className='uppercase text-[25px] mb-[30px] tracking-[2px]'>{footerData.locationsTitle}</h1>
                  <ul className='flex justify-center flex-wrap mb-[40px]'>
                      {footerData.locationLinks.map((locationLinks, index) => (
                          <li key={index} className={`uppercase text-[16px] w-[50%] md:w-auto px-[10px] pb-[20px] md:pb-[0px] relative ${styles.footerList}`}>
                              <Link target='_blank' href={locationLinks.path} className='hover:text-[#999]'>{locationLinks.title}</Link>
                          </li>
                      ))}
                  </ul>
                  <h1 className='uppercase text-[25px] mb-[30px] tracking-[2px]'>{footerData.quicklinksTitle}</h1>
                  <ul className='flex justify-center flex-wrap'>
                      {footerData.quickLinks.map((quickLinks, index) => (
                          <li key={index} className={`uppercase text-[16px] w-[50%] md:w-auto px-[10px] pb-[20px] md:pb-[0px] relative ${styles.footerList}`}>
                              <Link target={quickLinks.target} href={quickLinks.path} className='hover:text-[#999]'>{quickLinks.title}</Link>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
          </>
  )
}

export default Midfooter