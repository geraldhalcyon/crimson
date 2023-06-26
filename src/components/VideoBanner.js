import React, { useState,useEffect } from 'react';

import styles from "../styles/banner.module.css";

export const VideoBanner = ({block}) => {
 
  const [ready, setReady] = useState(false)
  useEffect(() => { setTimeout(() => { setReady(true) }, 5000) }, [])

  // style={{ backgroundImage: `url(${block.image.path})` }}
  
  return (
   
        <section className='mt-[87px] min-h-[200px] m-w-[100%] relative'>
            <div className={`overflow-hidden bg-[#f5f5f5] relative ${styles.bannerContainer}`} >
            <iframe loading="lazy"
            className={`overflow-hidden md:absolute left-0 ${styles.bannerVideo}`}
                allow="autoplay"
                scrolling="no"
                title='banner video'
                src={ready ? block.video : "about:blank"}
                // src={block.video}
            />
            <h1 className='uppercase text-center static md:absolute bottom-0 left-0 right-0 mt-[30px] md:mt-[0px] text-[var(--sixth-color)] md:text-[var(--primary-color)] font-secondary font-light tracking-[1px] text-[20px] md:text-[40px] px-[20px] md:pb-[10px] py-[20px] md:bg-gradient-to-b md:from-black/0 md:via-black/50 md:to-black/60'>{block.title}</h1>
            </div>
        </section>

  )
}
