'use client'

import { useState } from 'react';
import reviewsData from '@/static-data/reviewsmodal'

const Reviewsmodal = ({isVisible, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleCategory = (category) => {
    setSelectedCategory(category);
  };

  if (!isVisible) return null;
  
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 z-[50] bg-[rgb(0,0,0)]/40 flex justify-center items-center overflow-auto font-third">
    <div className="mx-[15px] md:mx-[0] w-[450px] m-w-[100%] flex flex-col bg-white">
      <div className="flex justify-center py-[7px] px-[7px] relative bg-[#003240]">
        <h1 className="text-center font-bold text-[18px] text-[var(--primary-color)]">
          Reviews Summary
        </h1>
        <button
          className="absolute text-[23px] right-[10px] top-[0] text-white hover:text-opacity-50"
          onClick={onClose}
        >
          &#10005;
        </button>
      </div>
      <div className="bg-[#fff] min-h-[479px] py-[20px] rounded overflow-auto px-[20px] relative">
        {!['Family', 'Business', 'Friends', 'Couple'].includes(selectedCategory) && (
          <>
          <h2 className='text-left text-[#000] mb-[10px] text-[14px] font-bold'>Reviews by sources</h2><div className='py-[15px] px-[10px]'>
            <div className='flex justify-between border-b-[1px] border-solid border-[#bababa] pb-[8px] leading-[12px]'>
                <div className='text-[#737373] text-[13px]'>TripAdvisor</div>
                <div className='text-right'>
                    <div className='text-[#737373] text-[14px]'>4.5/5</div>
                    <div className='text-[#bababa] text-[12px]'>2,818 Reviews</div>
                </div>
            </div>
            <div className='text-left flex justify-between border-b-[1px] border-solid border-[#bababa] py-[8px] leading-[12px]'>
                <div className='text-[#737373] text-[13px]'>Booking.com</div>
                <div className='text-right'>
                    <div className='text-[#737373] text-[14px]'>8.2/10</div>
                    <div className='text-[#bababa] text-[12px]'>903 Reviews</div>
                </div>
            </div>
            <div className='flex justify-between border-b-[1px] border-solid border-[#bababa] py-[8px] leading-[12px]'>
                <div className='text-[#737373] text-[13px]'>Hotels.com</div>
                <div className='text-right'>
                    <div className='text-[#737373] text-[14px]'>8.2/10</div>
                    <div className='text-[#bababa] text-[12px]'>1,053 Reviews</div>
                </div>
            </div>
            <div className='flex justify-between py-[8px] leading-[12px]'>
                <div className='text-[#737373] text-[13px]'>Expedia</div>
                <div className='text-right'>
                    <div className='text-[#737373] text-[14px]'>4.1/5</div>
                    <div className='text-[#bababa] text-[12px]'>997 Reviews</div>
                </div>
            </div>
        </div>
        <h2 className='text-left text-[#000] mb-[10px] text-[14px] font-bold'>What kind of trip are you planning?</h2>
        <div
            className={`flex justify-between items-center py-[5px] px-[12px] cursor-pointer rounded border-[1px] border-b-0 border-[#bababa] border-solid ${
              selectedCategory === 'Family'
            }`}
            onClick={() => toggleCategory('Family')}
          >
            <div className="text-[13px] text-[#737373]">Family</div>
            <span className="text-[23px]">&#8250;</span>
          </div>
          <div
            className={`flex justify-between items-center py-[5px] px-[12px] cursor-pointer rounded border-[1px] border-b-0 border-[#bababa] border-solid ${
              selectedCategory === 'Business'
            }`}
            onClick={() => toggleCategory('Business')}
          >
            <div className="text-[13px] text-[#737373]">Business</div>
            <span className="text-[23px]">&#8250;</span>
          </div>
          <div
            className={`flex justify-between items-center py-[5px] px-[12px] cursor-pointer rounded border-[1px] border-b-0 border-[#bababa] border-solid ${
              selectedCategory === 'Friends'
            }`}
            onClick={() => toggleCategory('Friends')}
          >
            <div className="text-[13px] text-[#737373]">Friends</div>
            <span className="text-[23px]">&#8250;</span>
          </div>
          <div
            className={`flex justify-between items-center py-[5px] px-[12px] cursor-pointer rounded border-[1px] border-[#bababa] border-solid ${
              selectedCategory === 'Couple'
            }`}
            onClick={() => toggleCategory('Couple')}
          >
            <div className="text-[13px] text-[#737373]">Couple</div>
            <span className="text-[23px]">&#8250;</span>
          </div>
        </>
    )}
      {selectedCategory &&
        reviewsData.categories
          .filter((category) => category.name === selectedCategory)
          .map((category, index) => (
            <div key={category.name} className='text-left px-[15px] py-[15px] border-b-[1px] border-[#cecece] border-solid'>
              <h3 className='text-[14px] text-[#000] font-bold mb-[10px]'>{category.title}</h3>
              <p className='text-[#8a8a8a] text-[14px] mb-[20px] leading-[17px]'>{category.description}</p>
              <p className='text-[12px] text-[#303030]'>{category.belowDescription}</p>
              <div className='flex justify-between items-center absolute left-0 right-0 bottom-0 py-[20px] px-[20px] border-t-[2px] border-[#dedede] border-solid'>
                <div className="text-[#003240] text-[16px] relative pl-[20px] cursor-pointer" onClick={() => toggleCategory('')}><span className='absolute left-0 top-[-14px] text-[30px]'>&#8249;</span>Other categories</div>
                <div className='bg-[#e5e5e5] text-[#8d8d8d] text-[16px] py-[2px] px-[2px]'>English</div>
              </div>
            </div>
          ))
      }
      </div>
    </div>
  </div>
  )
}

export default Reviewsmodal