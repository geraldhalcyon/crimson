"use client"

import {useState} from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { TfiLocationPin, TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import footerData from '@/static-data/footer'
import Modal from '@/components/Modal';

const Topfooter = () => {
  const [showModal, setShowModal] = useState(false);
  return (
        <div className='font-secondary font-light pt-[60px] px-[20px] lg:px-[0px] lg:container'>
            <h1 className='uppercase tracking-[2px] mb-[30px] text-[25px] text-center'>{footerData.footerDetails.title}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-10 flex items-center flex-wrap pb-[60px]'>
                <div className='lg:col-span-2 text-center'>
                    <span className='mb-[10px] block'>{footerData.footerDetails.contactDetails.app.title}</span>
                    <div className='flex mb-[20px] lg:mb-[0px] lg:block'>
                        <Link href='https://bakerj.onelink.me/sF7X' target='_blank' className='w-[100px] h-[100px] block mb-[10px] m-auto'>
                            <Image className='w-[100%] h-[100%]' src={footerData.footerDetails.contactDetails.app.image1.path} width={footerData.footerDetails.contactDetails.app.image1.width} height={footerData.footerDetails.contactDetails.app.image1.height} alt={footerData.footerDetails.contactDetails.app.image1.alt}/>
                        </Link>
                        <Image className='w-[100px] h-[100px] m-auto' src={footerData.footerDetails.contactDetails.app.image2.path} width={footerData.footerDetails.contactDetails.app.image2.width} height={footerData.footerDetails.contactDetails.app.image2.height} alt={footerData.footerDetails.contactDetails.app.image2.alt} />
                    </div>
                </div>
                
                <div className='lg:col-span-4 text-center lg:text-left'>
                    <div className='lg:flex flex-wrap items-center justify-center text-center block lg:justify-normal mb-[30px]'>
                        <TfiLocationPin className='w-[35px] max-w-[100%] h-[35px] m-auto lg:m-[0px]'/>
                        <span className='text-[20px] lg:ml-[10px] ml-[0px]'>{footerData.footerDetails.contactDetails.description1.address}</span>
                    </div>
                    <div className='flex items-center flex-wrap relative mb-[20px] lg:mb-[0px]'>
                        <TfiEmail className='w-[13px] max-w-[100%] m-auto lg:m-[0] h-[35px] text-center block static lg:absolute left-0'/>
                        <Link href={footerData.footerDetails.contactDetails.description1.path} className='text-[20px] hover:text-[var(--secondary-color)] lg:ml-[20px]'>
                            <span>{footerData.footerDetails.contactDetails.description1.link}</span>
                        </Link>
                    </div>
                </div>
                <div className='lg:col-span-4 text-center lg:text-left'>
                    <div className='flex items-center flex-wrap relative'>
                        <BsTelephone className='w-[13px] max-w-[100%] m-auto lg:m-[0] h-[35px] text-center block static lg:absolute left-0'/>
                        <Link href={footerData.footerDetails.contactDetails.description2.path} className='text-[20px] hover:text-[var(--secondary-color)] lg:ml-[20px]'>
                            <span>{footerData.footerDetails.contactDetails.description2.link}</span>
                        </Link>
                    </div>
                    <ul className='social-icons flex items-center justify-center lg:justify-normal mt-[20px]'>
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

            <div className='flex items-center flex-wrap justify-center pb-[30px] mb-[30px] border-b-solid border-transparent border-[1px] border-b-[#bfbfbf]'>
            <h1 className='uppercase tracking-[2px] uppercase text-[25px] md:mr-[30px] mr-[0px]'>{footerData.belowContactdetails.description1.title}</h1>
                <div className='text-[var(--primary-color)] mt-[20px] md:mt-[0] w-[100%] md:w-auto flex flex-wrap justify-center'>
                    <button className='py-[15px] px-[20px] btn-secondary text-[13px] font-primary md:mr-[20px] mx-[10px] my-[10px] md:my-[0px] hover:bg-[var(--fourth-color)] uppercase' onClick={() => setShowModal(true)}>{footerData.belowContactdetails.description1.btn1}</button>
                    <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
                    <Link href={footerData.belowContactdetails.description1.path2} className='py-[15px] px-[20px] btn-primary uppercase text-[13px] font-primary  md:mr-[20px] mx-[10px] my-[10px] md:my-[0px] hover:bg-[var(--fourth-color)]'>
                        <button className='uppercase'>{footerData.belowContactdetails.description1.btn2}</button>
                    </Link>
                </div>
            </div>
            <div className='text-center pb-[30px]'>
                <div className='tracking-[2px] text-[25px] mr-[0px] md:mr-[10px] inline-block'>{footerData.belowContactdetails.description2.title}</div>
                    <Link href={footerData.belowContactdetails.description2.path} className='font-primary text-[16px] text-[var(--secondary-color)] block inline-block'>
                        <button className='uppercase'>{footerData.belowContactdetails.description2.link}</button>
                    </Link>
            </div>
        </div>
  )
}
export default Topfooter
