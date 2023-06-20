import React from 'react'

const Modal = ({ isVisible, onClose }) => {

if (!isVisible) return null;

  return (
    <div className='fixed z-[50] inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-auto'>
        <div className='w-[886px] m-w-[100%] flex flex-col bg-white'>
            <div className='flex justify-center py-[20px] px-[8px] bg-[#eef6f8] relative'>
                <h1 className='text-center uppercase text-[30px] font-secondary font-black'>Contact Us</h1>
                <button className='absolute text-[20px] right-[10px] top-[20px] text-black hover:text-opacity-50' onClick={() => onClose()}>&#10005;</button>
            </div>
            <div className='bg-[#e6f1f3] min-h-[442px] p-2 rounded'>
                <form action='#' method='post'>
                    <input type=''></input>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal