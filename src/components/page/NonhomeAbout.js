import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image'
// import aboutData from '@/static-data/about'
import crumbs from '@/static-data/breadcrumbData';
import Link from 'next/link'


const NonhomeAbout = () => {
  const pageTitle = crumbs.about.label;


  return (
        <Layout title={pageTitle}>
          <div className='grid grid-cols-1 lg:grid-cols-10'> 
            <div className='lg:col-span-10'>
              <div className='relative overflow-hidden mt-[105px] md:mt-[0] md:h-[805px] font-secondary font-light'>
                <Image className='object-cover object-top w-[100%] h-[100%]'
                src={aboutData.aboutDetails.image.path}
                layout='responsive'
                width={aboutData.aboutDetails.image.width}
                height={aboutData.aboutDetails.image.height}
                property='true'
                loading='eager'
                alt={aboutData.aboutDetails.image.alt}
                />
                <h1 className='w-[100%] static md:absolute bottom-0 uppercase text-[var(--sixth-color)] md:text-[var(--primary-color)] text-center md:text-right text-[40px] leading-[100%] py-[20px] px-[20px] md:pr-[70px] bg-gradient-to-b from-white/100 via-white/100 to-white/100 md:bg-gradient-to-b md:from-black/0 md:via-black/50 md:to-black/60'>{pageTitle}</h1>
              </div>
            </div>
          </div>
          <div className='bg-[#ebf9fc]'>
            <div className='lg:container py-[40px] md:px-[30px] px-[20px]'>
              <Breadcrumb crumbs={[crumbs.home, crumbs.about]} />
              <h1 className='uppercase leading-[100%] font-secondary font-black text-[40px] mt-[25px] mb-[30px]'>{aboutData.aboutDetails.title}</h1>
              <div className='font-primary leading-[22px] lg:leading-[27px]' contentEditable='true' dangerouslySetInnerHTML={{ __html: aboutData.aboutDetails.descriptionTop}}></div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-10 md:gap-8 pt-[30px]'>
            <div className='md:col-span-5 pb-[20px] md:pb-[0]'>
              <Image className='object-cover object-top w-[100%] h-[100%]'
              src={aboutData.aboutDetails.image1.path}
              layout='responsive'
              width={aboutData.aboutDetails.image1.width}
              height={aboutData.aboutDetails.image1.height}
              alt={aboutData.aboutDetails.image1.alt}
              />
            </div>
            <div className='md:col-span-5'>
              <Image className='object-cover object-top w-[100%] h-[100%]'
                src={aboutData.aboutDetails.image2.path}
                layout='responsive'
                width={aboutData.aboutDetails.image2.width}
                height={aboutData.aboutDetails.image2.height}
                alt={aboutData.aboutDetails.image2.alt}
                />
            </div>
          </div>
          <div className='lg:container py-[30px]'>
            <div className='leading-[22px] lg:leading-[27px] px-[20px] md:px-[0] pb-[30px]' contentEditable='true' dangerouslySetInnerHTML={{ __html: aboutData.aboutDetails.descriptionMid}}></div>
            <div className='flex flex-wrap md:flex-nowrap justify-between'>
              <Image className='object-cover object-top w-[100%] h-[100%] px-[15px] pb-[20px] md:pb-[0px]'
              src={aboutData.aboutDetails.image3.path}
              layout='responsive'
              width={aboutData.aboutDetails.image3.width}
              height={aboutData.aboutDetails.image3.height}
              alt={aboutData.aboutDetails.image3.alt}
              />
              <Image className='object-cover object-top w-[100%] h-[100%] px-[15px]'
              src={aboutData.aboutDetails.image4.path}
              layout='responsive'
              width={aboutData.aboutDetails.image4.width}
              height={aboutData.aboutDetails.image4.height}
              alt={aboutData.aboutDetails.image4.alt}
              />
            </div>
          </div>
          <div className='bg-[#ebf9fc] py-[40px] px-[20px]'>
            <div className='lg:container'>
              <div className='leading-[22px] leading-[27px]' contentEditable='true' dangerouslySetInnerHTML={{ __html: aboutData.aboutDetails.descriptionBtm}}></div>
            </div>
          </div>
            <div className='py-[30px] max-w-[1200px] w-[100%] m-auto flex border-b-[1px] border-solid border-[#bfbfbf]'>
              <Link href='https://www.simplebooking.it/ibe/search?hid=3066&lang=EN&tt_claim_key=claim%3A6f430a1fdeb02310959f497578e3ff0297cd60e40763eb87d5718bad9f4e5929%3Aundefined%3A1687488398971' target='_blank' className='py-[15px] px-[20px] bg-[var(--secondary-color)] hover:bg-[var(--third-color)] text-[13px] text-[var(--primary-color)] m-auto'> 
                <button className='uppercase'>{aboutData.aboutDetails.btn}</button>
              </Link>
            </div>
        </Layout>
      
  )
}

export default NonhomeAbout 
 