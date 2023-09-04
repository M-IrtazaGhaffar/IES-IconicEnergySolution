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
            <span className='navDesktopBtn' ref={refParent} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} >Generators</span>
            <ul ref={refChild} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className="p-2 min-w-[250px] bg-white transition-all outline-none text-black navDesktopList rounded-lg">
                <li><Link className={`transition-all outline-none`} href='/'>Cummins</Link></li>
                <li><Link className={`transition-all outline-none`} href='/'>Perkin UK</Link></li>
                <li><Link className={`transition-all outline-none`} href='/'>YD</Link></li>
                <li><Link className={`transition-all outline-none`} href='/'>Tazzato</Link></li>
                <li><Link className={`transition-all outline-none`} href='/'>RENTAL GENRATORS</Link></li>
            </ul>
        </div>
    )
}

export default DesktopNavChild