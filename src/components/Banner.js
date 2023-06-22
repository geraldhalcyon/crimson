import React from 'react'

import styles from "../styles/banner.module.css";

const Banner = () => {
  return (
    <section className='mt-[87px] md:h-[auto] m-w-[100%] relative'>
      <div className={`overflow-hidden bg-[#f5f5f5] relative ${styles.bannerContainer}`}>
        <iframe className={`overflow-hidden md:absolute left-0 ${styles.bannerVideo}`} autoPlay={true} controls="0" scrolling="no" showinfo="0" title='banner video' src="https://sunishsadasivan.hippovideo.io/video/embed/LDkuGaDtcqQja1LrnZ12p9bpm1rlm_xzovd-KwfzXD0?org_tok=EkftNVDFrILIkMQrfCy1vQ?autoplay=true&amp;loop=true&amp;controls=false"></iframe>
        <h1 className='uppercase text-center static md:absolute bottom-0 left-0 right-0 mt-[30px] md:mt-[0px] text-[#a6192e] md:text-[var(--primary-color)] font-secondary font-light tracking-[1px] text-[20px] md:text-[40px] px-[20px] md:pb-[10px] py-[20px] md:bg-gradient-to-b md:from-black/0 md:via-black/50 md:to-black/60'>Alabang. in a Heartbeat</h1>
      </div>
    </section>
  )
}

export default Banner