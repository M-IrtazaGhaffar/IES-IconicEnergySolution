'use client';
import Link from 'next/link'
import React, { useRef } from 'react'

function DesktopNavChild() {
    const refParent = useRef()
    const refChild = useRef()

    const handleHoverEnter = (e) => {
        refChild.current.style.display = 'block'
    }

    const handleHoverLeave = (e) => {
        refChild.current.style.display = 'none'
    }

    return (
        <div>
            <Link href='/gen' className='navDesktopBtn' ref={refParent} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} >Generators</Link>
            <ul ref={refChild} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className="p-2 min-w-[250px] bg-white transition-all outline-none text-black navDesktopList rounded-lg">
                <li><Link className={`transition-all outline-none`} href='/gen/cummins'>Cummins</Link></li>
                <li><Link className={`transition-all outline-none`} href='/gen/perkins'>Perkin UK</Link></li>
                <li><Link className={`transition-all outline-none`} href='/gen/yd'>YD</Link></li>
                <li><Link className={`transition-all outline-none`} href='/gen/energizer'>Energizer</Link></li>
                <li><Link className={`transition-all outline-none`} href='/gen/tazato'>Tazato</Link></li>
                <li><Link className={`transition-all outline-none`} href='/gen/rental'>Rental Generators</Link></li>
            </ul>
        </div>
    )
}

export default DesktopNavChild