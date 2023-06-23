import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image'
import aboutData from '@/non-home-static-data/about'
import crumbs from '@/non-home-static-data/breadcrumbData';
import Link from 'next/link'


const about = () => {
  const pageTitle = crumbs.about.label;


  return (
        <Layout title={pageTitle}>
          <div className='relative overflow-hidden font-secondary font-light'>
            <Image className='object-cover object-top w-[100%] h-[300px] md:h-[805px]'
             src={aboutData.image}
             width={1200}
             height={720}
             property='true'
            loading='eager'
             alt='Manila About Us Page Slider'
            />
            <h1 className='w-[100%] absolute bottom-0 uppercase text-[var(--sixth-color)] md:text-[var(--primary-color)] text-center md:text-right text-[40px] leading-[100%] py-[20px] px-[20px] md:pr-[70px] bg-gradient-to-b from-white/100 via-white/100 to-white/100 md:bg-gradient-to-b md:from-black/0 md:via-black/50 md:to-black/60'>{pageTitle}</h1>
          </div>
          <div className='bg-[#ebf9fc]'>
            <div className='lg:container py-[40px] md:px-[30px] px-[20px]'>
              <Breadcrumb crumbs={[crumbs.home, crumbs.about]} />
              <h1 className='uppercase leading-[100%] font-secondary font-black text-[40px] mt-[25px] mb-[30px]'>{aboutData.title}</h1>
              <p className='font-primary leading-[22px] lg:leading-[27px]'>{aboutData.descriptionTop}</p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-10 md:gap-8 pt-[30px]'>
            <div className='md:col-span-5 pb-[20px] md:pb-[0]'>
              <Image className='object-cover object-top w-[100%] h-[100%]'
              src={aboutData.image1}
              layout='responsive'
              width={800}
              height={533}
              alt='a man and woman in the hallway'
              />
            </div>
            <div className='md:col-span-5'>
              <Image className='object-cover object-top w-[100%] h-[100%]'
                src={aboutData.image2}
                layout='responsive'
                width={800}
                height={533}
                alt='bedroom'
                />
            </div>
          </div>
          <div className='lg:container py-[30px]'>
            <p className='leading-[22px] lg:leading-[27px] px-[20px] md:px-[0] pb-[30px]'>{aboutData.descriptionMid}</p>
            <div className='flex flex-wrap md:flex-nowrap justify-between'>
              <Image className='object-cover object-top w-[100%] h-[100%] px-[15px] pb-[20px] md:pb-[0px]'
              src={aboutData.image3}
              layout='responsive'
              width={800}
              height={533}
              alt='a flower and painting in the hallway'
              />
              <Image className='object-cover object-top w-[100%] h-[100%] px-[15px]'
              src={aboutData.image4}
              layout='responsive'
              width={800}
              height={533}
              alt='occasion'
              />
            </div>
          </div>
          <div className='bg-[#ebf9fc] py-[40px] px-[20px]'>
            <div className='lg:container'>
              <p className='leading-[22px] leading-[27px]'>{aboutData.descriptionBtm}</p>
            </div>
          </div>
            <div className='py-[30px] max-w-[1200px] w-[100%] m-auto flex border-b-[1px] border-solid border-[#bfbfbf]'>
              <Link href='https://www.simplebooking.it/ibe/search?hid=3066&lang=EN&tt_claim_key=claim%3A6f430a1fdeb02310959f497578e3ff0297cd60e40763eb87d5718bad9f4e5929%3Aundefined%3A1687488398971' target='_blank' className='py-[15px] px-[20px] bg-[var(--secondary-color)] hover:bg-[var(--third-color)] text-[13px] text-[var(--primary-color)] m-auto'> 
                <button className='uppercase'>{aboutData.btn}</button>
              </Link>
            </div>
        </Layout>
      
  )
}

export default about 
 