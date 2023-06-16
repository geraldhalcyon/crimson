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


// import required modules
const Services = () => {
  return (
    <section className={styles.blockServices}>
        <div className='grid grid-cols-1 md:grid-cols-10 gap-8 mb-[30px]'>
            <div className='md:col-span-5 relative'>
            <Swiper
                    navigation={true}
                    modules={[Navigation, EffectFade]}
                    pagination={{ clickable: true }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className={styles.mySwiper}
                    effect="fade"
                >
            {servicesData.slider.map((slide) => (
                
                <SwiperSlide>
                   <div className='bg-overlay'></div>
                        <Image className='w-[100%] h-[100%] object-cover'
                        src={slide.image.path} 
                        width={slide.image.width} height={slide.image.height} 
                        alt={slide.image.alt} />
                    <div className='text-[var(--primary-color)] absolute bottom-[25px] left-[25px] w-[100%] md:w-[95%]'>
                        <h2 className='text-[23px] uppercase font-secondary font-black'>{slide.title}</h2>
                        <p className='text-[16px] leading-[27px] py-[16px]'>{slide.description}</p>
                        <Link href='/' className='py-[14px] px-[28px] w-[50%] block m-auto text-center text-[18px] rounded btn-primary hover:bg-[var(--fourth-color)]'>
                            <button className='uppercase'>{slide.link}</button>
                        </Link>
                    </div> 
                </SwiperSlide>
                
            ))}
            </Swiper>
            </div>
            
            <div className='md:col-span-5 relative text-center'>
                <Image className='w-[100%] h-[100%] object-cover'
                src={servicesData.servicesDetails2.image.path} width={servicesData.servicesDetails2.image.width} height={servicesData.servicesDetails2.image.height} 
                alt={servicesData.servicesDetails2.image.alt} />
                <div className='w-[100%] btn-primary text-[var(--primary-color)] absolute bottom-0 right-0 left-0 py-[20px]'>
                    <h2 className='font-secondary font-black tracking-[2px] mb-[20px] uppercase'>{servicesData.servicesDetails2.title}</h2>
                    <Link href='/' className='font-secondary font-light py-[14px] px-[40px] w-[20%] m-auto text-center text-[18px] border-white border-[1px] rounded btn-primary block hover:bg-white hover:text-[#449bb0]'>
                        <button className='uppercase'>{servicesData.servicesDetails2.link}</button>
                    </Link>
                </div>
            </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-10 mb-[30px]'>
            <div className='md:col-span-10 relative'>
                <Image className='w-[100%] h-[100%] object-cover'
                src={servicesData.servicesDetails3.image.path} width={servicesData.servicesDetails3.image.width} height={servicesData.servicesDetails3.image.height} 
                alt={servicesData.servicesDetails3.image.alt} />
                <div className='absolute bottom-0 left-0 text-[var(--primary-color)] flex justify-between w-[100%] py-[40px] px-[20px] bg-gradient-to-b from-black/0 via-black/50 to-black/60'>
                    <h1 className='uppercase tracking-[2px] font-secondary font-black drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] text-[23px]'>{servicesData.servicesDetails3.title}</h1>
                    <Link href='/' className=''>
                        <button className='uppercase btn-primary py-[15px] px-[20px] hover:bg-[var(--fourth-color)] text-[13px]'>{servicesData.servicesDetails3.link}</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-10 mb-[30px]'>
            <div className='md:col-span-10 relative'>
                <Image className='w-[100%] h-[100%] object-cover'
                src={servicesData.servicesDetails4.image.path} width={servicesData.servicesDetails4.image.width} height={servicesData.servicesDetails4.image.height} 
                alt={servicesData.servicesDetails4.image.alt} />
                <div className='absolute bottom-0 left-0 text-[var(--primary-color)] w-[100%] py-[40px] px-[20px] bg-gradient-to-b from-black/0 via-black/50 to-black/60'>
                    <h1 className='uppercase tracking-[2px] font-secondary font-black drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] text-[23px]'>{servicesData.servicesDetails4.title}</h1>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-10 mb-[30px]'>
            <div className='md:col-span-10 relative'>
                <Image className='w-[100%] h-[100%] object-cover'
                src={servicesData.servicesDetails5.image.path} width={servicesData.servicesDetails5.image.width} height={servicesData.servicesDetails5.image.height} 
                alt={servicesData.servicesDetails5.image.alt} />
                <div className='absolute bottom-0 left-0 text-[var(--primary-color)] flex justify-between w-[100%] py-[40px] px-[20px] bg-gradient-to-b from-black/0 via-black/50 to-black/60'>
                    <h1 className='uppercase tracking-[2px] font-secondary font-black drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] text-[23px]'>{servicesData.servicesDetails5.title}</h1>
                    <Link href='/' className=''>
                        <button className='uppercase btn-primary py-[15px] px-[20px] hover:bg-[var(--fourth-color)] text-[13px]'>{servicesData.servicesDetails5.link}</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
