'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import servicesData from '@/static-data/services'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade,Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

import styles from "../styles/services.module.css";

const Services = () => {
  
  return (
    <section className={styles.blockServices}>
        <div className='grid grid-cols-1 lg:grid-cols-10 gap-8 mb-[30px]'>
            <div className='lg:col-span-5 relative'>
  
            <Swiper
                    modules={[Navigation, EffectFade]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className={styles.mySwiper}
                    effect="fade"
                >
            {servicesData.slider.map((slide, index) => (
                
                <SwiperSlide key={index}>
                   <div className='h-[45%] w-[100%] absolute left-0 right-0 bottom-0 md:bg-gradient-to-b md:from-black/0 md:via-black/50 md:to-black/60'></div>
                        <Image className='w-[100%] h-[100%] object-cover'
                        src={slide.image.path} 
                        width={slide.image.width} height={slide.image.height} 
                        alt={slide.image.alt}/>
                    <div className={`text-center lg:text-left text-[var(--primary-color)] bg-black md:bg-inherit relative md:absolute md:bottom-[25px] left-[0px] bottom-0 lg:left-[25px] w-[100%] md:min-h-[auto] lg:w-[95%] lg:pr-[10px] px-[20px] py-[20px] lg:px-[0px] ${styles.imgFixheight}`}>
                        <h2 className='text-[23px] uppercase font-secondary font-black tracking-[2px]'>{slide.title}</h2>
                        <p className='text-[16px] leading-[27px] py-[16px]'>{slide.description} <span className='uppercase font-bold'>{slide.strongStyle}</span></p>
                        <Link href='/' className='py-[14px] px-[28px] w-[50%] block m-auto text-center text-[18px] rounded btn-primary hover:bg-[var(--fourth-color)]'>
                            <button className='uppercase'>{slide.link}</button>
                        </Link>
                    </div> 
                </SwiperSlide>
            ))}   
            </Swiper>
            

            </div>
            
            <div className='lg:col-span-5 relative text-center'>
                <Image className='w-[100%] h-[100%] object-cover'
                src={servicesData.servicesDetails1.image.path} width={servicesData.servicesDetails1.image.width} height={servicesData.servicesDetails1.image.height} 
                alt={servicesData.servicesDetails1.image.alt} />
                <div className='w-[100%] btn-primary text-[var(--primary-color)] absolute bottom-0 right-0 left-0 py-[20px]'>
                    <h2 className='font-secondary font-black tracking-[2px] mb-[20px] uppercase'>{servicesData.servicesDetails1.title}</h2>
                    <Link href={servicesData.servicesDetails1.path} className='font-secondary font-light py-[14px] px-[40px] w-[185px] m-auto text-center text-[18px] border-white border-[1px] rounded btn-primary block hover:bg-white hover:text-[#449bb0]'>
                        <button className='uppercase'>{servicesData.servicesDetails1.link}</button>
                    </Link>
                </div>
            </div>

        </div>
        <div className={styles.servicesContainer}>
        {servicesData.servicesDetails2.map((servicesDetails, index) => (
            <div className={`grid grid-cols-1 lg:grid-cols-10 mb-[30px] ${styles.servicesList}`} key={index}> 
                <div className='lg:col-span-10 relative'>
                    <Image
                    layout="responsive"
                    objectFit='cover'
                    src={servicesDetails.image.path} 
                    width={servicesDetails.image.width} 
                    height={servicesDetails.image.height} 
                    alt={servicesDetails.image.alt}/>
                    <div className='static md:absolute bottom-0 left-0 text-[var(--primary-color)] text-center lg:text-left block lg:flex justify-between w-[100%] py-[40px] px-[20px] bg-gradient-to-b from-black/100 via-black/100 to-black/100 md:bg-gradient-to-b md:from-black/0 md:via-black/50 md:to-black/60'>
                        <h1 className='uppercase tracking-[2px] font-secondary font-black drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] text-[23px] lg:mr-[20px] mr-[0px]]'>{servicesDetails.title}</h1>
                        <Link href={servicesDetails.path} target='_blank' className=' btn-primary py-[15px] px-[20px] hover:bg-[var(--fourth-color)] text-[13px] mt-[20px] lg:mt-[0px] block lg:flex lg:w-auto w-[200px] m-auto lg:m-[0]'>
                            <button className='uppercase'>{servicesDetails.link}</button>
                        </Link>
                    </div>
                </div>
            </div>
         ))}
        </div>
    </section>
  )
}

export default Services
