import React from 'react'
import Link from 'next/link';
import DesktopNavChild from './DesktopNavChild';

function DesktopNav() {
    return (
        <div className='text-sm hidden lg:block'>
            <ul className="menu menu-horizontal flex items-center justify-center gap-3">
                <li>
                    <DesktopNavChild />
                </li>
                <li><Link className={`transition-all outline-none`} href='/ac'>AC Inverter</Link></li>
                <li><Link className={`transition-all outline-none`} href='/ats'>ATS</Link></li>
                <li><Link className={`transition-all outline-none`} href='/cctv'>CCTV</Link></li>
                <li><Link className={`transition-all outline-none`} href='/others'>Others</Link></li>
                <li><Link className={`transition-all outline-none`} href='/contact'>Contact Us</Link></li>
                <li><Link className={`transition-all outline-none`} href='/load'>Load Calculator</Link></li>
                <li><Link className={`transition-all outline-none`} href='/applications'>Applications</Link></li>
            </ul>
        </div>
    )
}

export default DesktopNav