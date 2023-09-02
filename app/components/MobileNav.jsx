'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from "../assets/Logo1.png";

function MobileNav() {
    const [Open, setOpen] = useState(0);

    return (
        <div className='lg:hidden'>
            <div className="drawer">
                <input id="my-drawer" type={ Open ? `checkbox` : 'reset'} className="drawer-toggle" />
                <div className="drawer-content">
                    <label for="my-drawer" className="drawer-button">
                        <svg onClick={() => setOpen(!Open)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list-nested" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </label>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-white text-black">
                        <Image src={Logo} width={150} className='p-5' alt='Img' />
                        <ul className="menu menu-horizontal flex flex-col items-start justify-center gap-3">
                            <li>
                                <span>Generators list</span>
                                <ul>
                                    <li><Link className={`transition-all outline-none`} href='/'>Cummins</Link></li>
                                    <li><Link className={`transition-all outline-none`} href='/'>Perkin UK</Link></li>
                                    <li><Link className={`transition-all outline-none`} href='/'>YD</Link></li>
                                    <li><Link className={`transition-all outline-none`} href='/'>Tazzato</Link></li>
                                    <li><Link className={`transition-all outline-none`} href='/'>RENTAL GENRATORS</Link></li>
                                </ul>
                            </li>
                            <li><Link className={`transition-all outline-none`} href='/ac' onClick={()=>setOpen(!Open)}>AC Inverter</Link></li>
                            <li><Link className={`transition-all outline-none`} href='/' onClick={()=>setOpen(!Open)}>ATS</Link></li>
                            <li><Link className={`transition-all outline-none`} href='/' onClick={()=>setOpen(!Open)}>CCTV</Link></li>
                            <li><Link className={`transition-all outline-none`} href='/' onClick={()=>setOpen(!Open)}>Others list</Link></li>
                            <li><Link className={`transition-all outline-none`} href='/contact' onClick={()=>setOpen(!Open)}>Contact Us</Link></li>
                            <li><Link className={`transition-all outline-none`} href='/load' onClick={()=>setOpen(!Open)}>Load Calculator</Link></li>
                            <li><Link className={`transition-all outline-none`} href='/applications' onClick={()=>setOpen(!Open)}>Applications</Link></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileNav


// import React from 'react'

// function MobileNav() {
//   return (
//     <div className='lg:hidden'>MobileNav</div>
//   )
// }

// export default MobileNav