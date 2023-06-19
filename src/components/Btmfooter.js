import React from 'react'
import footerData from '@/static-data/footer'

const Btmfooter = () => {
  return (
  <div className='text-center py-[30px] font-secondary font-light'>
    <p className='mb-[20px]'>{footerData.copyright.title}</p>
    <p className='text-[14px] md:text-[16px]'><span className='uppercase'>{footerData.copyright.webtitle}</span> {footerData.copyright.compname}</p>
  </div>
  )
}
export default Btmfooter