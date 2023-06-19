import React from 'react'

import styles from "../styles/banner.module.css";

const Banner = () => {
  return (
    <section className='m-w-[100%] overflow-hidden relative'>
      <div className='h-[180px] xl:h-[82vh] relative'>
        <iframe  className='h-[100%] w-[100%] overflow-hidden absolute left-0 right-0 bottom-0' autoPlay="true" controls="0" scrolling="no" showinfo="0" src="https://sunishsadasivan.hippovideo.io/video/embed/LDkuGaDtcqQja1LrnZ12p9bpm1rlm_xzovd-KwfzXD0?org_tok=EkftNVDFrILIkMQrfCy1vQ?autoplay=true&amp;loop=true&amp;controls=false"></iframe>
        <h1 className='uppercase text-center absolute bottom-0 left-0 right-0 text-[var(--primary-color)] font-secondary font-light tracking-[1px] text-[40px] px-[20px] pb-[10px] py-[20px] bg-gradient-to-b from-black/0 via-black/50 to-black/60'>Alabang. in a Heartbeat</h1>
      </div>
    </section>
  )
}

export default Banner