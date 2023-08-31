import Image from 'next/image'
import React from 'react'
import Logo from "../assets/Logo1.png";
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function Nav() {
    return (
        <section className='px-10 py-5 flex justify-between items-center gap-3 text-white bg-[#0B2447] rounded-b-3xl sticky top-0 shadow-2xl z-50'>
            <Image src={Logo} width={80} alt='Logo' />
            <DesktopNav />
            <MobileNav />
        </section>
    )
}

export default Nav