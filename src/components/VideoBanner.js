import React, { useState, useEffect } from 'react';
import styles from "../styles/banner.module.css";

export const VideoBanner = ({ block }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 8500);
  }, []);

  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const delay = 8500; 

    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className='mt-[87px] min-h-[200px] m-w-[100%] relative'>
      <div
        className={`overflow-hidden bg-[#f5f5f5] relative ${styles.bannerContainer}`}
        style={showVideo ? {backgroundImage: 'none'} :{ backgroundImage: `url(${block.image.path})` }}
      >
        {ready && (
          <>
            {showVideo ? (
              <iframe
                className={`overflow-hidden md:absolute left-0 ${styles.bannerVideo}`}
                loading="lazy"
                allow="autoplay"
                title='banner video'
                src={block.video}
              />
            ) : null}
            <h1 className='uppercase text-center static md:absolute bottom-0 left-0 right-0 mt-[30px] md:mt-[0px] text-[var(--sixth-color)] md:text-[var(--primary-color)] font-secondary font-light tracking-[1px] text-[20px] md:text-[40px] px-[20px] md:pb-[10px] py-[20px] md:bg-gradient-to-b md:from-black/0 md:via-black/50 md:to-black/60 index-[999]'>{block.title}</h1>
          </>
        )}
      </div>
    </section>
  );
};