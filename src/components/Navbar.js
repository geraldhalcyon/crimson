"use client"

import Link from 'next/link'
import { useState } from 'react'
import {FaBars, FaTimesCircle} from "react-icons/fa"

import Image from 'next/image';
import headerData from '@/static-data/header';

// posts will be populated at build time by getStaticProps()
export default function Navbar() {
    const [navbar, setNavbar] = useState( false )
    return (
      <>
        <header>
            <nav className="w-full m-auto bg-white fixed top-0 right-0 left-0 z-10">
                <div className="justify-between mx-auto md:flex md:items-center md:px-8 lg:px-4"> 
                    <div className="flex justify-between items center px-4 py-3 md:px-0">
                        <Link href='/' className='block w-[134px] h-[63px]'>
                            <Image src={headerData.logo} width={134} height={63} />
                        </Link>
                        <div className="md:hidden">
                            <button className="p-2 rounded-md outline-none text-2xl text-[var(--secondary-color)]" onClick={ () => setNavbar( !navbar )}>
                        {navbar ? <FaTimesCircle /> : <FaBars /> }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? 'p-5 mt-0 md:p-0 block' : 'hidden'}`}>
                        <ul className='h-screen justify-end items-center md:h-auto md:flex border-t-[3px] md:border-none font-secondary '>
                            {headerData.links.map((link, index) => (
                            <li key={index} className='text-left p-3 uppercase text-[14px] text-[var(--third-color)]  md:px-2 hover:text-[var(--secondary-color)] cursor-pointer'>
                                <Link onClick={ () => setNavbar( !navbar )} href={link.path}>{link.title}</Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
      </>
    )
}
 