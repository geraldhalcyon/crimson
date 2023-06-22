"use client"

import Link from 'next/link'
import { useState } from 'react'
import {FaBars, FaTimesCircle} from "react-icons/fa"
import Image from 'next/image';
import headerData from '@/static-data/header';
import styles from '../styles/navbar.module.css';


export default function Navbar() {
    const [navbar, setNavbar] = useState( false )
    return (
      <>
        <header>
            <nav className="w-full min-h-[87px] m-auto bg-white fixed top-0 right-0 left-0 z-10">
                <div className="justify-between mx-auto lg:flex lg:items-center lg:px-8 lg:pr-0 lg:pl-4"> 
                    <div className="flex justify-between items-center lg:px-4 lg:py-3 md:px-[0px] md:py-[0] lg:px-0">
                        <Link href='/' className='block w-[100px] lg:w-[134px] h-[100%] ml-[20px] my-[5px] lg:ml-[0px] lg:my-[0px]'>
                            <Image src={headerData.logo} width={134} height={63} alt='logo' property='true'/>
                        </Link>
                        <div className="lg:hidden flex items-center border-l-[1px] border-solid border-[#000] pl-[8px]">
                            <div className='text-[#555] text-[12px] md:text-[14px] lg:relative lg:top-[5px] lg:right-[28px] hover:text-[var(--secondary-color)] text-right'>
                                <Link href='http://www.crimsonhotelmanila.com.cn/' target='_blank'>
                                    简体中文
                                </Link>
                            </div>
                            <button className="p-2 rounded-md outline-none text-2xl text-[var(--secondary-color)]" onClick={ () => setNavbar( !navbar )}>
                        {navbar ? <FaTimesCircle /> : <FaBars /> }
                            </button>
                            <Link href='/' className='md:w-[125px] lg:w-[200px] py-[10px] px-[5px] h-[100%] leading-[87px] flex justify-center items-center text-[10px] md:text-[15px] btn-primary uppercase font-primary text-[var(--primary-color)] hover:bg-[var(--fourth-color)]'>
                                Book Now
                            </Link>
                        </div>
                    </div>
                    <div className={`flex-1 justify-self-center ${styles.navbarDes}`}>
                        <div className='hidden lg:block text-[#555] text-[14px] lg:relative lg:top-[5px] lg:right-[28px] hover:text-[var(--secondary-color)] text-right'>
                            <Link href='http://www.crimsonhotelmanila.com.cn/' target='_blank'>
                                简体中文
                            </Link>
                        </div>
                        <div className={`pb-3 lg:mr-[20px] mt-8 lg:block lg:pb-0 lg:mt-0 ${ navbar ? 'p-0 mt-[0px] lg:p-0 block' : 'hidden'}`}>
                            <ul className='h-screen justify-end items-center lg:h-auto lg:flex border-solid border-t-[3px]  border-[var(--secondary-color)] lg:border-none font-secondary '>
                                {headerData.links.map((link, index) => (
                                <li key={index} className='text-left lg:text-center p-3 uppercase text-[14px] text-[var(--third-color)] lg:px-2 hover:text-[var(--secondary-color)] cursor-pointer'>
                                    <Link onClick={ () => setNavbar( !navbar )} href={link.path}>{link.title}</Link>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <Link href='/' className='md:h-[50px] md:w-[125px] lg:w-[200px] lg:h-[100%] leading-[87px] flex justify-center items-center text-[16px] btn-primary uppercase font-primary text-[var(--primary-color)] hover:bg-[var(--fourth-color)]'>
                            Book Now
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
      </>
    )
}
 