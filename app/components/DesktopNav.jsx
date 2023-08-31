import React from 'react'
import Link from 'next/link';

function DesktopNav() {
    return (
        <div className='text-sm hidden lg:block'>
            <ul className="menu menu-horizontal flex items-center justify-center gap-3">
                <li tabIndex={0}>
                    <details>
                        <summary>Generator</summary>
                        <ul className="p-2 min-w-[250px] bg-white transition-all outline-none text-black">
                            <li tabIndex={0}>
                                <details>
                                    <summary>Gas Generator</summary>
                                    <ul className="p-2 min-w-[250px] bg-white transition-all outline-none text-black">
                                        <li><Link href='/'>1</Link></li>
                                        <li><Link href='/'>2</Link></li>
                                        <li><Link href='/'>3</Link></li>
                                        <li><Link href='/'>4</Link></li>
                                        <li><Link href='/'>5</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Diesel Generator</summary>
                                    <ul className="p-2 min-w-[250px] bg-white transition-all outline-none text-black">
                                        <li><Link href='/'>1</Link></li>
                                        <li><Link href='/'>2</Link></li>
                                        <li><Link href='/'>3</Link></li>
                                        <li><Link href='/'>4</Link></li>
                                        <li><Link href='/'>5</Link></li>
                                    </ul>
                                </details>
                            </li>

                        </ul>
                    </details>
                </li>
                <li tabIndex={0}>
                    <details>
                        <summary>AC</summary>
                        <ul className="p-2 min-w-[250px] bg-white transition-all outline-none text-black">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </details>
                </li>
                <li><Link className={`transition-all outline-none`} href='/contact'>Contact Us</Link></li>
                <li><Link className={`transition-all outline-none`} href='/'>Load Calculator</Link></li>
                <li><Link className={`transition-all outline-none`} href='/'>Applications</Link></li>
            </ul>
        </div>
    )
}

export default DesktopNav