import Image from 'next/image'
import React from 'react'
import Logo from "../assets/Logo/ICONIC ENERGY SOLUTION-02.svg";
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Link from 'next/link';

function Nav() {
    return (
        <section className='px-10 py-5 flex justify-between items-center gap-3 text-white bg-[#0B2447]/90 rounded-b-3xl sticky top-0 shadow-2xl z-50 backdrop-blur-3xl'>
            <Link href='/'>
                <Image src={Logo} alt='Logo' className='w-20' />
            </Link>
            <DesktopNav />
            <MobileNav />
        </section>
    )
}

export default Nav